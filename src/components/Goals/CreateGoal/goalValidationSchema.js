import * as yup from 'yup';
import { GOAL_TYPES, GOAL_TYPES_TARGETS } from '../../../common/constants';

// Validation schema for new goal creation form

export const goalValidationSchema = yup.object({
    goalType: yup
        .mixed()
        .oneOf(GOAL_TYPES, 'Please select one of the options.')
        .required('Selection is required.'),
    goalTargetType: yup
        .mixed()
        .when('goalType', (goalType, schema) => {
            const validOptions = GOAL_TYPES_TARGETS[goalType] || [];
            return schema.oneOf(validOptions, 'Please select one of the options.');
        })
        .required('Selection is required'),
    goalName: yup
        .string()
        .min(3, "Your goal's name must be at least 3 characters long.")
        .max(20, "Your goal's name cannot exceed 20 characters.")
        .required('You must enter a goal name.'),
    targetValue: yup
        .number()
        .typeError('Please enter a target for your goal.')
        .positive('Your target must be higher than 0.')
        .max(
            100000,
            'Please enter a reasonable target value (maximum 100,000). Realistic targets are more likely to be achieved.'
        ),
    targetDate: yup
        .date()
        .required('date is required')
        .min(new Date(), 'Please select a date in the future.'),
});

export default goalValidationSchema;
