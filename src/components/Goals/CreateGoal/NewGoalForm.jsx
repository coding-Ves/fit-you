import { yupResolver } from '@hookform/resolvers/yup';
import FlagIcon from '@mui/icons-material/Flag';
import {
    Alert,
    Avatar,
    Box,
    Button,
    FormControl,
    FormHelperText,
    Grid,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    Snackbar,
    TextField,
    Typography,
} from '@mui/material';

import { useContext, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { GOAL_TYPES, GOAL_TYPES_TARGETS } from '../../../common/constants';
import AuthContext from '../../../contexts/AuthContext';
import { addGoal } from '../../../firebase/services/goals.service';
import goalValidationSchema from './goalValidationSchema';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';

const NewGoalForm = ({ onAddGoal, handleClose }) => {
    const { userData } = useContext(AuthContext);
        
    const [isLoading, setIsLoading] = useState(false);
    const [goalType, setGoalType] = useState('');
    const [goalTargetType, setGoalTargetType] = useState('');

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
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(goalValidationSchema),
    });

    const handleGoalTypeChange = (event) => {
        setGoalType(event.target.value);
        setGoalTargetType(''); // Reset goalTargetType when goalType changes
    };

    const handleGoalTargetTypeChange = (event) => {
        setGoalTargetType(event.target.value);
    };

    const onSubmit = (data) => {
        setIsLoading(true);
        addGoal(
            userData.username,
            data.goalName,
            data.goalType,
            data.goalTargetType,
            +data.targetValue,
            dayjs(data.targetDate).endOf('day').valueOf()
        )
            .then(() => {
                setSnackbarMessage('Goal added successfully!');
                setSnackbarSeverity('success');
                setSnackbarOpen(true);
                onAddGoal();
                handleClose();
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
        <Box align='center'>
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
                        Add a new goal
                    </Typography>
                    <Box
                        component='form'
                        noValidate
                        onSubmit={handleSubmit(onSubmit)}
                        sx={{ mt: 3 }}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <FormControl fullWidth error={!!errors.goalType}>
                                    <InputLabel>Goal Type</InputLabel>
                                    <Select
                                        name='goalType'
                                        id='goalType'
                                        label='Goal Type'
                                        required
                                        {...register('goalType')}
                                        value={goalType}
                                        onChange={handleGoalTypeChange}
                                        error={!!errors.goalType}
                                        helperText={errors.goalType?.message}
                                    >
                                        {GOAL_TYPES.map((type) => {
                                            return (
                                                <MenuItem key={type} value={type}>
                                                    {type}
                                                </MenuItem>
                                            );
                                        })}
                                    </Select>
                                    {errors.goalType && (
                                        <FormHelperText>{errors.goalType.message}</FormHelperText>
                                    )}
                                </FormControl>
                            </Grid>
                            {goalType !== 'Other' && goalType && (
                                <Grid item xs={12}>
                                    <FormControl fullWidth error={!!errors.goalTargetType}>
                                        <InputLabel>Goal Target Type</InputLabel>
                                        <Select
                                            name='goalTargetType'
                                            id='goalTargetType'
                                            label='Goal Target Type'
                                            {...register('goalTargetType')}
                                            value={goalTargetType}
                                            onChange={handleGoalTargetTypeChange}
                                            error={!!errors.goalTargetType}
                                            helperText={errors.goalTargetType?.message}
                                        >
                                            {GOAL_TYPES_TARGETS[goalType]?.map((type) => {
                                                return (
                                                    <MenuItem key={type} value={type}>
                                                        {type}
                                                    </MenuItem>
                                                );
                                            })}
                                        </Select>
                                        {errors.goalTargetType && (
                                            <FormHelperText>
                                                {errors.goalTargetType.message}
                                            </FormHelperText>
                                        )}
                                    </FormControl>
                                </Grid>
                            )}
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete='goalName'
                                    name='goalName'
                                    required
                                    fullWidth
                                    id='goalName'
                                    label='Goal Name'
                                    {...register('goalName')}
                                    error={!!errors.goalName}
                                    helperText={errors.goalName?.message}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    type='number'
                                    id='targetValue'
                                    label='Target Value'
                                    name='targetValue'
                                    {...register('targetValue')}
                                    error={!!errors.targetValue}
                                    helperText={errors.targetValue?.message}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <Controller
                                        control={control}
                                        name='targetDate'
                                        defaultValue={dayjs()}
                                        render={({ field }) => (
                                            <DatePicker
                                                {...field}
                                                format='DD/MM/YYYY'
                                                required
                                                disablePast
                                                id='targetDate'
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
                            Set Goal
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
};

NewGoalForm.propTypes = {
    onAddGoal: PropTypes.func.isRequired,
    handleClose: PropTypes.func.isRequired,
};

export default NewGoalForm;
