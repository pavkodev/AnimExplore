const FilmTvToggle = () => {
  return (
    <div className="mt-1 flex w-full justify-around rounded text-white">
      <button className="flex-auto rounded border-l-4 bg-slate-900 p-2">
        TV Shows
      </button>
      <button className="flex-auto rounded border-r-4 border-l-4 bg-slate-900 p-2">
        Film
      </button>
    </div>
  );
};
export default FilmTvToggle;
