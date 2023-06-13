import * as yup from 'yup';

export const editGoalValidationSchema = yup.object({
    newGoalName: yup
        .string()
        .min(3, 'Your goal\'s name must be at least 3 characters long.')
        .max(20, 'Your goal\'s name cannot exceed 20 characters.')
        .required('You must enter a goal name.'),
    newTargetValue: yup
        .number()
        .typeError('Please enter a target for your goal.')
        .required('You must enter a target value')
        .positive('Your target must be higher than 0')
        .max(
            100000,
            'Please enter a reasonable target value (maximum 100,000). Realistic targets are more likely to be achieved.'
        ),
    newTargetDate: yup.date().required(),
});

export default editGoalValidationSchema;
