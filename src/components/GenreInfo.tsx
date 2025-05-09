import { useState } from "react";
import { GenreSummary } from "../types/types";
import summaryList from "../assets/data/genres";
import React from "react";
const GenreInfo = () => {
  const summaries: GenreSummary[] = summaryList;

  const genres: string[] = summaries.map((summary) => summary.name);
  const descriptions: string[] = summaries.map(
    (summary) => summary.description,
  );

  const [genreIndex, setGenreIndex] = useState(-1);
  <p>{genres.toString()}</p>;
  return (
    <div className="m-1 rounded shadow-2xs shadow-orange-500/50">
      <ul className="flex overflow-scroll overflow-y-hidden bg-slate-900 text-nowrap text-white [&::-webkit-scrollbar]:m-2 [&::-webkit-scrollbar-thumb]:bg-gray-400 [&::-webkit-scrollbar-track]:bg-slate-800">
        {genres.map((genre, index) => (
          <React.Fragment key={index}>
            <li
              onClick={() => setGenreIndex(index)}
              className={`cursor-pointer p-4 ${genres[genreIndex] === genre ? "bg-slate-800" : "bg-inherit"}`}
            >
              {genre}
            </li>
            <div className="rounded border-1 border-white/10"></div>
          </React.Fragment>
        ))}
      </ul>
      <p className="bg-slate-800 p-2 text-white">
        {genreIndex >= 0
          ? descriptions[genreIndex]
          : "Click a genre above to view more details."}
      </p>
    </div>
  );
};

export default GenreInfo;
