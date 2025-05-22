import { useContext } from "react";
import { WatchlistContext } from "../contexts/WatchlistContext";
import { Link } from "react-router";
import { useSearchParams } from "react-router";

const HeaderComponent = () => {
  const { watchlist } = useContext(WatchlistContext);
  const [, setSearchParams] = useSearchParams();
  return (
    <header className="flex items-center justify-center border-b-2 border-orange-400 bg-inherit text-white">
      <div className="flex flex-row items-center justify-center p-2">
        <form
          className="flex min-w-fit rounded bg-slate-800 p-2"
          onSubmit={(event) => {
            event.preventDefault();
            const form = event.currentTarget as HTMLFormElement;
            const searchBox = form.elements.namedItem(
              "in-search",
            ) as HTMLInputElement;
            if (searchBox) {
              setSearchParams(
                searchBox.value ? { query: searchBox.value } : {},
              );
            }
          }}
        >
          <input
            type="text"
            name="in-search"
            placeholder="Search titles..."
            id="in-search"
          />
          <button type="submit" className="pl-2">
            <svg
              className="h-5 w-5 fill-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
            >
              <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
            </svg>
          </button>
        </form>
        <Link to="/watchlist">
          <button
            type="button"
            className="group relative m-2 inline-flex cursor-pointer items-center rounded bg-slate-700 p-2 text-center text-sm font-medium text-white transition-all hover:text-cyan-400 active:translate-y-0.5"
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
        </Link>
      </div>
    </header>
  );
};

export default HeaderComponent;
