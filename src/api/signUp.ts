import axios from 'axios';

import { BASE_API_URL } from '../api/shared/constants';

export interface SignUpFormValues {
  name: string;
  email: string;
  password: string;
}

const signUp = (values: SignUpFormValues): void => {
  axios
    .post(`${BASE_API_URL}/sign-up`, values)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
};

export { signUp };
