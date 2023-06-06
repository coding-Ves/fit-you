import { yupResolver } from '@hookform/resolvers/yup';
import FlagIcon from '@mui/icons-material/Flag';
import {
    Alert,
    Snackbar,
    Avatar,
    Box,
    Button,
    Container,
    CssBaseline,
    Grid,
    TextField,
    Typography,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from '@mui/material';

import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { addGoal } from '../../../firebase/services/goals.service';
import goalValidationSchema from './goalValidationSchema';
import AuthContext from '../../../contexts/AuthContext';
import { GOAL_TYPES, GOAL_TYPES_TARGETS } from '../../../common/constants';

const NewGoalForm = () => {
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
            +data.targetDate
        )
            .then(() => {
                setSnackbarMessage('Goal added successfully!');
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
                                <FormControl fullWidth>
                                    <InputLabel>Goal Type</InputLabel>
                                    <Select
                                        name='goalType'
                                        id='goalType'
                                        label='Goal Type'
                                        required
                                        {...register('goalType')}
                                        value={goalType}
                                        onChange={handleGoalTypeChange}
                                    >
                                        {GOAL_TYPES.map((type) => {
                                            return (
                                                <MenuItem key={type} value={type}>
                                                    {type}
                                                </MenuItem>
                                            );
                                        })}
                                    </Select>
                                </FormControl>
                            </Grid>
                            {goalType !== 'Other' && goalType && (
                                <Grid item xs={12}>
                                    <FormControl fullWidth>
                                        <InputLabel>Goal Target Type</InputLabel>
                                        <Select
                                            name='goalTargetType'
                                            id='goalTargetType'
                                            label='Goal Target Type'
                                            {...register('goalTargetType')}
                                            value={goalTargetType}
                                            onChange={handleGoalTargetTypeChange}
                                        >
                                            {GOAL_TYPES_TARGETS[goalType]?.map((type) => {
                                                return (
                                                    <MenuItem key={type} value={type}>
                                                        {type}
                                                    </MenuItem>
                                                );
                                            })}
                                        </Select>
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
                                    id='targetValue'
                                    label='Target Value'
                                    name='targetValue'
                                    {...register('targetValue')}
                                    error={!!errors.targetValue}
                                    helperText={errors.targetValue?.message}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id='targetDate'
                                    label='Target Date'
                                    name='targetDate'
                                    {...register('targetDate')}
                                    error={!!errors.targetDate}
                                    helperText={errors.targetDate?.message}
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
