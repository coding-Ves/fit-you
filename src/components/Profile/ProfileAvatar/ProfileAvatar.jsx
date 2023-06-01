import {
    Alert,
    Avatar,
    Box,
    Button,
    FormControl,
    FormHelperText,
    Input,
    Paper,
    Snackbar,
    Typography,
} from '@mui/material';
import { useContext, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import AuthContext from '../../../contexts/AuthContext';
import { auth } from '../../../firebase/firebase-config';

import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../../../firebase/firebase-config';
import { updateUserAvatar } from '../../../firebase/services/users.service';
import errorHandler from './../../Authentication/ErrorHandling/errors.services';

export const ProfileAvatar = ({ userData }) => {
    // Context and State
    const [isLoading, setIsLoading] = useState(false);
    const { setContext } = useContext(AuthContext);
    const [editAvatar, setEditAvatar] = useState(false);

    const handleEditAvatar = () => {
        setEditAvatar(true);
    };

    const handleCancelEditAvatar = () => {
        setEditAvatar(false);
    };

    // Snackbar
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    // Conditionally display upload avatar button if user is viewing their own profile
    const [user] = useAuthState(auth);

    if (!user) {
        return null; // or return a loading state
    }

    // Use React Hook Form with Yup for validation
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    // resolver: yupResolver(imageFileValidationSchema),

    const onSubmit = (data) => {
        const file = data.file[0];
        setIsLoading(true);
        // Error handling and validation for file
        if (!file) {
            setSnackbarMessage('No file uploaded');
            setSnackbarSeverity('error');
            setSnackbarOpen(true);
            throw new Error('No file uploaded');
        }

        if (!file.type.match('image.*')) {
            setSnackbarMessage('File is not an image');
            setSnackbarSeverity('error');
            setSnackbarOpen(true);
            throw new Error('File is not an image', file.type);
        }
        // 100 kb
        if (file.size > 102400) {
            setSnackbarMessage('File is too big. Max size is 100kb');
            setSnackbarSeverity('error');
            setSnackbarOpen(true);
            throw new Error('File is too big. Max size is 100kb');
        }

        // First create a reference to the file in storage
        const reference = ref(storage, `images/${userData.username}/avatarURL`);

        // Upload the file to that reference
        uploadBytes(reference, file)
            // Get the download URL from the reference
            .then((snapshot) => getDownloadURL(snapshot.ref))
            // Update the user's avatarURL in the database
            .then((url) => {
                updateUserAvatar(userData.username, url);
                setContext({ avatarURL: url });
            })
            // Update the user's avatarURL in the context

            .then(() => {
                setIsLoading(false);
                setSnackbarMessage('Avatar updated successfully!');
                setSnackbarSeverity('success');
                setSnackbarOpen(true);
            })
            // Close the edit avatar form
            .then(() => {
                setEditAvatar(false);
            })
            .catch((e) => {
                // setIsLoading(false);
                const message = errorHandler(e);
                setSnackbarMessage(e.message);
                setSnackbarSeverity('error');
                setSnackbarOpen(true);
            });
    };

    return (
        <>
            <Box
                sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Snackbar
                    open={snackbarOpen}
                    autoHideDuration={3000}
                    onClose={handleSnackbarClose}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                >
                    <Alert
                        onClose={handleSnackbarClose}
                        severity={snackbarSeverity}
                        sx={{ width: '100%' }}
                    >
                        {snackbarMessage}
                    </Alert>
                </Snackbar>
                <Paper
                    sx={{
                        p: 2,

                        width: '100%',
                        height: '100%',
                    }}
                >
                    <Avatar
                        sx={{
                            width: '150px',
                            height: '150px',
                            mb: 2,
                        }}
                        src={userData?.avatarURL}
                        alt={userData?.username}
                        variant='rounded'
                    >
                        {userData.username}
                    </Avatar>
                    <Typography gutterBottom variant='h5'>
                        {userData.username}
                    </Typography>
                </Paper>

                {userData.uid === user.uid ? (
                    <Box mt={3}>
                        {editAvatar ? (
                            <Box
                                display='flex'
                                flexDirection='column'
                                gap={2}
                                justifyContent='center'
                                alignItems='center'
                                component='form'
                                onSubmit={handleSubmit(onSubmit)}
                            >
                                <FormControl error={!!errors?.file}>
                                    <Input
                                        type='file'
                                        name='file'
                                        id='file'
                                        accept='image/*'
                                        {...register('file')}
                                    />
                                    <FormHelperText>
                                        {errors.file?.message}
                                    </FormHelperText>
                                </FormControl>
                                <Box
                                    mt={1}
                                    display='flex'
                                    gap={3}
                                    justifyContent='center'
                                >
                                    <Button
                                        type='submit'
                                        variant='contained'
                                        color='primary'
                                    >
                                        Submit
                                    </Button>
                                    <Button
                                        variant='outlined'
                                        color='primary'
                                        onClick={handleCancelEditAvatar}
                                    >
                                        Cancel
                                    </Button>
                                </Box>
                            </Box>
                        ) : (
                            <Button onClick={handleEditAvatar}>
                                Edit Avatar
                            </Button>
                        )}
                    </Box>
                ) : null}
            </Box>
        </>
    );
};

export default ProfileAvatar;
