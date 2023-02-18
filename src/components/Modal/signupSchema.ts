import * as Yup from 'yup';

const signUpSchema = Yup.object().shape({
  name: Yup.string().required('Rquired'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
});

export { signUpSchema };
