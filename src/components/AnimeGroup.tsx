import { useEffect, useState } from "react";
import AnimeCard from "./AnimeCard";
import { AnimeCardInfo } from "../types/types";

const AnimeGroup = (props: { url: string; scrollable: boolean }) => {
  const [data, setData] = useState<AnimeCardInfo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");
  //Code taken from https://stackoverflow.com/questions/14226803/wait-5-seconds-before-executing-next-line
  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

  useEffect(() => {
    const maxRetries = 5;
    let retryCounter = 0;
    const fetchData = async () => {
      await delay(Math.random() * 10000);
      const url = props.url;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Error fetching data: " + response.statusText);
        }
        const json = await response.json();
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
            images: { webp: { image_url: string } };
            title: string;
            score: string;
            aired: { string: string };
          }) => {
            setData((data) => [
              ...data,
              {
                id: datum.mal_id,
                url: datum.url,
                image: datum.images.webp.image_url,
                title: datum.title,
                rating: datum.score,
                aired: datum.aired.string,
              },
            ]);
          },
        );
      } catch (error) {
        let message = "Unknown error";
        if (error instanceof Error) message = error.message;
        if (retryCounter <= maxRetries) {
          retryCounter++;
          console.warn("Anime cards error: " + error + " Retrying....");
          fetchData();
        }
        console.error(error);
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
    <div
      className={
        props.scrollable
          ? "m-2 grid grid-flow-col grid-rows-1 gap-3 overflow-scroll overflow-y-hidden [&::-webkit-scrollbar]:m-2 [&::-webkit-scrollbar-thumb]:bg-gray-400 [&::-webkit-scrollbar-track]:bg-slate-800"
          : "grid grid-flow-row grid-cols-1 justify-items-center gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      }
    >
      {Array.from({ length: 10 }).map((_, index) => (
        <AnimeCard
          key={index}
          id={0}
          url={""}
          image={""}
          title={""}
          loading={true}
        />
      ))}
    </div>
  ) : error !== "" ? (
    <p className="p-4 text-red-400">Cannot reach database ({error}).</p>
  ) : data.length > 0 ? (
    <div
      className={
        props.scrollable
          ? "m-2 grid grid-flow-col grid-rows-1 gap-3 overflow-scroll overflow-y-hidden [&::-webkit-scrollbar]:m-2 [&::-webkit-scrollbar-thumb]:bg-gray-400 [&::-webkit-scrollbar-track]:bg-slate-800"
          : "grid grid-flow-row grid-cols-1 justify-items-center gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      }
    >
      {data.map((datum, index) => (
        <AnimeCard
          key={index}
          id={datum.id}
          url={datum.url}
          image={datum.image}
          title={datum.title}
          rating={datum.rating}
          aired={datum.aired}
        />
      ))}
    </div>
  ) : (
    <p className="p-4 font-semibold text-white">No results found 💔</p>
  );
};

export default AnimeGroup;
