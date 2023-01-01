import { get } from 'api/shared/methods';

import { MovieDetails } from './types';

export async function getMovie(id: string): Promise<MovieDetails> {
  const { data } = await get<MovieDetails>(`movie/${id}`);
  return data;
}
