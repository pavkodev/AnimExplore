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
      <HeadingComponent heading={"Genre Information"} />
      <GenreInfo />

      <CollapsibleSection
        heading={"New Season Releases"}
        content={<HeroGroup url={"https://api.jikan.moe/v4/seasons/now"} />}
        openByDefault={true}
      />

      <CollapsibleSection
        heading={"Upcoming Anime"}
        content={
          <AnimeGroup
            url="https://api.jikan.moe/v4/seasons/upcoming"
            scrollable={true}
          />
        }
        openByDefault={true}
      />

      <CollapsibleSection
        heading={"Top Anime"}
        content={
          <AnimeGroup
            url="https://api.jikan.moe/v4/top/anime"
            scrollable={true}
          />
        }
        openByDefault={true}
      />
      <CollapsibleSection
        heading={"Explore Seasons"}
        content={<SeasonExplorer />}
        openByDefault={true}
      />
    </>
  );
};
export default HomePage;
