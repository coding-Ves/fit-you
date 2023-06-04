/* eslint-disable react/prop-types */
import { Alert, Box, Button, FormControl, InputLabel, MenuItem, Select, Snackbar, Stack, TextField } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ActivitiesContext } from '../../../contexts/ActivitiesContext';
import AuthContext from '../../../contexts/AuthContext';
import { addActivityToGoal, getGoalsByUsername } from '../../../firebase/services/goals.service';
import { addSportSession } from '../../../firebase/services/sportSessions.service';

const CreateSportsSessionForm = ({ sport }) => {
    const { userData } = useContext(AuthContext);
    const { category } = useContext(ActivitiesContext);

    const { register, handleSubmit, reset } = useForm();

    // eslint-disable-next-line no-unused-vars
    const [isLoading, setIsLoading] = useState(false);

    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');

    const [goals, setGoals] = useState({});
    const [selectedGoal, setSelectedGoal] = useState('');

    useEffect(() => {
        getGoalsByUsername(userData.username)
            .then((snapshot) => setGoals(snapshot));
    }, [userData.username]);

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
        setSelectedGoal('');
    };

    const onSubmit = (data) => {
        setIsLoading(true);

        addSportSession(userData.username, sport.name, data.durationInMinutes)
            .then((id) => {
                setIsLoading(false);

                if (selectedGoal) {
                    return addActivityToGoal(selectedGoal, id, category);
                }
            })
            .then(() => {
                setSnackbarMessage('Activity added successfully!');
                setSnackbarSeverity('success');
                setSnackbarOpen(true);
                reset();
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

            <Stack>
                <Box>
                    <TextField
                        label='Minutes'
                        {...register('durationInMinutes')}
                        fullWidth
                        margin='normal'
                    />
                </Box>

                <Box>
                    <FormControl fullWidth margin='normal'>
                        <InputLabel>Add to goals?</InputLabel>
                        <Select
                            {...register('selectedGoal')}
                            defaultValue=''
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
                    <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
                </Box>

            </Stack>
        </>
    );
};

export default CreateSportsSessionForm;
