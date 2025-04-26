import "./App.css";
import AnimeGroup from "./components/AnimeGroup";
import FilmTvToggle from "./components/FilmTvToggle";
import GenreInfo from "./components/GenreInfo";
import HeaderComponent from "./components/HeaderComponent";
import HeadingComponent from "./components/HeadingComponent";
import HeroAnimeCard from "./components/HeroAnimeCard";

function App() {
  return (
    <>
      <HeaderComponent />
      <FilmTvToggle />
      <HeadingComponent heading={"Genre Information"} />
      <GenreInfo />
      <HeroAnimeCard />
      <HeadingComponent heading={"New Season Releases"} />
      <AnimeGroup url="https://api.jikan.moe/v4/seasons/now" />
      <HeadingComponent heading={"Top Anime"} />
      <AnimeGroup url="https://api.jikan.moe/v4/top/anime" />
      <HeadingComponent heading={"Upcoming Anime"} />
      <AnimeGroup url="https://api.jikan.moe/v4/seasons/upcoming" />
    </>
  );
}

export default App;
