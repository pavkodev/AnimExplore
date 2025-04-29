const HeroAnimeCard = (props: {
  image: string;
  title: string;
  titleEnglish: string;
  studios: string[];
  type: string;
  genres: string[];
  trailer: string;
  synopsis: string;
}) => {
  return (
    <div className="m-2 flex w-[80vw] flex-col items-center justify-center rounded border-2 border-orange-600 bg-gray-950 pb-4 text-white lg:w-max lg:flex-row lg:pr-4 lg:pb-0">
      <img
        src={props.image}
        alt="placeholder"
        className="self-stretch rounded mask-b-from-0 lg:mask-r-from-0 lg:mask-b-from-100%"
      />
      <div className="flex flex-1 flex-col items-center justify-center text-center lg:my-4 lg:ml-8 lg:w-[50ch]">
        <h2 className="mb-2 text-xl font-bold">{props.title}</h2>
        <h3 className="text-md mb-4 hidden font-semibold sm:block lg:mb-0">
          {props.titleEnglish}
        </h3>
        <p className="mb-8 hidden font-thin italic lg:block">
          {props.studios.join(", ")}
        </p>
        <p>
          <b>{props.type}</b>
          <span className="pl-2 italic">{props.genres.join(", ")}</span>
        </p>
        <a
          href={props.trailer}
          className="m-1 mb-8 hidden cursor-pointer items-center justify-center rounded border-1 bg-orange-600 p-2 sm:flex"
        >
          <svg
            className="mr-1 h-5 w-5 fill-white align-middle"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
          >
            <path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
          </svg>
          WATCH TRAILER
        </a>
        <p className="hidden lg:line-clamp-15">{props.synopsis}</p>
      </div>
    </div>
  );
};
export default HeroAnimeCard;
