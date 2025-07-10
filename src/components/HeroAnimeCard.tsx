import { useContext } from "react";
import { HeroInfo } from "../types/types";
import { WatchlistContext } from "../contexts/WatchlistContext";

const HeroAnimeCard = (props: HeroInfo) => {
  const { watchlist, setWatchlist } = useContext(WatchlistContext);
  const inWatchlist = watchlist.includes(props.id);
  return (
    <>
      {props.loading ? (
        <div className="embla__slide m-2 flex snap-center flex-col items-center justify-center rounded border-2 border-orange-600 bg-gray-950 pb-4 text-white lg:w-max lg:flex-row lg:pr-4 lg:pb-0">
          <div className="m-4 h-80 w-60 animate-pulse self-stretch rounded bg-gray-500 lg:h-120 lg:w-90"></div>
          <div className="flex flex-1 flex-col items-center justify-center text-center lg:my-4 lg:ml-8 lg:w-[50ch]">
            <div className="mb-2 h-5 w-50 animate-pulse rounded bg-gray-500"></div>
            <div className="text-md mb-4 line-clamp-3 hidden h-3 w-48 animate-pulse rounded bg-gray-500 font-semibold sm:block lg:mb-0"></div>
            <div className="my-2 hidden h-3 w-40 animate-pulse rounded bg-gray-500 font-thin italic lg:block"></div>
            <div className="flex gap-2">
              <div className="h-4 w-6 animate-pulse rounded bg-gray-500"></div>
              <div className="inline h-4 w-18 animate-pulse rounded bg-gray-500"></div>
            </div>
            <div className="my-4 hidden h-8 w-24 animate-pulse rounded bg-gray-500 sm:flex"></div>
            <div className="hidden h-60 w-100 animate-pulse rounded bg-gray-500 lg:line-clamp-15"></div>
          </div>
        </div>
      ) : (
        <div className="embla__slide relative m-2 flex w-[80vw] snap-center flex-col items-center justify-center rounded border-2 border-orange-600 bg-gray-950 pb-4 text-white lg:w-max lg:flex-row lg:pr-4 lg:pb-0">
          <img
            src={props.image}
            alt={`${props.altTitle} cover image`}
            className="h-full self-stretch rounded mask-b-from-0 lg:max-w-[67%] lg:mask-r-from-0 lg:mask-b-from-100%"
          />
          <button
            onClick={() => {
              if (!inWatchlist) {
                setWatchlist(props.id, "add");
              } else {
                setWatchlist(props.id, "remove");
              }
            }}
            className={`absolute top-0 left-0 m-2 flex cursor-pointer items-center justify-center rounded bg-slate-800/70 p-2 transition-all hover:bg-slate-800 active:translate-y-0.5 ${inWatchlist ? "text-cyan-400" : ""}`}
          >
            <svg
              className="h-6 w-6 fill-current pr-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
            >
              <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" />
            </svg>
            {inWatchlist ? "In watchlist" : "Add to watchlist"}
          </button>
          <div className="flex flex-1 flex-col items-center justify-center text-center lg:my-4 lg:ml-8 lg:w-[50ch]">
            <h2
              className="mb-2 line-clamp-3 text-xl font-bold"
              title={props.title}
            >
              {props.title}
            </h2>
            <h3 className="text-md mb-4 line-clamp-3 hidden font-semibold sm:block lg:mb-0">
              {props.altTitle}
            </h3>
            <p className="mb-8 hidden font-thin italic lg:block">
              {props.studios.join(", ")}
            </p>
            <p>
              <b>{props.type}</b>
              <span className="pl-2 italic">{props.genres.join(", ")}</span>
            </p>
            <a href={props.trailer} className="m-1 mb-8" target="_blank">
              <button
                className="hidden cursor-pointer items-center justify-center rounded border-1 bg-orange-600 p-2 disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400 sm:flex"
                disabled={!props.trailer ? true : false}
              >
                <svg
                  className="mr-1 h-5 w-5 fill-current align-middle"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -960 960 960"
                >
                  <path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                </svg>
                WATCH TRAILER
              </button>
            </a>
            <p className="hidden lg:line-clamp-15">{props.synopsis}</p>
            <a href={props.url} className="inline text-orange-400 underline">
              Learn more...
            </a>
          </div>
        </div>
      )}
    </>
  );
};
export default HeroAnimeCard;
