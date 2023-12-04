import * as Yup from 'yup';

export const loginSchema = Yup.object({
    username: Yup.string()
    .min(2, 'Must be atleast 4 characters')
    .max(25).required('Please enter your name'),
    email: Yup.string()
    .email()
    .required('Please enter your email'),
    password: Yup.string()
    .min(6, 'Must be atleast 6 characters')
    .max(10, 'shouldn\'t be more than 10 characters')
    .required('Please enter your password'),
    confirmPassword: Yup.string()
        .required('Please enter confirm password')
        .oneOf([Yup.ref('password'), null],
        'Password must match'),
});