// GenreInfo Types
export type GenreSummary = {
  name: string;
  description: string;
};
//Anime card types
export type AnimeCardInfo = {
  id: number;
  url: string;
  image: string;
  title: string;
  rating?: string;
  aired?: string;
  broadcastTime?: string;
  loading?: boolean;
};

//Hero anime card types
export type HeroInfo = {
  id: number;
  url: string;
  image: string;
  title: string;
  altTitle: string;
  studios: string[];
  type: string;
  genres: string[];
  trailer: string;
  synopsis: string;
};
