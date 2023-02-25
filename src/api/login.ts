import axios from 'axios';

import { BASE_API_URL } from './shared/constants';

export interface LoginFormValues {
  email: string;
  password: string;
}

const login = async (values: LoginFormValues): Promise<void> => {
  try {
    const response = await axios.post(`${BASE_API_URL}/login`, values);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

export { login };
