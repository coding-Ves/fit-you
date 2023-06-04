import * as yup from 'yup';

// export const activityValidationSchema = yup.object({
//     value: yup
//         .mixed()
//         .when('untilFailure', {
//             is: true,
//             then: yup.string().notRequired(),
//             otherwise: yup
//                 .number()
//                 .min(1, 'Value must be greater than or equal to 1')
//                 .required('You must enter a value or select "Until Failure"'),
//         }),
//     weight: yup
//         .mixed()
//         .when('bodyWeight', {
//             is: true,
//             then: yup.string().notRequired(),
//             otherwise: yup
//                 .number()
//                 .min(1, 'Weight must be greater than or equal to 1')
//                 .required('You must enter a weight or select "Body Weight"'),
//         }),
//     untilFailure: yup.boolean(),
//     bodyWeight: yup.boolean(),
// });

// export default activityValidationSchema;

export const activityValidationSchema = yup.object({
    value: yup
        .mixed()
        .when(['untilFailure'], (untilFailure, schema) => {
            return untilFailure
                ? schema.notRequired()
                : schema
                    .number()
                    .min(1, 'Value must be greater than or equal to 1')
                    .required('You must enter a value or select "Until Failure"');
        }),
    weight: yup
        .mixed()
        .when(['bodyWeight'], (bodyWeight, schema) => {
            return bodyWeight
                ? schema.notRequired()
                : schema
                    .number()
                    .min(1, 'Weight must be greater than or equal to 1')
                    .required('You must enter a weight or select "Body Weight"');
        }),
    untilFailure: yup.boolean(),
    bodyWeight: yup.boolean(),
});




