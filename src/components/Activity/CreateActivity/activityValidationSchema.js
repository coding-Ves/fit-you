import * as yup from 'yup';

// Validation schema for new goal creation form

export const activityValidationSchema = yup.object({
    goalName: yup
        .string()
        .min(3)
        .max(20)
        .required('You must enter a goal name'),
    description: yup
        .string()
        .min(8)
        .max(20)
        .required('You must enter a goal name'),
    targetDate: yup.string().min(1).max(100),
    targetValue: yup.string().min(3).max(10),
});

export default activityValidationSchema;
