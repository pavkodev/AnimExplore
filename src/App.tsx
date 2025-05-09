import "./App.css";
import AnimeGroup from "./components/AnimeGroup";
import FilmTvToggle from "./components/FilmTvToggle";
import GenreInfo from "./components/GenreInfo";
import HeaderComponent from "./components/HeaderComponent";
import HeadingComponent from "./components/HeadingComponent";
import HeroGroup from "./components/HeroGroup";
import SeasonExplorer from "./components/SeasonExplorer";

function App() {
  return (
    <>
      <HeaderComponent />
      <FilmTvToggle />
      <HeadingComponent heading={"Genre Information"} />
      <GenreInfo />
      <HeadingComponent heading={"New Season Releases"} />
      <HeroGroup url={"/src/assets/data/now.json"} />
      <HeadingComponent heading={"Top Anime"} />
      <AnimeGroup url="/src/assets/data/top.json" />
      <HeadingComponent heading={"Upcoming Anime"} />
      <AnimeGroup url="/src/assets/data/upcoming.json" />
      <HeadingComponent heading={"Explore Seasons"} />
      <SeasonExplorer />
    </>
  );
}

export default App;
