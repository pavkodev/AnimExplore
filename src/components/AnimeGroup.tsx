import { useEffect, useState } from "react";
import AnimeCard from "./AnimeCard";

const AnimeGroup = (props: { url: string }) => {
  type AnimeCardInfo = {
    image: string;
    name: string;
    rating: string;
  };

  const [data, setData] = useState<AnimeCardInfo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const url = props.url;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("ERROR FETCHING URL");
        }
        const json = await response.json();
        json.data.forEach(
          (datum: {
            images: { webp: { image_url: string } };
            title: string;
            score: string;
          }) => {
            setData((data) => [
              ...data,
              {
                image: datum.images.webp.image_url,
                name: datum.title,
                rating: datum.score,
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
  });

  console.log(data.length);
  return loading ? (
    <p className="p-4 text-white">Loading....</p>
  ) : !data ? (
    <p className="p-4 text-white">Cannot reach database.</p>
  ) : (
    <div className="m-2 grid grid-flow-col grid-rows-1 gap-3 overflow-scroll">
      {data.map((datum) => (
        <AnimeCard
          image={datum.image}
          name={datum.name}
          rating={datum.rating ? datum.rating : "Not yet rated"}
        />
      ))}
    </div>
  );
};

export default AnimeGroup;
