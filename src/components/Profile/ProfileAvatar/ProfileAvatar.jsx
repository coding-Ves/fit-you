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
import FollowButton from '../FollowButton/FollowButton';
import errorHandler from './../../Authentication/ErrorHandling/errors.services';

import { PropTypes } from 'prop-types';

export const ProfileAvatar = ({ userData }) => {
    // Context and State
    const [isLoading, setIsLoading] = useState(false);
    const { setContext } = useContext(AuthContext);
    const [editAvatar, setEditAvatar] = useState(false);
    const [user] = useAuthState(auth);

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

    if (!user) {
        return null;
    }

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
                    variant='elevation'
                    elevation={3}
                    sx={{
                        p: 2,
                        m: 1,
                        width: '60%',
                        width: '100%',
                    }}
                >
                    <Avatar
                        sx={{
                            width: '200px',
                            height: '200px',
                            m: 2,
                        }}
                        src={userData?.avatarURL}
                        alt={userData?.username}
                        variant='rounded'
                    >
                        {userData.username}
                    </Avatar>
                    <Typography gutterBottom variant='h4'>
                        {userData.username}
                    </Typography>

                    {userData.uid === user.uid ? (
                        <Paper
                            variant='outlined'
                            p={3}
                            mt={3}
                            display='flex'
                            sx={{ width: '50%' }}
                        >
                            {editAvatar ? (
                                <Box
                                    p={1}
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
                                    <Box display='flex' gap={2} mb={1}>
                                        <Button
                                            type='submit'
                                            variant='contained'
                                            color='primary'
                                            ml={2}
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
                                <Paper>
                                    <Button
                                        variant='contained'
                                        onClick={handleEditAvatar}
                                        sx={{ width: '100%' }}
                                    >
                                        Edit Avatar
                                    </Button>
                                </Paper>
                            )}
                        </Paper>
                    ) : (
                        <Paper
                            variant='outlined'
                            mt={3}
                            sx={{ width: 'fit-content' }}
                        >
                            <FollowButton
                                p={3}
                                userToFollow={userData?.username}
                            />
                        </Paper>
                    )}
                </Paper>
            </Box>
        </>
    );
};

export default ProfileAvatar;

ProfileAvatar.propTypes = {
    userData: PropTypes.object,
};
