import { useEffect, useState } from "react";
import { HeroInfo } from "../types/types";
import HeroAnimeCard from "./HeroAnimeCard";

const HeroGroup = (props: { url: string }) => {
  const [data, setData] = useState<HeroInfo[]>([]);
  const [loading, setLoading] = useState(true);
  let childIndex = 0;

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
                titleEnglish: datum.titles[0].title,
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
    <div className="m-2 grid grid-flow-col gap-3 overflow-scroll">
      {data.map((datum) => (
        <HeroAnimeCard
          key={childIndex++}
          image={datum.image}
          title={datum.title}
          titleEnglish={datum.titleEnglish}
          studios={datum.studios}
          type={datum.type}
          genres={datum.genres}
          trailer={datum.trailer}
          synopsis={datum.synopsis}
        />
      ))}
    </div>
  );
};
export default HeroGroup;
