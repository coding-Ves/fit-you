import * as yup from 'yup';

// Validation schema for new goal creation form

export const goalValidationSchema = yup.object({
    goalType: yup.string(),
    goalTypeTarget: yup.string(),
    goalName: yup.string().min(3).max(20).required('You must enter a goal name'),
    targetValue: yup
        .number()
        .typeError('Please enter a number')
        .positive('Your target must be higher than 0')
        .max(10000),
    targetDate: yup.date().required(),
});

export default goalValidationSchema;
