import { Box, Grid, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { deleteGoal, getGoalsByUsername } from '../../../firebase/services/goals.service';
import CreateGoalDialog from '../CreateGoal/CreateGoalDialog';
import SingleActiveGoalCard from '../SingleActiveGoalCard/SingleActiveGoalCard';

const ActiveGoalsBoard = ({ username }) => {
    const [goals, setGoals] = useState([]);
    const [goalDeleted, setGoalDeleted] = useState(false);
    const [goalEdited, setGoalEdited] = useState(false);
    const [goalAdded, setGoalAdded] = useState(false);

    useEffect(() => {
        getGoalsByUsername(username).then((goals) => {
            setGoals(goals);
        });
        setGoalDeleted(false);
        setGoalEdited(false);
        setGoalAdded(false);
    }, [username, goalDeleted, goalEdited, goalAdded]);

    const handleDeleteGoal = (goalId, username) => {
        deleteGoal(goalId, username);
        setGoalDeleted(true);
    };

    const handleEditGoal = () => {
        setGoalEdited(true);
    };

    const handleAddGoal = () => {
        setGoalEdited(true);
    };

    // TODO - currently, all goals are displayed, regardless if they are active or not

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <Typography
                    sx={{
                        fontSize: '40px',
                        '@media (max-width: 600px)': { fontSize: '30px' },
                    }}
                    textAlign='center'
                >
                    Currently active goals:
                </Typography>
                <CreateGoalDialog onAddGoal={handleAddGoal} />
            </Box>
            <Grid container spacing={1} justifyContent='center'>
                {goals.map((goal) => (
                    <SingleActiveGoalCard
                        onDeleteGoal={handleDeleteGoal}
                        onEditGoal={handleEditGoal}
                        key={goal.goalId}
                        goal={goal}
                    />
                ))}
            </Grid>
        </>
    );
};

ActiveGoalsBoard.propTypes = {
    username: PropTypes.string,
};

export default ActiveGoalsBoard;
