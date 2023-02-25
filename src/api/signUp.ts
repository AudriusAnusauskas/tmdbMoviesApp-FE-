import axios from 'axios';

import { BASE_API_URL } from '../api/shared/constants';

export interface SignUpFormValues {
  name: string;
  email: string;
  password: string;
}

const signUp = async (values: SignUpFormValues): Promise<void> => {
  try {
    const response = await axios.post(`${BASE_API_URL}/sign-up`, values);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

export { signUp };
