import * as yup from 'yup';

// const MAX_FILE_SIZE = 102400; //100KB

// const validFileExtensions = { file: ['jpg', 'gif', 'png', 'jpeg', 'svg'] };

// function isValidFileType(fileName, fileType) {
//     return (
//         fileName &&
//         validFileExtensions[fileType].indexOf(fileName.split('.').pop()) > -1
//     );
// }

// export const imageFileValidationSchema = yup.object().shape({
//     file: yup.mixed().required('Required'),
// });

// export default imageFileValidationSchema;

export const validateImage = (file) => {
    if (!file) {
        throw new Error('No file uploaded');
    }

    if (!file.type.match('image.*')) {
        throw new Error('File is not an image', file.type);
    }
    // 100 kb
    if (file.size > 102400) {
        throw new Error('File is too big. Max size is 100kb');
    }
    return file;
};

export default validateImage;
