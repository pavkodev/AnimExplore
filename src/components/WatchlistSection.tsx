import { AnimeCardInfo } from "../types/types";
import AnimeCard from "./AnimeCard";

const WatchlistSection = (props: {
  wishlistItems: AnimeCardInfo[];
  loading: boolean;
}) => {
  return (
    <div className="grid grid-flow-row grid-cols-1 justify-items-center gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {props.wishlistItems.map((anime, index) => (
        <AnimeCard key={index} {...anime} />
      ))}

      {props.loading ? (
        <div>
          {Array.from({ length: 1 }).map((_, index) => (
            <AnimeCard
              key={index}
              id={0}
              url={""}
              image={""}
              title={""}
              loading={true}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};
export default WatchlistSection;
