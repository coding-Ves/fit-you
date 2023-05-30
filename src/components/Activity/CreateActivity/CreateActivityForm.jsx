/* eslint-disable react/prop-types */
import { Alert, Box, Button, FormControl, InputLabel, MenuItem, Select, Slider, Snackbar, Stack, TextField, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { EXERCISES_UNITS, WEIGHT_UNIT } from '../../../common/constants';
import AuthContext from '../../../contexts/AuthContext';
import { addFitnessExercise, addFitnessExerciseToGoal } from '../../../firebase/services/fitnessExercises.service';
import { getGoalsByUsername } from '../../../firebase/services/goals.service';

const CreateActivityForm = ({ exercise }) => {

    const { userData } = useContext(AuthContext);

    // eslint-disable-next-line no-unused-vars
    const [isLoading, setIsLoading] = useState(false);

    const [numOfSets, setNumOfSets] = useState(3);
    const [formInputs, setFormInputs] = useState(Array(numOfSets).fill({
        reps: '',
        exercisesUnits: '',
        weight: '',
        weightUnit: '',
    }));

    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');

    const [goals, setGoals] = useState({});
    const [selectedGoal, setSelectedGoal] = useState('');

    useEffect(() => {
        getGoalsByUsername(userData.username)
            .then((snapshot) => setGoals(snapshot));
    }, [userData.username]);

    const handleNumOfSetsChange = (event, value) => {
        setNumOfSets(value);
        setFormInputs((prevInputs) => {
            // map so that we create new objects and not just reference the old ones - fixed bug
            const newInputs = prevInputs.map((input, index) => {
                if (index >= value) {
                    return null;
                }
                return input;
            }).filter((input) => input !== null);

            if (newInputs.length < value) {
                const diff = value - newInputs.length;
                for (let i = 0; i < diff; i++) {
                    newInputs.push({
                        reps: '',
                        exercisesUnits: '',
                        weight: '',
                        weightUnit: '',
                    });
                }
            }
            return newInputs;
        });
    };

    const handleInputChange = (index, field, value) => {
        setFormInputs((prevInputs) => {
            const newInputs = prevInputs.map((input, i) => {
                //not the set(i.e. index) we're modifying
                if (i !== index) {
                    return input;
                }
                // new obj
                return {
                    ...input,
                    [field]: value,
                };
            });
            return newInputs;
        });
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
        setSelectedGoal('');
    };

    const handleSubmit = () => {
        setIsLoading(true);

        addFitnessExercise(userData.username, exercise.name, formInputs)
            .then((id) => {
                setIsLoading(false);

                if (selectedGoal) {
                    return addFitnessExerciseToGoal(selectedGoal, id);
                }
            })
            .then(() => {
                setSnackbarMessage('Activity added successfully!');
                setSnackbarSeverity('success');
                setSnackbarOpen(true);
            })
            .catch((error) => {
                setIsLoading(false);
                setSnackbarMessage(error.message);
                setSnackbarSeverity('error');
                setSnackbarOpen(true);
            });
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
            <Stack spacing={2} direction='row' sx={{ mb: 1 }} alignItems='center'>
                <Typography>{`Number of sets: ${numOfSets}`}</Typography>
                <Slider
                    value={numOfSets}
                    min={0}
                    max={10}
                    defaultValue={3}
                    onChange={handleNumOfSetsChange}
                />
            </Stack>
            <Box mt={2}>
                {Array.from({ length: numOfSets }).map((_, index) => (
                    <Stack key={index} direction='row'>
                        <Typography>{`Set ${index + 1}`}</Typography>
                        <TextField
                            label='value'
                            value={formInputs[index].reps}
                            onChange={(e) => handleInputChange(index, 'reps', e.target.value)}
                            fullWidth
                            margin='normal'
                        />
                        <FormControl fullWidth margin='normal'>
                            <InputLabel>Exercises Units</InputLabel>
                            <Select
                                value={formInputs[index].exercisesUnits}
                                onChange={(e) => handleInputChange(index, 'exercisesUnits', e.target.value)}
                            >
                                <MenuItem value=''>
                                    <em>None</em>
                                </MenuItem>
                                {EXERCISES_UNITS.map((unit) =>
                                    <MenuItem key={unit} value={unit}>{unit}</MenuItem>
                                )}
                            </Select>
                        </FormControl>
                        <TextField
                            label='Weight'
                            value={formInputs[index].weight}
                            onChange={(e) => handleInputChange(index, 'weight', e.target.value)}
                            fullWidth
                            margin='normal'
                        />
                        <FormControl fullWidth margin='normal'>
                            <InputLabel id={`unit-label-${index}`}>Weight Unit</InputLabel>
                            <Select
                                value={formInputs[index].weightUnit}
                                onChange={(e) => handleInputChange(index, 'weightUnit', e.target.value)}
                            >
                                <MenuItem value=''>
                                    <em>None</em>
                                </MenuItem>
                                {WEIGHT_UNIT.map((unit) =>
                                    <MenuItem key={unit} value={unit}>{unit}</MenuItem>
                                )}
                            </Select>
                        </FormControl>
                    </Stack>
                ))}
            </Box>
            <Box>
                <FormControl fullWidth margin='normal'>
                    <InputLabel>Add to goals?</InputLabel>
                    <Select
                        value={selectedGoal}
                        onChange={(e) => setSelectedGoal(e.target.value)}
                    >
                        <MenuItem value=''>
                            <em>No, thanks</em>
                        </MenuItem>
                        {Object.values(goals).map((goal) =>
                            <MenuItem key={goal.goalId} value={goal.goalId}>{goal.goalName}</MenuItem>
                        )}
                    </Select>
                </FormControl>
                <Button onClick={handleSubmit}>Submit</Button>
            </Box>
        </>
    );
};

export default CreateActivityForm;
