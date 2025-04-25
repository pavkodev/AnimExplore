import "./App.css";
import AnimeGroup from "./components/AnimeGroup";
import HeaderComponent from "./components/HeaderComponent";
import HeadingComponent from "./components/HeadingComponent";

function App() {
  return (
    <>
      <HeaderComponent />
      <HeadingComponent heading={"Top Anime"} />
      <AnimeGroup url="https://api.jikan.moe/v4/top/anime" />
    </>
  );
}

export default App;
