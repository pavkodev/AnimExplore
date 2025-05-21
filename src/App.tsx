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
import CollapsibleSection from "./components/CollapsibleSection";

function App() {
  const [watchlist, setWatchlist] = useWatchlist();
  const value = { watchlist, setWatchlist };

  return (
    <WatchlistContext.Provider value={value}>
      <HeaderComponent />
      <FilmTvToggle />
      <HeadingComponent heading={"Genre Information"} />
      <GenreInfo />

      <CollapsibleSection
        heading={"New Season Releases"}
        content={<HeroGroup url={"/src/assets/data/now.json"} />}
        openByDefault={true}
      />

      <CollapsibleSection
        heading={"Upcoming Anime"}
        content={<AnimeGroup url="/src/assets/data/upcoming.json" />}
        openByDefault={true}
      />

      <CollapsibleSection
        heading={"Top Anime"}
        content={<AnimeGroup url="/src/assets/data/top.json" />}
        openByDefault={true}
      />
      <CollapsibleSection
        heading={"Explore Seasons"}
        content={<SeasonExplorer />}
        openByDefault={true}
      />
      {/* <Watchlist /> */}
    </WatchlistContext.Provider>
  );
}

export default App;
