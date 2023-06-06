import * as yup from 'yup';

// Validation schema for new goal creation form

export const goalValidationSchema = yup.object({
    goalType: yup.string(),
    goalTypeTarget: yup.string(),
    goalName: yup.string().min(3).max(20).required('You must enter a goal name'),
    targetValue: yup.string().min(1, 'Your target must be higher than 0').max(10),
    targetDate: yup.string().min(1).max(100),
});

export default goalValidationSchema;
