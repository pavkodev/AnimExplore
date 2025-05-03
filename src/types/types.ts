// GenreInfo Types
export type GenreSummary = {
  name: string;
  description: string;
};

//Hero anime card types
export type HeroInfo = {
  image: string;
  title: string;
  altTitle: string;
  studios: string[];
  type: string;
  genres: string[];
  trailer: string;
  synopsis: string;
};
