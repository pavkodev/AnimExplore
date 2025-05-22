import { useState } from "react";
import SeasonForm from "./SeasonForm";
import AnimeGroup from "./AnimeGroup";

const SeasonExplorer = () => {
  const [season, setSeason] = useState<string>("");
  const [year, setYear] = useState<number>(-1);

  const getSeason = (data: string) => {
    setSeason(data);
  };

  const getYear = (data: number) => {
    setYear(data);
  };

  return (
    <>
      <SeasonForm seasonGetter={getSeason} yearGetter={getYear} />
      {season === "" && year === -1 ? (
        <p>Loading...</p>
      ) : (
        <AnimeGroup
          url={`https://api.jikan.moe/v4/seasons/${year}/${season}`}
          scrollable={true}
        />
      )}
      ;
    </>
  );
};
export default SeasonExplorer;
