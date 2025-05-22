import { createContext } from "react";

export type TypeWatchlistContext = {
  watchlist: number[];
  setWatchlist: (id: number, action: "add" | "remove") => void;
};

export const WatchlistContext = createContext<TypeWatchlistContext>({
  watchlist: [],
  setWatchlist: () => {},
});
