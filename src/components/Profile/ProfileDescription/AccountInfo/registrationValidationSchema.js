import * as yup from 'yup';

export const phoneValidationSchema = yup.object({
    phoneNumber: yup
        .string()
        //test the phone number using the validateInputPhone function
        .test('phone number', 'Invalid phone number', (value) =>
            validateInputPhone(value)
        )
        .min(10)
        .max(10),
});

export default phoneValidationSchema;

const validateInputPhone = (value) => {
    if (value === undefined) return false;

    // alternative regex for phone number
    // /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    return /^\d{3}\d\d{6}$/.test(value);
};
