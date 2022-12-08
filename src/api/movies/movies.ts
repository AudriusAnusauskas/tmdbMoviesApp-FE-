import { get } from 'api/shared/methods';

import { MoviesResponse } from './types';

export async function getMovies(): Promise<MoviesResponse> {
  const { data } = await get<MoviesResponse>('movies'); // get<MoviesResponse>('movies?page=1') if constants.ts link changed
  return data;
}
