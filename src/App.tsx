import "./App.css";
import useWatchlist from "./hooks/useWatchlist";
import { WatchlistContext } from "./contexts/WatchlistContext";
import { HashRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import WatchlistPage from "./pages/WatchlistPage";
import SearchPage from "./pages/SearchPage";

function App() {
  const [watchlist, setWatchlist] = useWatchlist();
  const value = { watchlist, setWatchlist };

  return (
    <WatchlistContext.Provider value={value}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/search" element={<SearchPage />}></Route>
          <Route path="/watchlist" element={<WatchlistPage />}></Route>
        </Routes>
      </HashRouter>
    </WatchlistContext.Provider>
  );
}

export default App;
