import "./App.css";
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
      {/* <HeadingComponent heading={"Top Anime"} />
      <AnimeGroup url="https://api.jikan.moe/v4/top/anime" />
      <HeadingComponent heading={"Upcoming Anime"} />
      <AnimeGroup url="https://api.jikan.moe/v4/seasons/upcoming" /> */}
    </>
  );
}

export default App;
