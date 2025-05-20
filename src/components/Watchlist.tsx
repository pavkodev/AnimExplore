import { useContext, useEffect, useState } from "react";
import { WatchlistContext } from "../contexts/WatchlistContext";
import { AnimeCardInfo } from "../types/types";
import WatchlistSection from "./WatchlistSection";

const Watchlist = () => {
  const { watchlist } = useContext(WatchlistContext);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [watchlistInfo, setWatchlistInfo] = useState<AnimeCardInfo[]>([]);
  const [currentAnimeInfo, setCurrentAnimeInfo] = useState<AnimeCardInfo[]>([]);
  const [upcomingAnimeInfo, setUpcomingAnimeInfo] = useState<AnimeCardInfo[]>(
    [],
  );
  const [pastAnimeInfo, setPastAnimeInfo] = useState<AnimeCardInfo[]>([]);

  //This will run every time a new anime is added. Make it run only once and if new anime is added, run it for that anime only
  useEffect(() => {
    setLoading(true);
    const watchlistCounter = watchlist.length;

    const maxRetries = 5;
    let retryCounter = 0;

    let fetchCounter = 0;
    let stagger = 0;
    watchlist.forEach((id) => {
      setTimeout(() => {
        const fetchData = async () => {
          fetchCounter++;
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
            setWatchlistInfo((watchlistInfo) => [...watchlistInfo, dataObject]);
          } catch (error) {
            let message = "Unknown error";
            if (error instanceof Error) message = error.message;

            if (retryCounter <= maxRetries) {
              retryCounter++;
              console.warn(error + "Retrying....");
              fetchData();
            }
            console.error(error);
            setError(message);
            console.error(message);
          } finally {
            if (fetchCounter >= watchlistCounter) setLoading(false);
          }
        };
        fetchData();
      }, 350 * stagger);
      stagger++;
    });
  }, [watchlist]);
  return (
    <>
      {error !== "" ? (
        <div className="flex items-center justify-center">
          <p className="m-4 text-white">{error}</p>
        </div>
      ) : watchlist.length < 1 ? (
        <div className="flex items-center justify-center">
          <p className="m-4 text-white">
            Add something to your watchlist to get started!
          </p>
        </div>
      ) : (
        <>
          {currentAnimeInfo.length > 0 ? (
            <WatchlistSection
              heading={"Currently Airing"}
              wishlistItems={currentAnimeInfo}
              loading={loading}
            />
          ) : null}

          {upcomingAnimeInfo.length > 0 ? (
            <WatchlistSection
              heading={"Upcoming"}
              wishlistItems={upcomingAnimeInfo}
              loading={loading}
            />
          ) : null}

          {pastAnimeInfo.length > 0 ? (
            <WatchlistSection
              heading={"Finished Airing"}
              wishlistItems={pastAnimeInfo}
              loading={loading}
            />
          ) : null}
        </>
      )}
    </>
  );
};
export default Watchlist;
