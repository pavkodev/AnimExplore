import { useContext } from "react";
import { WatchlistContext } from "../contexts/WatchlistContext";

const HeaderComponent = () => {
  const { watchlist } = useContext(WatchlistContext);
  return (
    <header className="flex items-center justify-center border-b-2 border-orange-400 bg-inherit text-white">
      {/* CODE BELOW: BUTTONS SAME LENGTH AS SEARCH BAR
      <div className="grid grid-cols-2 grid-rows-2">
        <input
          className="bg-slate-800 m-2 p-2 col-span-2 rounded"
          type="text"
          name="in-search"
          placeholder="Search titles..."
          id="in-search"
        />
        <div className="rounded flex mb-2 col-span-2 justify-between mt-1">
          <button className="w-max mx-1 flex-1 hover:bg-slate-900 bg-orange-500 rounded">
            TV Shows
          </button>
          <div className="border-1"></div>
          <button className="w-max mx-1 flex-1 hover:bg-slate-900 bg-orange-500 rounded">
            Film
          </button>
        </div>
      </div> */}
      <div className="flex flex-row items-center justify-center p-2">
        <input
          className="min-w-fit rounded bg-slate-800 p-2"
          type="text"
          name="in-search"
          placeholder="Search titles..."
          id="in-search"
        />
        <button
          type="button"
          className="group relative m-2 inline-flex cursor-pointer items-center rounded-lg bg-slate-700 p-2 text-center text-sm font-medium text-white transition-all hover:text-cyan-400 active:translate-y-0.5"
        >
          <svg
            className="h-6 w-6 fill-current sm:pr-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
          >
            <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" />
          </svg>
          {/* Badge code inspired by https://flowbite.com/docs/components/badge/ */}
          <span className="sr-only">
            Watchlist counter ({watchlist.length})
          </span>
          <div className="absolute -end-2 -top-2 inline-flex h-6 w-6 items-center justify-center rounded-full border-2 border-gray-900 bg-orange-400 text-xs font-bold text-white transition-all group-hover:bg-cyan-400">
            {watchlist.length}
          </div>
          <span className="hidden sm:inline">Watchlist</span>
        </button>
      </div>
    </header>
  );
};

export default HeaderComponent;
