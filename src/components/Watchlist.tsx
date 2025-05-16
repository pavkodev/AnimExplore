import { useContext, useEffect, useState } from "react";
import HeadingComponent from "./HeadingComponent";
import { WatchlistContext } from "../contexts/WatchlistContext";
import { AnimeCardInfo } from "../types/types";
import AnimeCard from "./AnimeCard";

const Watchlist = () => {
  const { watchlist } = useContext(WatchlistContext);

  const [watchlistInfo, setWatchlistInfo] = useState<AnimeCardInfo[]>([]);
  const [currentAnimeInfo, setCurrentAnimeInfo] = useState<AnimeCardInfo[]>([]);
  const [upcomingAnimeInfo, setUpcomingAnimeInfo] = useState<AnimeCardInfo[]>(
    [],
  );
  const [pastAnimeInfo, setPastAnimeInfo] = useState<AnimeCardInfo[]>([]);

  //This will run every time a new anime is added. Make it run only once and if new anime is added, run it for that anime only
  useEffect(
    () =>
      watchlist.forEach((id) => {
        setTimeout(() => {
          const fetchData = async () => {
            console.log("inside fetchData");
            const url = `../src/assets/data/${id}.json`;

            try {
              const response = await fetch(url);

              if (!response.ok) {
                throw new Error(
                  "Error fetching data for wishlist: " + response.status,
                );
              }

              const json = await response.json();
              const dataObject: AnimeCardInfo = {
                id: json.data.mal_id,
                url: json.data.url,
                image: json.data.images.webp.image_url,
                rating: json.data.score ? json.data.score : null,
                title: json.data.title,
                aired: json.data.aired.string,
                broadcastTime: json.data.broadcast.string,
              };
              switch (json.data.status) {
                case "Currently Airing":
                  setCurrentAnimeInfo((currentAnimeInfo) => [
                    ...currentAnimeInfo,
                    dataObject,
                  ]);
                  console.log("currently airing: " + dataObject.id);
                  break;
                case "Not yet aired":
                  setUpcomingAnimeInfo((upcomingAnimeInfo) => [
                    ...upcomingAnimeInfo,
                    dataObject,
                  ]);
                  console.log("not yet airing: " + dataObject.id);
                  break;

                case "Finished Airing":
                  setPastAnimeInfo((pastAnimeInfo) => [
                    ...pastAnimeInfo,
                    dataObject,
                  ]);
                  console.log("finished airing: " + dataObject.id);
                  break;
              }
              setWatchlistInfo((watchlistInfo) => [
                ...watchlistInfo,
                dataObject,
              ]);
            } catch (error) {
              console.error(error);
            }
          };
          fetchData();
        }, 500);
      }),
    [watchlist],
  );
  return (
    <>
      <HeadingComponent heading={"Currently Airing"} />
      {currentAnimeInfo.map((anime, index) => (
        <AnimeCard key={index} {...anime} aired={undefined} />
      ))}
      <HeadingComponent heading={"Not Yet Aired"} />
      {upcomingAnimeInfo.map((anime, index) => (
        <AnimeCard key={index} {...anime} broadcastTime={undefined} />
      ))}
      <HeadingComponent heading={"Finished Airing"} />
      {pastAnimeInfo.map((anime, index) => (
        <AnimeCard key={index} {...anime} broadcastTime={undefined} />
      ))}
      ;
    </>
  );
};
export default Watchlist;
