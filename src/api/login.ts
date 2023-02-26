import axios from 'axios';

import { BASE_API_URL } from './shared/constants';

export interface LoginFormValues {
  email: string;
  password: string;
}

const login = async (values: LoginFormValues): Promise<string | null> => {
  try {
    const response = await axios.post(`${BASE_API_URL}/login`, values);

    return response.data.token;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { login };
