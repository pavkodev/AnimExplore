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
    setWatchlist(updated);
    localStorage.setItem("watchlist", JSON.stringify(updated));
  };

  return [watchlist, updateWatchlist];
};

export default useWatchlist;
