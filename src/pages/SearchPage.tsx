import { useSearchParams } from "react-router";
import AnimeGroup from "../components/AnimeGroup";
import HeaderComponent from "../components/HeaderComponent";
import HeadingComponent from "../components/HeadingComponent";

const SearchPage = () => {
  const [search] = useSearchParams();
  const query = search.get("query") || "";

  return (
    <>
      <HeaderComponent />
      <HeadingComponent heading="Search Results" />
      {query.length > 0 ? (
        <AnimeGroup
          url={`https://api.jikan.moe/v4/anime?q=${query}&order_by=popularity`}
          scrollable={false}
        />
      ) : (
        <p className="m-4 text-white">Nobody here but us chickens.</p>
      )}
    </>
  );
};
export default SearchPage;
