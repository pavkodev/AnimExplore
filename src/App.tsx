import "./App.css";
import AnimeGroup from "./components/AnimeGroup";
import FilmTvToggle from "./components/FilmTvToggle";
import GenreInfo from "./components/GenreInfo";
import HeaderComponent from "./components/HeaderComponent";
import HeadingComponent from "./components/HeadingComponent";
import HeroGroup from "./components/HeroGroup";
import SeasonExplorer from "./components/SeasonExplorer";
import useWatchlist from "./hooks/useWatchlist";
import { WatchlistContext } from "./contexts/WatchlistContext";
import Watchlist from "./components/Watchlist";

function App() {
  const [watchlist, setWatchlist] = useWatchlist();
  const value = { watchlist, setWatchlist };

  return (
    <WatchlistContext.Provider value={value}>
      <HeaderComponent />
      <FilmTvToggle />
      <HeadingComponent heading={"Genre Information"} />
      <GenreInfo />
      <HeadingComponent heading={"New Season Releases"} />
      <HeroGroup url={"/src/assets/data/now.json"} />
      <HeadingComponent heading={"Upcoming Anime"} />
      <AnimeGroup url="/src/assets/data/upcoming.json" />
      <HeadingComponent heading={"Top Anime"} />
      <AnimeGroup url="/src/assets/data/top.json" />
      {/* <HeadingComponent heading={"Explore Seasons"} />
      <SeasonExplorer /> */}
      <Watchlist />
    </WatchlistContext.Provider>
  );
}

export default App;
