import "./App.css";
import AnimeGroup from "./components/AnimeGroup";
import HeaderComponent from "./components/HeaderComponent";

function App() {
  return (
    <>
      <HeaderComponent />
      <AnimeGroup url="https://api.jikan.moe/v4/top/anime" />
    </>
  );
}

export default App;
