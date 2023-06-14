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
import { useForm } from 'react-hook-form';
import { editCardioSession } from '../../../firebase/services/cardioSessions.service';
import { editFitnessExercise } from '../../../firebase/services/fitnessExercises.service';
import { editSportSession } from '../../../firebase/services/sportSessions.service';
import { editYogaSession } from '../../../firebase/services/yogaSessions.service';
import Loader from '../../Loader/Loader';
import editActivityValidationSchema from './editActivityValidationSchema';

const EditActivityForm = ({ onClose, onEditActivity, activity }) => {
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(editActivityValidationSchema),
    });

    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    const onSubmit = (data) => {
        setIsLoading(true);

        const handleSuccess = () => {
            setSnackbarMessage('Activity edited successfully');
            setSnackbarSeverity('success');
            setSnackbarOpen(true);
            setIsLoading(false);
            onEditActivity();
            onClose();
        };

        const handleError = (e) => {
            setIsLoading(false);
            setSnackbarMessage(e.code + ': ' + e.message);
            setSnackbarSeverity('error');
            setSnackbarOpen(true);
        };

        if (activity?.sportName) {
            editSportSession(activity.id, data.newDurationInMinutes)
                .then(handleSuccess)
                .catch(handleError);
        }

        if (activity?.poseName) {
            editYogaSession(activity.id, data.newDurationInMinutes)
                .then(handleSuccess)
                .catch(handleError);
        }

        if (activity?.cardioName) {
            editCardioSession(activity.id, data.newDurationInMinutes, data.newDistance)
                .then(handleSuccess)
                .catch(handleError);
        }

        if (activity?.fitnessExerciseName) {
            editFitnessExercise(activity.id, data.newSets)
                .then(handleSuccess)
                .catch(handleError);
        }
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
                        Edit your activity measurements
                    </Typography>
                    <Box
                        component='form'
                        noValidate
                        onSubmit={handleSubmit(onSubmit)}
                        sx={{ mt: 3 }}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                {/* minutes for all except fitness */}
                                {!activity?.fitnessExerciseName && (
                                    <TextField
                                        defaultValue={activity.durationInMinutes}
                                        required
                                        fullWidth
                                        type='number'
                                        id='newDurationInMinutes'
                                        label='Duration in minutes'
                                        name='newDurationInMinutes'
                                        {...register('newDurationInMinutes')}
                                        error={!!errors.newDurationInMinutes}
                                        helperText={errors.newDurationInMinutes?.message}
                                    />
                                )}

                                {/* distance for cardio */}
                                {activity?.cardioName && (
                                    <TextField
                                        defaultValue={activity.distance}
                                        required
                                        fullWidth
                                        type='number'
                                        id='newDistance'
                                        label='Distance in km'
                                        name='newDistance'
                                        {...register('newDistance')}
                                        error={!!errors.newDistance}
                                        helperText={errors.newDistance?.message}
                                    />
                                )}
                                {/* currently, only sets for fitness */}
                                {activity.fitnessExerciseName && (
                                    <TextField
                                        defaultValue={activity.sets.length}
                                        required
                                        fullWidth
                                        type='number'
                                        id='newSets'
                                        label='Number of sets'
                                        name='newSets'
                                        {...register('newSets')}
                                        error={!!errors.newSets}
                                        helperText={errors.newSets?.message}
                                    />
                                )}

                            </Grid>
                        </Grid>
                        <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
                            Update activity
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
};

EditActivityForm.propTypes = {
    activity: PropTypes.object.isRequired,
    onEditActivity: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default EditActivityForm;
