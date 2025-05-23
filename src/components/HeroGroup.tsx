import { useCallback, useEffect, useState } from "react";
import { HeroInfo } from "../types/types";
import HeroAnimeCard from "./HeroAnimeCard";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const HeroGroup = (props: { url: string }) => {
  //Code taken from https://stackoverflow.com/questions/14226803/wait-5-seconds-before-executing-next-line
  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

  const [data, setData] = useState<HeroInfo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState("");

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ stopOnInteraction: false }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    const maxRetries = 5;
    let retryCounter = 0;
    const fetchData = async () => {
      await delay(Math.random() * 500);
      const url = props.url;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(
            "Error fetching data in HeroGroup component: " +
              response.statusText,
          );
        }
        const json = await response.json();

        //Code taken from https://stackoverflow.com/questions/23507853/remove-duplicate-objects-from-json-array Credit: Aarchie
        const jsonNoDuplicates = json.data.filter(
          (
            item: { title: string; synopsis: string },
            index: number,
            originalJson: [{ title: string; synopsis: string }],
          ) =>
            index ===
            originalJson.findIndex(
              (originalItem) =>
                originalItem.title === item.title &&
                originalItem.synopsis === item.synopsis,
            ),
        );

        jsonNoDuplicates.forEach(
          (datum: {
            mal_id: number;
            url: string;
            studios: { name: string }[];
            genres: { name: string }[];
            images: { webp: { large_image_url: string } };
            title: string;
            title_english: string | null;
            title_synonyms: string[];
            type: string;
            trailer: { url: string };
            synopsis: string;
          }) => {
            const studios: string[] = datum.studios.map(
              (studio: { name: string }) => studio.name,
            );
            const genres: string[] = datum.genres.map(
              (genre: { name: string }) => genre.name,
            );

            let altTitle: string;
            if (datum.title_english && datum.title_english !== datum.title) {
              altTitle = datum.title_english;
            } else if (datum.title_synonyms.length > 0) {
              altTitle = datum.title_synonyms[0];
            } else {
              altTitle = "";
            }

            setData((data) => [
              ...data,
              {
                id: datum.mal_id,
                url: datum.url,
                image: datum.images.webp.large_image_url,
                title: datum.title,
                altTitle: altTitle,
                studios: studios,
                type: datum.type,
                genres: genres,
                trailer: datum.trailer.url,
                synopsis: datum.synopsis,
              },
            ]);
          },
        );
        setLoading(false);
      } catch (error) {
        let message = "Unknown error";
        if (error instanceof Error) message = error.message;
        if (retryCounter <= maxRetries) {
          retryCounter++;
          console.warn("Hero cards error: " + error + " Retrying...");
          fetchData();
        }
        console.error("Hero cards error: " + message);
        setError(message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    return () => {
      setLoading(true);
      setData([]);
    };
  }, [props.url]);

  return loading ? (
    <div className="embla relative">
      <div className="embla__container">
        {Array.from({ length: 5 }).map((_, index) => (
          <HeroAnimeCard
            key={index}
            id={0}
            url={""}
            image={""}
            title={""}
            altTitle={""}
            studios={[]}
            type={""}
            genres={[]}
            trailer={""}
            synopsis={""}
            loading={true}
          />
        ))}
      </div>
    </div>
  ) : error !== "" ? (
    <p className="m-4 text-red-400">Cannot reach database ({error})</p>
  ) : (
    <div className="embla relative" ref={emblaRef}>
      <div className="embla__container">
        {data.map((datum, index) => (
          <HeroAnimeCard key={index} {...datum} />
        ))}
      </div>
      <button
        className="embla__prev absolute top-[50%] left-0"
        onClick={scrollPrev}
      >
        <svg
          className="ml-2 h-10 w-10 cursor-pointer fill-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
        >
          <path d="m480-320 56-56-64-64h168v-80H472l64-64-56-56-160 160 160 160Zm0 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" />
        </svg>
      </button>
      <button
        className="embla__next absolute top-[50%] right-0 mr-2 cursor-pointer"
        onClick={scrollNext}
      >
        <svg
          className="h-10 w-10 fill-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
        >
          <path d="m480-320 160-160-160-160-56 56 64 64H320v80h168l-64 64 56 56Zm0 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" />
        </svg>
      </button>
    </div>
  );
};
export default HeroGroup;
