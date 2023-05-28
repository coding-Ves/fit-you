import * as yup from 'yup';

export const registrationValidationSchema = yup.object({
    username: yup.string().min(2).max(20).required('Username is required'),
    email: yup
        .string()
        .email('Please enter a valid email')
        .required('Email is required'),
    password: yup
        .string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required')
        .test(
            'one-uppercase character special character and a number',
            'Password must contain at least one uppercase letter, one special character and one number',
            (value) => validatePassword(value)
        ),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Passwords must match'),
    phoneNumber: yup
        .string()
        //test the phone number using the validateInputPhone function
        .test('phone number', 'Invalid phone number', (value) =>
            validateInputPhone(value)
        )
        .min(10)
        .max(10),
});

// Validations for each separate field
const validatePassword = (value) => {
    if (value === undefined) return false;

    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.*[0-9]).{6,}$/.test(
        value
    );
};

export default registrationValidationSchema;

// If we want username to be only letters

// const validateOnlyLetters = (value) => {
//     if (value === undefined) return false;

//     return /[\D]{3}/.test(value);
// };

// Manual email validation via a fn, yup has a built in email validation.

// const validateInputEmail = (value) => {
//     if (value === undefined) return false;

//     return /^[a-zA-Z0-9.-/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
//         value
//     );
// };

const validateInputPhone = (value) => {
    if (value === undefined) return false;

    // alternative regex for phone number
    // /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    return /^\d{3}\d\d{6}$/.test(value);
};
