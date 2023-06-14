import {
    Alert,
    Box,
    Button,
    FormControl,
    FormLabel,
    MenuItem,
    Select,
    Snackbar,
    Stack,
    TextField
} from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import AuthContext from '../../../contexts/AuthContext';
import { addCardioSession } from '../../../firebase/services/cardioSessions.service';
import { addActivityToGoal, checkGoalProgress, getGoalsByUsername, } from '../../../firebase/services/goals.service';
import { addSportSession } from '../../../firebase/services/sportSessions.service';
import { addYogaSession } from '../../../firebase/services/yogaSessions.service';
import PropTypes from 'prop-types';

const CreateSportsCardioYogaForm = ({ activity, category, handleClose }) => {
    const { userData } = useContext(AuthContext);
    const { register, handleSubmit, reset } = useForm();

    // eslint-disable-next-line no-unused-vars
    const [isLoading, setIsLoading] = useState(false);

    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');

    const [goals, setGoals] = useState({});
    const [selectedGoal, setSelectedGoal] = useState('');
    const [selectedGoalObject, setSelectedGoalObject] = useState('');

    const [addedExerciseToGoal, setAddedExerciseToGoal] = useState(false);

    useEffect(() => {
        getGoalsByUsername(userData.username).then((snapshot) => {
            const filteredByCategory = snapshot.filter(
                (goal) => goal?.goalType?.toLowerCase() === category
            );
            setGoals(filteredByCategory);
        });
        setAddedExerciseToGoal(false);
    }, [userData.username, category, addedExerciseToGoal]);

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
        setSelectedGoal('');
        setSelectedGoalObject('');
    };

    const onSubmit = (data) => {
        setIsLoading(true);

        const handleSuccess = () => {
            setSnackbarMessage('Activity added successfully!');
            setSnackbarSeverity('success');
            setSnackbarOpen(true);
            reset();

            setTimeout(() => {
                handleClose();
            }, 1500);
        };

        const handleError = (error) => {
            setIsLoading(false);
            setSnackbarMessage(error.message);
            setSnackbarSeverity('error');
            setSnackbarOpen(true);
        };

        if (category === 'sports') {
            addSportSession(userData.username, activity.name, data.durationInMinutes)
                .then((id) => {
                    setIsLoading(false);

                    if (selectedGoal) {
                        const { goalProgress, goalTargetType } = goals.find(
                            (goal) => goal.goalId === selectedGoal
                        );

                        setAddedExerciseToGoal(true);
                        return addActivityToGoal(
                            selectedGoal,
                            id,
                            category,
                            goalProgress,
                            goalTargetType,
                            Number(data.durationInMinutes)
                        );
                    }
                })
                .then(() => {
                    return checkGoalProgress(
                        selectedGoal,
                        selectedGoalObject.goalProgress,
                        selectedGoalObject.targetValue
                    );
                })
                .then(handleSuccess)
                .catch(handleError);

        } else if (category === 'cardio') {
            addCardioSession(
                userData.username,
                activity.name,
                data.distance,
                data.durationInMinutes
            )
                .then((id) => {
                    setIsLoading(false);

                    if (selectedGoal) {
                        const { goalProgress, goalTargetType } = goals.find(
                            (goal) => goal.goalId === selectedGoal
                        );

                        let newProgress;
                        if (goalTargetType === 'Total distance') {
                            newProgress = Number(data.distance);
                        } else if (goalTargetType === 'Total minutes') {
                            newProgress = Number(data.durationInMinutes);
                        }

                        setAddedExerciseToGoal(true);
                        return addActivityToGoal(
                            selectedGoal,
                            id,
                            category,
                            goalProgress,
                            goalTargetType,
                            newProgress
                        );
                    }
                })
                .then(() => {
                    return checkGoalProgress(
                        selectedGoal,
                        selectedGoalObject.goalProgress,
                        selectedGoalObject.targetValue
                    );
                })
                .then(handleSuccess)
                .catch(handleError);

        } else if (category === 'yoga') {
            addYogaSession(userData.username, activity.english_name, data.durationInMinutes)
                .then((id) => {
                    setIsLoading(false);

                    if (selectedGoal) {
                        const { goalProgress, goalTargetType } = goals.find(
                            (goal) => goal.goalId === selectedGoal
                        );

                        let newProgress;
                        if (goalTargetType === 'Total sessions') {
                            newProgress = Number(data.sessions);
                        } else if (goalTargetType === 'Total minutes') {
                            newProgress = Number(data.durationInMinutes);
                        }

                        setAddedExerciseToGoal(true);
                        return addActivityToGoal(
                            selectedGoal,
                            id,
                            category,
                            goalProgress,
                            goalTargetType,
                            Number(data.durationInMinutes)
                        ).then(() => {
                            return checkGoalProgress(
                                selectedGoal,
                                selectedGoalObject.goalProgress,
                                selectedGoalObject.targetValue
                            );
                        });
                    }
                })
                .then(handleSuccess)
                .catch(handleError);
        }
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

            <Stack>
                <Box>
                    <TextField
                        label='Minutes'
                        {...register('durationInMinutes')}
                        fullWidth
                        margin='normal'
                    />
                </Box>

                {category === 'cardio' && (
                    <Box>
                        <TextField
                            label='Distance in km'
                            {...register('distance')}
                            fullWidth
                            margin='normal'
                        />
                    </Box>
                )}

                {category === 'yoga' && (
                    <Box>
                        <TextField
                            label='Sessions'
                            {...register('sessions')}
                            fullWidth
                            margin='normal'
                        />
                    </Box>
                )}

                <Box>
                    <FormControl fullWidth margin='normal'>
                        <FormLabel>Add to goals?</FormLabel>
                        <Select
                            {...register('selectedGoal')}
                            defaultValue=''
                            onChange={(e) => {
                                setSelectedGoal(e.target.value);
                                setSelectedGoalObject(
                                    goals.find((goal) => goal.goalId === e.target.value)
                                );
                            }}
                        >
                            <MenuItem value=''>
                                <em>No, thanks</em>
                            </MenuItem>
                            {Object.values(goals).map((goal) => (
                                <MenuItem key={goal.goalId} value={goal.goalId}>
                                    {goal.goalName} ({goal.goalTargetType})
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
                </Box>
            </Stack>
        </>
    );
};

CreateSportsCardioYogaForm.propTypes = {
    activity: PropTypes.object.isRequired,
    category: PropTypes.string.isRequired,
    handleClose: PropTypes.func.isRequired,
};


export default CreateSportsCardioYogaForm;
