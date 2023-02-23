import axios from 'axios';

import { BASE_API_URL } from './shared/constants';

export interface LoginFormValues {
  email: string;
  password: string;
}

const login = (values: LoginFormValues): void => {
  axios
    .post(`${BASE_API_URL}/login`, values)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
};

export { login };
