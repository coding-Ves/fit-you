import * as yup from 'yup';

export const registrationHealthValidationSchema = yup.object({
    height: yup.number().min(1).max(250).required('Height is required'),
    weight: yup.number().min(1).max(250).required('Weight is required'),
    // This app is 18+ so we can use a simple date validation
    age: yup.number().min(18).max(130).required('Age is required'),
});

export default registrationHealthValidationSchema;
