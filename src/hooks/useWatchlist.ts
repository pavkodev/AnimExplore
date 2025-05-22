import { useState } from "react";

const getWatchlist = (): number[] => {
  const watchlist = localStorage.getItem("watchlist");
  if (!watchlist) return [];
  const parsedWatchlist = JSON.parse(watchlist);
  return parsedWatchlist;
};

const useWatchlist = (): [
  number[],
  (id: number, action: "add" | "remove") => void,
] => {
  const [watchlist, setWatchlist] = useState<number[]>(getWatchlist());

  const updateWatchlist = (id: number, action: "add" | "remove") => {
    switch (action) {
      case "add": {
        const updated = [...watchlist, id];
        setWatchlist(updated);
        localStorage.setItem("watchlist", JSON.stringify(updated));
        break;
      }
      case "remove": {
        const stored = localStorage.getItem("watchlist");
        if (stored) {
          const storedWatchlist: number[] = JSON.parse(stored);
          const updated = storedWatchlist.filter((numbers) => numbers !== id);
          setWatchlist(updated);
          localStorage.setItem("watchlist", JSON.stringify(updated));
        }
        break;
      }
    }
  };

  return [watchlist, updateWatchlist];
};

export default useWatchlist;
