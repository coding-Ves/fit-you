import { useTheme } from '@emotion/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Alert, IconButton, InputAdornment, Snackbar } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { getUserByUsername } from '../../firebase/services/users.service';
import AuthContext from './../../contexts/AuthContext';
import { registerUser } from './../../firebase/services/auth.service';
import { createUsername } from './../../firebase/services/users.service';
import goalValidationSchema from '../../services/Validation/goalValidationSchema';
import FlagIcon from '@mui/icons-material/Flag';

const NewGoalForm = () => {
    const [isLoading, setIsLoading] = useState(false);
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
        resolver: yupResolver(goalValidationSchema),
    });

    const onSubmit = (data) => {
        setIsLoading(true);
        console.log(data);
        getUserByUsername(data.username)
            .then((snapshot) => {
                // Add activity uid to user profile
            })
            .then((credential) => {
                //  add activity to activity sectiong
            })
            .then(() => {
                setSnackbarMessage('Registration successful!');
                setSnackbarSeverity('success');
                setSnackbarOpen(true);
            })
            .then(() => {
                setIsLoading(false);
                // navigate('/dashboard');
            })
            .catch((e) => {
                setIsLoading(false);
                setSnackbarMessage(e.code + ': ' + e.message);
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
                        <FlagIcon />
                    </Avatar>
                    <Typography component='h1' variant='h5'>
                        Add Goal
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
                                    autoComplete='goalName'
                                    name='goalName'
                                    required
                                    fullWidth
                                    id='goalName'
                                    label='Goal Name'
                                    autoFocus
                                    {...register('goalName')}
                                    error={!!errors.goalName}
                                    helperText={errors.goalName?.message}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id='date'
                                    label='Target Date'
                                    name='date'
                                    {...register('date')}
                                    error={!!errors.date}
                                    helperText={errors.date?.message}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id='description'
                                    label='Description'
                                    name='description'
                                    {...register('description')}
                                    error={!!errors.description}
                                    helperText={errors.description?.message}
                                />
                                <TextField
                                    required
                                    fullWidth
                                    id='targetValue'
                                    label='Target Value'
                                    name='targetValue'
                                    {...register('targetValue')}
                                    error={!!errors.targetValue}
                                    helperText={errors.targetValue?.message}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type='submit'
                            fullWidth
                            variant='contained'
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Set Goal
                        </Button>
                    </Box>
                </Box>
            </Container>
        </>
    );
};

export default NewGoalForm;
