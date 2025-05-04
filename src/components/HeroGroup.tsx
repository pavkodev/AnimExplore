import { useCallback, useEffect, useState } from "react";
import { HeroInfo } from "../types/types";
import HeroAnimeCard from "./HeroAnimeCard";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const HeroGroup = (props: { url: string }) => {
  const [data, setData] = useState<HeroInfo[]>([]);
  const [loading, setLoading] = useState(true);

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
    const fetchData = async () => {
      const url = props.url;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(
            "Error fetching data in HeroGroup component: Status " +
              response.status,
          );
        }
        const json = await response.json();
        json.data.forEach(
          (datum: {
            studios: { name: string }[];
            genres: { name: string }[];
            images: { webp: { large_image_url: string } };
            titles: { title: string }[];
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
            setData((data) => [
              ...data,
              {
                image: datum.images.webp.large_image_url,
                title: datum.titles[0].title,
                altTitle: datum.titles[1].title,
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
        console.error(error);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <p className="text-white">Loading...</p>;
  }

  return (
    <div className="embla relative" ref={emblaRef}>
      <div className="embla__container">
        {data.map((datum, index) => (
          <HeroAnimeCard
            key={index}
            image={datum.image}
            title={datum.title}
            altTitle={datum.altTitle}
            studios={datum.studios}
            type={datum.type}
            genres={datum.genres}
            trailer={datum.trailer}
            synopsis={datum.synopsis}
          />
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
