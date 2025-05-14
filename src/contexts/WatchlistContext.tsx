import { createContext } from "react";

export type TypeWatchlistContext = {
  watchlist: number[];
  setWatchlist: (id: number) => void;
};

export const WatchlistContext = createContext<TypeWatchlistContext>({
  watchlist: [],
  setWatchlist: () => {},
});
