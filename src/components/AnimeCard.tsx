import { useContext } from "react";
import { WatchlistContext } from "../contexts/WatchlistContext";
import { AnimeCardInfo } from "../types/types";

const AnimeCard = (props: AnimeCardInfo) => {
  const { watchlist, setWatchlist } = useContext(WatchlistContext);
  const inWatchlist = watchlist.includes(props.id);

  if (props.loading) {
    return (
      <div className="m-2 flex w-2xs flex-col items-center justify-between rounded border-2 border-slate-800 bg-slate-700 p-2 sm:w-xs">
        {/* Image skeleton */}
        <div className="h-80 w-65 animate-pulse rounded bg-slate-500" />
        {/* Title skeleton */}
        <div className="m-2 h-5 w-70 animate-pulse rounded bg-slate-500" />
        <div className="m-2 h-5 w-30 animate-pulse rounded bg-slate-500" />
        <div className="m-2 h-5 w-50 animate-pulse rounded bg-slate-500" />
        {/* Aired skeleton */}
        <div />
        {/* Broadcast time skeleton */}
        <div />
        <div className="mt-2 flex w-75 animate-pulse justify-around">
          {/* Button skeleton */}
          <div className="h-10 w-30 animate-pulse rounded bg-slate-500" />
          <div className="h-10 w-30 animate-pulse rounded bg-slate-500" />
        </div>
      </div>
    );
  }
  return (
    <div className="m-2 flex w-2xs flex-col items-center justify-between rounded border-2 border-slate-800 bg-slate-700 p-2 text-center text-white sm:w-xs">
      <img
        loading="lazy"
        src={props.image}
        alt={"Cover of " + props.title}
        className="h-80 rounded"
      />
      <h1
        className="line-clamp-2 pt-2 font-semibold text-white"
        title={props.title}
      >
        {props.title}
      </h1>
      {props.rating ? (
        <p className="font-thin">Rating: {props.rating}</p>
      ) : null}
      {props.aired ? <p>{props.aired}</p> : null}
      {props.broadcastTime ? (
        <p>
          <b>Airs: </b>
          <i>{props.broadcastTime}</i>
        </p>
      ) : null}
      <div className="mt-2 flex w-full justify-around">
        <a
          href={props.url}
          target="_blank"
          className="flex cursor-pointer items-center justify-center rounded p-2 transition-all hover:bg-slate-800 active:translate-y-0.5"
        >
          <svg
            className="h-10 w-10 fill-white sm:h-6 sm:w-6 sm:pr-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
          >
            <path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
          </svg>
          Learn more
        </a>
        <div className="border-1"></div>
        <button
          onClick={() => {
            if (!inWatchlist) {
              setWatchlist(props.id, "add");
            } else {
              setWatchlist(props.id, "remove");
            }
          }}
          className={`flex cursor-pointer items-center justify-center rounded p-2 transition-all hover:bg-slate-800 active:translate-y-0.5 ${inWatchlist ? "text-cyan-400" : ""} `}
        >
          <svg
            className="h-10 w-10 fill-current sm:h-6 sm:w-6 sm:pr-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
          >
            <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" />
          </svg>
          {inWatchlist ? "In watchlist" : "Add to watchlist"}
        </button>
      </div>
    </div>
  );
};
export default AnimeCard;
