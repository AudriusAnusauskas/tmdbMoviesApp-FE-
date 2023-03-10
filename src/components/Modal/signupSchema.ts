import * as Yup from 'yup';

const signUpSchema = Yup.object().shape({
  name: Yup.string().required('Rquired'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters').required('Required'),
});

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

export { signUpSchema, loginSchema };
