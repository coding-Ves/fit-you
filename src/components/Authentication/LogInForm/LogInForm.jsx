import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
    Alert,
    Avatar,
    Box,
    Button,
    Grid,
    Link as MuiLink,
    Snackbar,
    TextField,
    Typography,
} from '@mui/material';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { loginUser } from '../../../firebase/services/auth.service';
import errorHandler from '../ErrorHandling/errors.services';
import AuthContext from './../../../contexts/AuthContext';

const LoginForm = () => {
    const { handleSubmit, register } = useForm();
    const { setContext } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(false);
    // Responsible for Snackbar and Alert - Showing error  and success messages
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    const onSubmit = (data) => {
        setIsLoading(true);
        loginUser(data.email, data.password)
            .then((credential) => {
                setContext({
                    user: credential.user,
                });
            })
            .then(() => {
                setIsLoading('false');
            })
            .then(() => {
                setSnackbarMessage('Login successful!');
                setSnackbarSeverity('success');
                setSnackbarOpen(true);
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
                    my: 8,
                    mx: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar
                    sx={{
                        m: 1,
                        bgcolor: 'secondary.main',
                    }}
                >
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component='h1' variant='h5'>
                    Login
                </Typography>
                <Box
                    component='form'
                    noValidate
                    onSubmit={handleSubmit(onSubmit)}
                    sx={{ mt: 1 }}
                >
                    <TextField
                        margin='normal'
                        required
                        fullWidth
                        id='email'
                        label='Email Address'
                        name='email'
                        autoComplete='email'
                        autoFocus
                        {...register('email')}
                    />
                    <TextField
                        margin='normal'
                        required
                        fullWidth
                        name='password'
                        label='Password'
                        type='password'
                        id='password'
                        autoComplete='current-password'
                        {...register('password')}
                    />
                    <Button
                        type='submit'
                        variant='contained'
                        color='primary'
                        fullWidth
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item>
                            <MuiLink
                                component={Link}
                                to='/register'
                                variant='body2'
                            >
                                Don&apos;t have an account? Register
                            </MuiLink>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    );
};

export default LoginForm;
