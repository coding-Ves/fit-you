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
