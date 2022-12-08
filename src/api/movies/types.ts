export type MoviesResponse = {
  page: number;
  totalPages: number;
  movies: Movie[];
};

export type Movie = {
  id?: string;
  email?: string;
  movieId: number;
  title: string;
  releaseDate: string;
  backdropPath: string;
  posterPath: string;
  voteAverage: number;
};
