import { yupResolver } from '@hookform/resolvers/yup';
import { Edit } from '@mui/icons-material';
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
import { updateUserHealthInfo } from './../../../../firebase/services/users.service';
import healthValidationSchema from './healthValidationSchema';

import { PropTypes } from 'prop-types';

export const HealthInfo = ({ userData: userProfileData }) => {
    const { userData } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(false);
    const [editable, setEditable] = useState(false); // State to track if fields are editable or not
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
    } = useForm({
        resolver: yupResolver(healthValidationSchema),
    });

    const handleEdit = () => {
        setEditable(true);
    };

    const handleSave = (data) => {
        setIsLoading(true);

        updateUserHealthInfo(
            userProfileData.username,
            data.height,
            data.weight,
            data.age
        )
            .then(() => {
                setSnackbarMessage('Health Info Updated!');
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

    const handleCancel = () => {
        setEditable(false);
        // Perform cancel action here if needed
    };

    return (
        <Box
            component='form'
            noValidate
            sx={{ mt: 3, maxWidth: 500, margin: 'auto' }}
            onSubmit={handleSubmit(handleSave)}
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
                        id='height'
                        label='Height'
                        defaultValue={userProfileData?.height}
                        {...register('height')}
                        error={!!errors.height}
                        helperText={errors.height?.message}
                        // variant={editable ? 'outlined' : 'standard'}
                        InputProps={{
                            readOnly: !editable, // Set readOnly based on editable state
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
                        id='weight'
                        label='Weight'
                        defaultValue={userProfileData?.weight}
                        {...register('weight')}
                        error={!!errors.weight}
                        helperText={errors.weight?.message}
                        // variant={editable ? 'outlined' : 'standard'}
                        InputProps={{
                            readOnly: !editable, // Set readOnly based on editable state
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
                        id='age'
                        label='Age'
                        defaultValue={userProfileData?.age}
                        {...register('age')}
                        error={!!errors.age}
                        helperText={errors.age?.message}
                        // variant={editable ? 'outlined' : 'standard'}
                        InputProps={{
                            readOnly: !editable, // Set readOnly based on editable state
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
                {userData?.username === userProfileData?.username ? (
                    <Grid item xs={12}>
                        {!editable ? (
                            <Button variant='outlined' onClick={handleEdit}>
                                Edit
                            </Button>
                        ) : (
                            <Box>
                                <Button
                                    variant='contained'
                                    type='submit'
                                    sx={{ mr: 2 }}
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
    );
};

export default HealthInfo;

HealthInfo.propTypes = {
    userData: PropTypes.object,
};
