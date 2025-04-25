import { useState } from "react";
const GenreInfo = () => {
  type GenreSummary = {
    name: string;
    description: string;
  };
  const summaries: GenreSummary[] = [
    {
      name: "Shonen",
      description:
        "Shonen anime is primarily targeted at young male audiences, typically featuring high-energy action, adventurous storylines, and themes of friendship, perseverance, and personal growth. These stories often revolve around a young protagonist overcoming challenges and striving to achieve their dreams, making them highly engaging and motivational.",
    },
    {
      name: "Seinen",
      description:
        "Seinen anime caters to adult male audiences, offering mature themes, intricate plots, and complex characters. These stories often explore darker or more realistic aspects of life, such as psychological struggles, moral dilemmas, or societal issues, providing a thought-provoking and emotionally impactful experience.",
    },
    {
      name: "Shoujo",
      description:
        "Shoujo anime is designed for young female audiences and often focuses on romance, relationships, and emotional storytelling. These series emphasize character development and heartfelt moments, frequently featuring themes of love, friendship, and self-discovery, making them relatable and inspiring for their target audience.",
    },
    {
      name: "Josei",
      description:
        "Josei anime is aimed at adult women and delves into realistic portrayals of relationships, personal growth, and everyday life. These stories often explore mature themes such as career challenges, family dynamics, and romantic complexities, offering a grounded and relatable perspective for viewers.",
    },
    {
      name: "Slice of life",
      description:
        "Slice of life anime captures the beauty of everyday experiences, focusing on relatable moments and the small joys of life. These series often have a calming and heartwarming tone, showcasing characters navigating ordinary situations with humor, warmth, and introspection, making them a comforting escape from the fast-paced world.",
    },
    {
      name: "Isekai",
      description:
        "Isekai anime transports characters to another world, blending elements of fantasy, adventure, and self-discovery. These stories often feature protagonists adapting to new environments, overcoming challenges, and growing as individuals, offering viewers an exciting and imaginative journey into unknown realms.",
    },
  ];

  const genres: string[] = summaries.map((summary) => summary.name);
  const descriptions: string[] = summaries.map((summary) => summary.description);

  const [genreIndex, setGenreIndex] = useState(-1);
  <p>{genres.toString()}</p>;
  return (
    <div>
      <ul className="flex flex- gap-4 bg-slate-900 px-2 text-white">
        {genres.map((genre, index) => (
          <li
            key={index}
            onClick={() => setGenreIndex(index)}
            className={`p-4 cursor-pointer ${genres[genreIndex] === genre ? "bg-slate-950" : "bg-inherit"}`}
          >
            {genre}
          </li>
        ))}
      </ul>
      <p className="bg-slate-800 text-white p-2">
        {genreIndex >= 0 ? descriptions[genreIndex] : "Click a genre above to view more details."}
      </p>
    </div>
  );
};

export default GenreInfo;
