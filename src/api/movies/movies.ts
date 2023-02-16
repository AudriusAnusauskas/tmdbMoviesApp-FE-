import { get } from 'api/shared/methods';

import { MoviesResponse, MovieDetails } from './types';

export async function getMovies(page: number, title: string, genres: string[], sort: string): Promise<MoviesResponse> {
  const searchParams = new URLSearchParams();
  if (page) {
    searchParams.set('page', page.toString());
  }

  if (title) {
    searchParams.set('title', title);
  }

  if (genres && genres.length > 0) {
    searchParams.set('genres', genres.join(','));
  }

  if (sort) {
    searchParams.set('sort', sort);
  }

  const { data } = await get<MoviesResponse>(`movies/?${searchParams.toString()}`);
  return data;
}

export async function getMovie(movieId: string): Promise<MovieDetails> {
  const { data } = await get<MovieDetails>(`movies/${movieId}`);
  return data;
}
