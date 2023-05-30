import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Divider,
    Typography,
    Paper,
    FormControl,
    Input,
    FormHelperText,
} from '@mui/material';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase/firebase-config';
import AuthContext from '../../../contexts/AuthContext';
import { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { imageFileValidationSchema } from './imageFileValidationSchema';
import { ref } from 'firebase/database';

export const ProfileAvatar = ({ userData }) => {
    // Context and State
    const [isLoading, setIsLoading] = useState(false);
    const { setContext } = useContext(AuthContext);
    const [showFileSelector, setShowFileSelector] = useState(false);

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
        console
            .log(data.file[0])
            .then((e) => console.table('asd'))

            // setIsLoading(true);
            // getUserByUsername(data.username)
            // .then(() => {
            //             setContext({
            //                 avatarURL: credential.user,
            //             });
            //         })
            //     .then(() => {
            //         setSnackbarMessage('Registration successful!');
            //         setSnackbarSeverity('success');
            //         setSnackbarOpen(true);
            //     })
            .catch((e) => {
                console.log(e);
                // setIsLoading(false);
                // // const message = errorHandler(e);
                // // setSnackbarMessage(message);
                // // setSnackbarSeverity('error');
                // // setSnackbarOpen(true);
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
                        alt={userData?.username}
                    >
                        {userData.username}
                    </Avatar>
                    <Typography gutterBottom variant='h5'>
                        {userData.username}
                    </Typography>
                </Paper>

                {userData.uid === user.uid ? (
                    <Card component='form' onSubmit={handleSubmit(onSubmit)}>
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
                        <Button
                            type='submit'
                            variant='contained'
                            color='primary'
                        >
                            Submit
                        </Button>
                    </Card>
                ) : null}
            </Box>
        </>
    );
};

export default ProfileAvatar;
