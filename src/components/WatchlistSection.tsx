import { AnimeCardInfo } from "../types/types";
import AnimeCard from "./AnimeCard";
import HeadingComponent from "./HeadingComponent";

const WatchlistSection = (props: {
  heading: string;
  wishlistItems: AnimeCardInfo[];
  loading: boolean;
}) => {
  return (
    <>
      <HeadingComponent heading={props.heading} />
      <div className="grid grid-flow-row grid-cols-1 justify-items-center gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {props.wishlistItems.map((anime, index) => (
          <AnimeCard key={index} {...anime} />
        ))}
        {props.loading ? (
          <AnimeCard id={0} url={""} image={""} title={""} loading={true} />
        ) : null}
      </div>
    </>
  );
};
export default WatchlistSection;
