import {
    Box,
    Grid,
    TextField,
    Button,
    InputAdornment,
    Icon,
    Snackbar,
    Alert,
} from '@mui/material';
import { useState } from 'react';
import Edit from '@mui/icons-material/Edit';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import phoneValidationSchema from './registrationValidationSchema';
import { updateUserDetails } from '../../../../firebase/services/users.service';

export const AccountInfo = ({ userData }) => {
    const formattedDate = new Date(userData.createdOn);
    const displayDate = formattedDate.toDateString();

    const [isLoading, setIsLoading] = useState(false);
    const [editable, setEditable] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
    } = useForm({
        resolver: yupResolver(phoneValidationSchema),
    });

    const handleEdit = () => {
        setEditable(true);
    };

    const handleCancel = () => {
        setEditable(false);
    };

    const onSubmit = (data) => {
        setIsLoading(true);

        updateUserDetails(userData.username, data.phoneNumber)
            .then(() => {
                setSnackbarMessage('Account Info Updated!');
                setSnackbarSeverity('success');
                setSnackbarOpen(true);
            })
            .then(() => {
                setIsLoading(false);
                // navigate('/dashboard');
            })
            .then(() => setEditable(false))
            .catch((e) => {
                setIsLoading(false);
                const message = errorHandler(e);
                setSnackbarMessage(message);
                setSnackbarSeverity('error');
                setSnackbarOpen(true);
            });
    };

    return (
        <Box
            component='form'
            sx={{ mt: 3 }}
            noValidate
            onSubmit={handleSubmit(onSubmit)}
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
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id='username'
                        label='Username'
                        {...register('username')}
                        error={!!errors.username}
                        helperText={errors.username?.message}
                        defaultValue={userData.username}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id='phoneNumber'
                        label='Phone Number'
                        defaultValue={userData.phoneNumber}
                        {...register('phoneNumber')}
                        error={!!errors.phoneNumber}
                        helperText={errors.phoneNumber?.message}
                        InputProps={{
                            readOnly: !editable,
                            endAdornment: editable && (
                                <InputAdornment position='end'>
                                    <Icon>
                                        <Edit />
                                    </Icon>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id='registrationDate'
                        label='Registered on:'
                        defaultValue={displayDate}
                        {...register('registrationDate')}
                        error={!!errors.registrationDate}
                        helperText={errors.registrationDate?.message}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    {!editable ? (
                        <Button variant='outlined' onClick={handleEdit}>
                            Edit
                        </Button>
                    ) : (
                        <Box>
                            <Button
                                sx={{ mr: 2 }}
                                variant='contained'
                                type='submit'
                            >
                                Save
                            </Button>
                            <Button variant='outlined' onClick={handleCancel}>
                                Cancel
                            </Button>
                        </Box>
                    )}
                </Grid>
            </Grid>
        </Box>
    );
};

export default AccountInfo;
