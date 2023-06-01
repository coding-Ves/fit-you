import {
    Box,
    Card,
    CardContent,
    Grid,
    TextField,
    Paper,
    Button,
    Icon,
    InputAdornment,
    Snackbar,
    Alert,
} from '@mui/material';
import { useState } from 'react';
import { Edit } from '@mui/icons-material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import healthValidationSchema from './healthValidationSchema';
import { updateUserHealthInfo } from './../../../../firebase/services/users.service';

export const HealthInfo = ({ userData }) => {
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
            userData.username,
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
            sx={{ mt: 3 }}
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
                        defaultValue={userData?.height}
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
                        defaultValue={userData?.weight}
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
                        defaultValue={userData?.age}
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

export default HealthInfo;
