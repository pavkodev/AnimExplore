import AnimeGroup from "../components/AnimeGroup";
import CollapsibleSection from "../components/CollapsibleSection";
import GenreInfo from "../components/GenreInfo";
import HeaderComponent from "../components/HeaderComponent";
import HeadingComponent from "../components/HeadingComponent";
import HeroGroup from "../components/HeroGroup";
import SeasonExplorer from "../components/SeasonExplorer";

const HomePage = () => {
  return (
    <>
      <HeaderComponent />
      {/* <FilmTvToggle /> */}
      <HeadingComponent heading={"Genre Information"} />
      <GenreInfo />

      <CollapsibleSection
        heading={"New Season Releases"}
        content={<HeroGroup url={"/src/assets/data/now.json"} />}
        openByDefault={true}
      />

      <CollapsibleSection
        heading={"Upcoming Anime"}
        content={
          <AnimeGroup url="/src/assets/data/upcoming.json" scrollable={true} />
        }
        openByDefault={true}
      />

      <CollapsibleSection
        heading={"Top Anime"}
        content={
          <AnimeGroup url="/src/assets/data/top.json" scrollable={true} />
        }
        openByDefault={true}
      />
      <CollapsibleSection
        heading={"Explore Seasons"}
        content={<SeasonExplorer />}
        openByDefault={true}
      />
      {/* <Watchlist /> */}
    </>
  );
};
export default HomePage;
