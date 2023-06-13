import { yupResolver } from '@hookform/resolvers/yup';
import FlagIcon from '@mui/icons-material/Flag';
import {
    Alert,
    Avatar,
    Box,
    Button,
    Grid,
    Paper,
    Snackbar,
    TextField,
    Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { checkGoalProgress, editGoal } from '../../../firebase/services/goals.service';
import editGoalValidationSchema from './editGoalValidationSchema';
import dayjs from 'dayjs';
import Loader from '../../Loader/Loader';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const EditGoalForm = ({ goal, onEditGoal, onClose }) => {
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(editGoalValidationSchema),
    });

    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    const onSubmit = (data) => {
        setIsLoading(true);
        editGoal(goal.goalId, data.newGoalName, data.newTargetValue, data.newTargetDate.getTime())
            .then(() => {
                return checkGoalProgress(goal.goalId, goal.goalProgress, data.newTargetValue);
            })
            .then(() => {
                setSnackbarMessage('Goal edited successfully');
                setSnackbarSeverity('success');
                setSnackbarOpen(true);
                setIsLoading(false);
                onEditGoal();
                onClose();
            })
            .catch((e) => {
                setIsLoading(false);
                setSnackbarMessage(e.code + ': ' + e.message);
                setSnackbarSeverity('error');
                setSnackbarOpen(true);
            });
    };

    return (
        <Box align='center'>
            {isLoading && <Loader />}
            <Paper
                variant='elevation'
                elevation={4}
                sx={{ width: 'fit-content', p: 2 }}
                component='main'
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

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <FlagIcon />
                    </Avatar>
                    <Typography component='h1' variant='h5'>
                        Edit your goal
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
                                    defaultValue={goal.goalName}
                                    autoComplete='newGoalName'
                                    name='newGoalName'
                                    required
                                    fullWidth
                                    id='newGoalName'
                                    label='Goal Name'
                                    {...register('newGoalName')}
                                    error={!!errors.newGoalName}
                                    helperText={errors.newGoalName?.message}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    defaultValue={goal.targetValue}
                                    required
                                    fullWidth
                                    type='number'
                                    id='newTargetValue'
                                    label='Target Value'
                                    name='newTargetValue'
                                    {...register('newTargetValue')}
                                    error={!!errors.newTargetValue}
                                    helperText={errors.newTargetValue?.message}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <Controller
                                        control={control}
                                        name='newTargetDate'
                                        defaultValue={dayjs(goal.targetDate)}
                                        render={({ field }) => (
                                            <DatePicker
                                                {...field}
                                                format='DD/MM/YYYY'
                                                required
                                                disablePast
                                                id='newTargetDate'
                                                label='Target Date'
                                                sx={{ width: '100%' }}
                                                error={!!errors.newTargetDate}
                                                helperText={errors.newTargetDate?.message}
                                            />
                                        )}
                                    />
                                </LocalizationProvider>
                            </Grid>
                        </Grid>
                        <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
                            Update goal
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
};

EditGoalForm.propTypes = {
    goal: PropTypes.object.isRequired,
    onEditGoal: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default EditGoalForm;
