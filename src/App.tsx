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
      <HeroAnimeCard
        image="https://cdn.myanimelist.net/images/anime/1527/146836l.webp"
        title={"Enen no Shouboutai: San no Shou"}
        titleEnglish={"Fire Force Season 3"}
        studios={["David Production"]}
        type={"TV"}
        genres={["Action", "Fantasy", "Sci-Fi"]}
        trailer={"https://www.youtube.com/watch?v=nz-VCl7yUAw"}
        synopsis={"Third season of Enen no Shouboutai."}
      />
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
