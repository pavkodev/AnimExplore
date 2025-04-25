const HeaderComponent = () => {
  return (
    <header className="flex items-center justify-center bg-orange-400 text-white">
      {/* CODE BELOW: BUTTONS SAME LENGTH AS SEARCH BAR
      <div className="grid grid-cols-2 grid-rows-2">
        <input
          className="bg-slate-800 m-2 p-2 col-span-2 rounded"
          type="text"
          name="in-search"
          placeholder="Search titles..."
          id="in-search"
        />
        <div className="rounded flex mb-2 col-span-2 justify-between mt-1">
          <button className="w-max mx-1 flex-1 hover:bg-slate-900 bg-orange-500 rounded">
            TV Shows
          </button>
          <div className="border-1"></div>
          <button className="w-max mx-1 flex-1 hover:bg-slate-900 bg-orange-500 rounded">
            Film
          </button>
        </div>
      </div> */}
      <div className="flex flex-col items-center justify-center p-2">
        <input
          className="min-w-fit rounded bg-slate-800 p-2"
          type="text"
          name="in-search"
          placeholder="Search titles..."
          id="in-search"
        />
      </div>
    </header>
  );
};

export default HeaderComponent;
