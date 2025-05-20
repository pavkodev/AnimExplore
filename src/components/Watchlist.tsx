import { useContext, useEffect, useState } from "react";
import { WatchlistContext } from "../contexts/WatchlistContext";
import { AnimeCardInfo } from "../types/types";
import WatchlistSection from "./WatchlistSection";
import AnimeCard from "./AnimeCard";

const Watchlist = () => {
  const { watchlist } = useContext(WatchlistContext);

  const [loading, setLoading] = useState(true);
  const [watchlistInfo, setWatchlistInfo] = useState<AnimeCardInfo[]>([]);
  const [currentAnimeInfo, setCurrentAnimeInfo] = useState<AnimeCardInfo[]>([]);
  const [upcomingAnimeInfo, setUpcomingAnimeInfo] = useState<AnimeCardInfo[]>(
    [],
  );
  const [pastAnimeInfo, setPastAnimeInfo] = useState<AnimeCardInfo[]>([]);

  //This will run every time a new anime is added. Make it run only once and if new anime is added, run it for that anime only
  useEffect(() => {
    let stagger = 0;

    const fetchPromise = watchlist.map((id) => {
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          const fetchData = async () => {
            // const url = `../src/assets/data/${id}.json`;
            // Use one below once rate limit is refreshed
            const url = `https://api.jikan.moe/v4/anime/${id}/full`;

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
                  dataObject.aired = undefined;
                  setCurrentAnimeInfo((currentAnimeInfo) => [
                    ...currentAnimeInfo,
                    dataObject,
                  ]);
                  break;
                case "Not yet aired":
                  dataObject.broadcastTime = undefined;
                  setUpcomingAnimeInfo((upcomingAnimeInfo) => [
                    ...upcomingAnimeInfo,
                    dataObject,
                  ]);
                  break;

                case "Finished Airing":
                  dataObject.broadcastTime = undefined;
                  setPastAnimeInfo((pastAnimeInfo) => [
                    ...pastAnimeInfo,
                    dataObject,
                  ]);
                  break;
              }
              setWatchlistInfo((watchlistInfo) => [
                ...watchlistInfo,
                dataObject,
              ]);
            } catch (error) {
              console.error(error);
            } finally {
              resolve();
            }
          };
          fetchData();
        }, 500 * stagger);
        stagger++;
      });
    });
    Promise.all(fetchPromise).then(() => setLoading(false));
  }, [watchlist]);
  return (
    <>
      <WatchlistSection
        heading={"Currently Airing"}
        wishlistItems={currentAnimeInfo}
        loading={loading}
      />
      <div className="inline"></div>
      <WatchlistSection
        heading={"Upcoming"}
        wishlistItems={upcomingAnimeInfo}
        loading={loading}
      />
      <div className="inline"></div>
      <WatchlistSection
        heading={"Finished Airing"}
        wishlistItems={pastAnimeInfo}
        loading={loading}
      />
      <div className="inline"></div>
    </>
  );
};
export default Watchlist;
