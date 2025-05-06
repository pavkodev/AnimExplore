import "./App.css";
import AnimeGroup from "./components/AnimeGroup";
import FilmTvToggle from "./components/FilmTvToggle";
import GenreInfo from "./components/GenreInfo";
import HeaderComponent from "./components/HeaderComponent";
import HeadingComponent from "./components/HeadingComponent";
import HeroGroup from "./components/HeroGroup";

function App() {
  return (
    <>
      <HeaderComponent />
      <FilmTvToggle />
      <HeadingComponent heading={"Genre Information"} />
      <GenreInfo />
      <HeadingComponent heading={"New Season Releases"} />
      <HeroGroup url={"/src/assets/now.json"} />
      <HeadingComponent heading={"Top Anime"} />
      <AnimeGroup url="/src/assets/top.json" />
      <HeadingComponent heading={"Upcoming Anime"} />
      <AnimeGroup url="/src/assets/upcoming.json" />
    </>
  );
}

export default App;
