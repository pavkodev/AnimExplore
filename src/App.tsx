import "./App.css";
import useWatchlist from "./hooks/useWatchlist";
import { WatchlistContext } from "./contexts/WatchlistContext";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import WatchlistPage from "./pages/WatchlistPage";
import SearchPage from "./pages/SearchPage";

function App() {
  const [watchlist, setWatchlist] = useWatchlist();
  const value = { watchlist, setWatchlist };

  return (
    <WatchlistContext.Provider value={value}>
      <BrowserRouter>
        <Routes>
          <Route path="AnimExplore/" element={<HomePage />}></Route>
          <Route path="AnimExplore/search" element={<SearchPage />}></Route>
          <Route
            path="AnimExplore/watchlist"
            element={<WatchlistPage />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </WatchlistContext.Provider>
  );
}

export default App;
