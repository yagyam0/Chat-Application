import * as Yup from 'yup';

export const signupSchema = Yup.object({
    email: Yup.string()
    .email()
    .required('Please enter your email'),
    password: Yup.string()
    .min(6, 'Must be atleast 6 characters')
    .max(10, 'shouldn\'t be more than 10 characters')
    .required('Please enter your password'),
});