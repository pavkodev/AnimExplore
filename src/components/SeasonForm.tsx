import { useEffect, useState } from "react";

const SeasonForm = ({
  seasonGetter,
  yearGetter,
}: {
  seasonGetter(data: string): void;
  yearGetter(data: number): void;
}) => {
  const defaultYear = new Date().getFullYear();
  const maxYear = new Date().getFullYear() + 1;
  const currentMonth = new Date().getMonth();
  const seasons: string[] = [
    "winter",
    "winter",
    "winter",
    "spring",
    "spring",
    "spring",
    "summer",
    "summer",
    "summer",
    "fall",
    "fall",
    "fall",
  ];
  const currentSeason: string = seasons[currentMonth];
  const years: number[] = [];
  const [season, setSeason] = useState(currentSeason);
  const [year, setYear] = useState(defaultYear);
  for (let i = maxYear; i >= 1917; i--) {
    years.push(i);
  }

  useEffect(() => {
    seasonGetter(season);
    yearGetter(year);
  }, [season, seasonGetter, year, yearGetter]);

  return (
    <form action="" className="m-2 text-2xl text-white">
      <select
        onChange={(e) => setSeason(e.target.value)}
        name="seasonSelect"
        id="seasonSelect"
        className="mr-2 rounded-2xl bg-slate-800 p-2"
        defaultValue={currentSeason}
      >
        <option value="winter">Winter</option>
        <option value="spring">Spring</option>
        <option value="summer">Summer</option>
        <option value="fall">Fall</option>
      </select>
      <select
        onChange={(e) => setYear(Number(e.target.value))}
        name="yearSelect"
        id="yearSelect"
        className="rounded-2xl bg-slate-800 p-2"
        defaultValue={defaultYear}
      >
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </form>
  );
};

export default SeasonForm;
