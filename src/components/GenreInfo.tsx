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
    {
      name: "Mecha",
      description:
        "Mecha anime focuses on giant robots, often piloted by humans, and explores themes of technology, war, and human resilience. These series frequently feature intense battles, futuristic settings, and complex character dynamics, appealing to fans of science fiction and action.",
    },
    {
      name: "Fantasy",
      description:
        "Fantasy anime transports viewers to magical worlds filled with mythical creatures, epic quests, and enchanting landscapes. These stories often revolve around heroes overcoming great odds, offering a sense of wonder and escapism.",
    },
    {
      name: "Sports",
      description:
        "Sports anime highlights the excitement and drama of athletic competition, focusing on teamwork, perseverance, and personal growth. These series often feature intense matches, rivalries, and the journey of athletes striving to achieve their goals.",
    },
    {
      name: "Mystery",
      description:
        "Mystery anime captivates viewers with intricate plots, suspenseful storytelling, and clever twists. These series often involve solving crimes, uncovering secrets, or unraveling complex puzzles, keeping audiences engaged and guessing until the end.",
    },
    {
      name: "Comedy",
      description:
        "Comedy anime is designed to entertain and amuse, featuring humorous situations, witty dialogue, and quirky characters. These series often provide lighthearted fun and laughter, making them a great way to unwind and relax.",
    },
    {
      name: "Adventure",
      description:
        "Adventure anime takes viewers on thrilling journeys filled with exploration, discovery, and excitement. These stories often feature courageous protagonists embarking on quests to overcome challenges and achieve their dreams.",
    },
    {
      name: "Horror",
      description:
        "Horror anime delivers spine-chilling stories filled with suspense, supernatural elements, and psychological thrills. These series often explore fear, the unknown, and the darker side of human nature, creating an intense and immersive experience.",
    },
    {
      name: "Historical",
      description:
        "Historical anime takes inspiration from real-world events, settings, and cultures, offering a glimpse into different time periods. These series often blend historical accuracy with compelling storytelling, making them both educational and entertaining.",
    },
    {
      name: "Supernatural",
      description:
        "Supernatural anime features elements beyond the natural world, such as ghosts, spirits, and magical phenomena. These stories often explore themes of mystery, destiny, and the unknown, captivating viewers with their otherworldly charm.",
    },
    {
      name: "Romance",
      description:
        "Romance anime focuses on love and relationships, often portraying heartfelt and emotional journeys. These series explore themes of connection, longing, and personal growth, resonating deeply with viewers.",
    },
    {
      name: "Thriller",
      description:
        "Thriller anime keeps viewers on the edge of their seats with intense, fast-paced storytelling and unexpected twists. These series often involve high-stakes situations, psychological tension, and gripping narratives.",
    },
    {
      name: "Music",
      description:
        "Music anime revolves around characters passionate about music, showcasing their journey through practice, performance, and personal growth. These series often feature inspiring stories, memorable soundtracks, and a celebration of artistic expression.",
    },
    {
      name: "Psychological",
      description:
        "Psychological anime delves into the complexities of the human mind, exploring themes such as mental struggles, moral ambiguity, and emotional depth. These series often challenge viewers with thought-provoking narratives and intense character development.",
    },
    {
      name: "Action",
      description:
        "Action anime is packed with dynamic fight scenes, thrilling chases, and high-stakes conflicts. These series often feature heroic characters and fast-paced storytelling, keeping viewers on the edge of their seats.",
    },
    {
      name: "Sci-Fi",
      description:
        "Sci-Fi anime explores futuristic settings, advanced technology, and speculative concepts. These series often tackle themes like artificial intelligence, space exploration, and the impact of technology on society.",
    },
    {
      name: "Ecchi",
      description:
        "Ecchi anime features lighthearted and comedic depictions of romantic or suggestive situations. These series often include playful humor and exaggerated scenarios, appealing to fans of romantic comedy.",
    },
    {
      name: "Parody",
      description:
        "Parody anime humorously pokes fun at popular tropes, genres, or series within the anime world. These series often include clever references and comedic exaggerations, making them entertaining for seasoned anime fans.",
    },
    {
      name: "Iyashikei",
      description:
        "Iyashikei anime, also known as 'healing anime,' focuses on soothing and calming experiences. These series often feature serene settings, gentle storytelling, and themes of emotional healing, providing a relaxing escape for viewers.",
    },
    {
      name: "Gag",
      description:
        "Gag anime emphasizes over-the-top humor and absurdity, often relying on slapstick comedy and exaggerated scenarios. These series are designed to entertain with their unpredictable and chaotic nature.",
    },
    {
      name: "Mahou Shoujo",
      description:
        "Mahou Shoujo, or 'Magical Girl,' anime features young female protagonists who gain magical powers to fight evil and protect the world. These series often blend action, fantasy, and themes of friendship and self-discovery.",
    },
    {
      name: "Shoujo-ai",
      description:
        "Shoujo-ai anime explores romantic or emotional relationships between female characters. These series often focus on subtle storytelling and heartfelt moments, offering a gentle portrayal of love and connection.",
    },
    {
      name: "Shounen-ai",
      description:
        "Shounen-ai anime depicts romantic or emotional relationships between male characters. These series often emphasize emotional depth and character development, appealing to fans of heartfelt storytelling.",
    },
    {
      name: "Kodomo",
      description:
        "Kodomo anime is aimed at young children, featuring simple stories, colorful visuals, and educational themes. These series are designed to entertain and teach valuable lessons to their target audience.",
    },
    {
      name: "Doujinshi",
      description:
        "Doujinshi anime is inspired by fan-made works, often expanding on existing stories or creating unique narratives. These series celebrate creativity and the passion of the anime community.",
    },
    {
      name: "Chibi",
      description:
        "Chibi anime features characters drawn in a super-deformed, cute style with exaggerated proportions. These series often focus on humor and lighthearted storytelling, appealing to fans of adorable visuals.",
    },
  ];

  const genres: string[] = summaries.map((summary) => summary.name);
  const descriptions: string[] = summaries.map(
    (summary) => summary.description,
  );

  const [genreIndex, setGenreIndex] = useState(-1);
  <p>{genres.toString()}</p>;
  return (
    <div className="m-1 rounded shadow-2xs shadow-orange-500/50">
      <ul className="flex overflow-scroll bg-slate-900 text-nowrap text-white">
        {genres.map((genre, index) => (
          <>
            <li
              key={index}
              onClick={() => setGenreIndex(index)}
              className={`cursor-pointer p-4 ${genres[genreIndex] === genre ? "bg-slate-800" : "bg-inherit"}`}
            >
              {genre}
            </li>
            <div className="rounded border-1 border-white/10"></div>
          </>
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
