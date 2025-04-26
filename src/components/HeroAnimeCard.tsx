import HeadingComponent from "./HeadingComponent";

const HeroAnimeCard = () => {
  return (
    <div className="text-white">
      <HeadingComponent heading="New Season Releases" />
      <div className="m-auto flex w-[80vw] flex-col items-center justify-center rounded border-2 border-orange-600 bg-gray-950 p-4 sm:w-fit lg:flex-row">
        <img
          src="https://cdn.myanimelist.net/images/anime/1527/146836l.webp"
          alt="placeholder"
          className="rounded mask-b-from-0 lg:mask-r-from-0 lg:mask-b-from-100%"
        />
        <div className="mt-4 flex max-w-[50ch] flex-col items-center justify-center lg:ml-8">
          <h2 className="mb-2 text-xl font-bold">TITLE OF ANIME</h2>
          <h3 className="text-md mb-4 hidden font-semibold sm:block lg:mb-0">
            ENGLISH TITLE OF ANIME
          </h3>
          <p className="mb-8 hidden font-thin lg:block">STUDIO</p>
          <p>
            <b>TV OR FILM</b> <span className="pl-2 italic">GENRES</span>
          </p>
          <button className="m-1 mb-8 hidden items-center justify-center rounded border-1 bg-orange-600 p-2 sm:flex">
            <svg
              className="mr-1 h-5 w-5 fill-white align-middle"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
            >
              <path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
            </svg>
            WATCH TRAILER
          </button>
          <p className="hidden lg:block">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
            labore consectetur ipsa ab. Iusto asperiores nemo eum excepturi,
            fuga eligendi?
          </p>
        </div>
      </div>
    </div>
  );
};
export default HeroAnimeCard;
