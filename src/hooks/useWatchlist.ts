import { useState } from "react";

const getWatchlist = (): number[] => {
  const watchlist = localStorage.getItem("watchlist");
  if (!watchlist) return [];
  const parsedWatchlist = JSON.parse(watchlist);
  return parsedWatchlist;
};

const useWatchlist = (): [number[], (id: number) => void] => {
  const [watchlist, setWatchlist] = useState<number[]>(getWatchlist());

  const updateWatchlist = (id: number) => {
    const updated = [...watchlist, id];
    console.log("Updated:" + updated);
    setWatchlist(updated);

    console.log(JSON.stringify(updated));
    console.log("Watchlist: " + watchlist);
    localStorage.setItem("watchlist", JSON.stringify(updated));
    console.log("Watchlist localstorage: " + localStorage.getItem("watchlist"));
  };

  return [watchlist, updateWatchlist];
};

export default useWatchlist;
