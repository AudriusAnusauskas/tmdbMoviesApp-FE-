import axios from 'axios';

import { BASE_API_URL } from '../api/shared/constants';
import { Movie } from './movies/types';

export interface PersonalMovie extends Movie {
  email: string;
}

const addToMyMoviesList = async (movie: PersonalMovie): Promise<void> => {
  try {
    const response = await axios.post(`${BASE_API_URL}/personal-movies`, movie);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

export { addToMyMoviesList };
