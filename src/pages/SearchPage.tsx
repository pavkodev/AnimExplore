import { useSearchParams } from "react-router";
import AnimeGroup from "../components/AnimeGroup";
import HeaderComponent from "../components/HeaderComponent";
import HeadingComponent from "../components/HeadingComponent";

const SearchPage = () => {
  const [search] = useSearchParams();
  return (
    <>
      <HeaderComponent />;
      <HeadingComponent heading="Search Results" />;
      <AnimeGroup
        url={`https://api.jikan.moe/v4/anime?q=${search.get("query")}?order_by=popularity`}
        scrollable={false}
      />
    </>
  );
};
export default SearchPage;
