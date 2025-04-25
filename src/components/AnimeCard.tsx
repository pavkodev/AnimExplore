const AnimeCard = (props: { image: string; name: string; rating: string }) => {
  return (
    <div className="m-2 flex w-xs flex-col items-center justify-between rounded border-2 border-slate-800 bg-slate-700 p-2 text-center text-white">
      <img
        src={props.image}
        alt={"Cover of " + props.name}
        className="h-80 rounded"
      />
      <h1 className="pt-2 font-semibold text-white">{props.name}</h1>
      <p className="font-thin">Rating: {props.rating}</p>
      <div className="mt-2 flex w-full justify-around">
        <button className="flex cursor-pointer items-center justify-center">
          <svg
            className="mr-1 h-5 w-5 fill-white align-middle"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
          >
            <path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
          </svg>
          Learn more
        </button>
        <div className="border-1"></div>
        <button className="flex cursor-pointer items-center align-middle">
          <svg
            className="mr-1 h-5 w-5 fill-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
          >
            <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
          </svg>
          Favourite
        </button>
      </div>
    </div>
  );
};
export default AnimeCard;
