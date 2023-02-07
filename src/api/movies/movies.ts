import { get } from 'api/shared/methods';

import { MoviesResponse, MovieDetails } from './types';

export async function getMovies(page: number, title: string, genres: string[], sort: string): Promise<MoviesResponse> {
  const { data } = await get<MoviesResponse>(`movies/?page=${page}&title=${title}&genres=${genres}&sort=${sort}`);
  return data;
}

export async function getMovie(movieId: string): Promise<MovieDetails> {
  const { data } = await get<MovieDetails>(`movies/${movieId}`);
  return data;
}
