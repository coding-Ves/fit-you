import * as yup from 'yup';

export const editGoalValidationSchema = yup.object({
    newGoalName: yup.string().min(3).max(20).required('You must enter a goal name'),
    newTargetValue: yup
        .number()
        .typeError('Please enter a number')
        .positive('Your target must be higher than 0')
        .max(10000),
    newTargetDate: yup.date().typeError('Please enter a number').required()
});

export default editGoalValidationSchema;
