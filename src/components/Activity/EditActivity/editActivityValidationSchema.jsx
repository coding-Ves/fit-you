import * as yup from 'yup';

export const editActivityValidationSchema = yup.object({
    newDurationInMinutes: yup
        .number()
        .typeError('Please enter new duration in minutes.')
        .required('You must enter new duration in minutes')
        .positive('Your target must be higher than 0')
        .max(
            100000,
            'Please enter a reasonable value (max 720min (12h)).'
        ),
});

export default editActivityValidationSchema;
