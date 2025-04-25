import "./App.css";
import AnimeGroup from "./components/AnimeGroup";
import GenreInfo from "./components/GenreInfo";
import HeaderComponent from "./components/HeaderComponent";
import HeadingComponent from "./components/HeadingComponent";

function App() {
  return (
    <>
      <HeaderComponent />
      <HeadingComponent heading={"Genre Information"} />
      <GenreInfo />
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
