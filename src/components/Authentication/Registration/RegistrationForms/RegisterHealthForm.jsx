import { yupResolver } from '@hookform/resolvers/yup';
import { Favorite } from '@mui/icons-material';

import {
    Alert,
    Avatar,
    Box,
    Button,
    Container,
    CssBaseline,
    Grid,
    Snackbar,
    TextField,
    Typography,
} from '@mui/material';

import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { registrationHealthValidationSchema } from './registrationHealthValidationSchema';

import AuthContext from './../../../../contexts/AuthContext';

import { updateUserHealthInfo } from './../../../../firebase/services/users.service';
import errorHandler from './../../ErrorHandling/errors.services';

export const RegistrationHealthForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { userData } = useContext(AuthContext);

    const navigate = useNavigate();

    // Responsible for Snackbar and Alert - Showing error  and success messages
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    // Use React Hook Form with Yup for validation
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(registrationHealthValidationSchema),
    });

    const onSubmit = (data) => {
        setIsLoading(true);

        updateUserHealthInfo(
            userData.username,
            data.height,
            data.weight,
            data.age
        )
            .then(() => {
                setSnackbarMessage('Registration successful!');
                setSnackbarSeverity('success');
                setSnackbarOpen(true);
            })
            .then(() => {
                setIsLoading(false);
                // navigate('/dashboard');
            })
            .then(() => {
                setTimeout(() => {
                    navigate('/dashboard');
                }, 1500);
            })
            .catch((e) => {
                setIsLoading(false);
                const message = errorHandler(e);
                setSnackbarMessage(message);
                setSnackbarSeverity('error');
                setSnackbarOpen(true);
            });
    };

    return (
        <>
            <Container component='main' maxWidth='xs'>
                <CssBaseline />
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

                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <Favorite />
                    </Avatar>
                    <Typography component='h1' variant='h5'>
                        Update Health Info
                    </Typography>
                    <Box
                        component='form'
                        noValidate
                        onSubmit={handleSubmit(onSubmit)}
                        sx={{ mt: 3 }}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    name='height'
                                    required
                                    fullWidth
                                    id='height'
                                    label='Height'
                                    autoFocus
                                    {...register('height')}
                                    helperText={
                                        errors.height?.message ||
                                        `Please enter your height in meters`
                                    }
                                    error={Boolean(errors.weight)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id='weight'
                                    label='Weight'
                                    name='weight'
                                    {...register('weight')}
                                    helperText={
                                        errors.weight?.message ||
                                        `Please enter your weight in kilograms`
                                    }
                                    error={Boolean(errors.weight)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    required
                                    name='age'
                                    label='Age'
                                    id='age'
                                    {...register('age')}
                                    error={!!errors.age}
                                    helperText={errors.age?.message}
                                />
                            </Grid>
                        </Grid>
                        <Grid mt={2} container justifyContent='flex-end'>
                            We need this information to calculate your Body Mass
                            Index (BMI).
                        </Grid>
                        <Button
                            type='submit'
                            fullWidth
                            variant='contained'
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Update Health Info
                        </Button>
                    </Box>
                </Box>
            </Container>
        </>
    );
};

export default RegistrationHealthForm;
