import { yupResolver } from '@hookform/resolvers/yup';
import Edit from '@mui/icons-material/Edit';
import {
    Alert,
    Box,
    Button,
    Grid,
    Icon,
    InputAdornment,
    Snackbar,
    TextField,
} from '@mui/material';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import AuthContext from '../../../../contexts/AuthContext';
import { updateUserDetails } from '../../../../firebase/services/users.service';
import phoneValidationSchema from './registrationValidationSchema';

import { PropTypes } from 'prop-types';

export const AccountInfo = ({ userData: userProfileData }) => {
    const formattedDate = new Date(userProfileData.createdOn);
    const displayDate = formattedDate.toDateString();
    const { userData } = useContext(AuthContext);

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

        updateUserDetails(userProfileData.username, data.phoneNumber)
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
        <>
            <Box
                component='form'
                sx={{ mt: 3, maxWidth: 500, margin: 'auto' }}
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
                <Grid container component='div' spacing={2}>
                    <Grid item xs={12} component='div'>
                        <TextField
                            component='div'
                            fullWidth
                            id='username'
                            label='Username'
                            {...register('username')}
                            error={!!errors.username}
                            helperText={errors.username?.message}
                            defaultValue={userProfileData.username}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </Grid>

                    <Grid item xs={12} component='div'>
                        <TextField
                            component='div'
                            fullWidth
                            id='phoneNumber'
                            label='Phone Number'
                            defaultValue={userProfileData.phoneNumber}
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
                    <Grid item xs={12} component='div'>
                        <TextField
                            component='div'
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
                    {userData?.username === userProfileData?.username ? (
                        <Grid item xs={12} component='div'>
                            {!editable ? (
                                <Button variant='outlined' onClick={handleEdit}>
                                    Edit
                                </Button>
                            ) : (
                                <Box component='div'>
                                    <Button
                                        sx={{ mr: 2 }}
                                        variant='contained'
                                        type='submit'
                                    >
                                        Save
                                    </Button>
                                    <Button
                                        variant='outlined'
                                        onClick={handleCancel}
                                    >
                                        Cancel
                                    </Button>
                                </Box>
                            )}
                        </Grid>
                    ) : null}
                </Grid>
            </Box>
        </>
    );
};

export default AccountInfo;

AccountInfo.propTypes = {
    userData: PropTypes.object,
};
