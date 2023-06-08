import { Box, Grid, Typography } from '@mui/material';
import SingleActiveGoalCard from '../SingleActiveGoalCard/SingleActiveGoalCard';
import { useEffect, useState } from 'react';
import { deleteGoal, getGoalsByUsername } from '../../../firebase/services/goals.service';
import PropTypes from 'prop-types';
import CreateGoalDialog from '../CreateGoal/CreateGoalDialog';

const ActiveGoalsBoard = ({ username }) => {
    const [goals, setGoals] = useState([]);
    const [goalDeleted, setGoalDeleted] = useState(false);

    useEffect(() => {
        getGoalsByUsername(username).then((goals) => {
            setGoals(goals);
        });
        setGoalDeleted(false);
    }, [username, goalDeleted]);

    const handleDeleteGoal = (goalId, username) => {
        deleteGoal(goalId, username);
        setGoalDeleted(true);
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
                <CreateGoalDialog />
            </Box>
            <Grid container spacing={1} justifyContent='center'>
                {goals.map((goal) => (
                    <SingleActiveGoalCard
                        onDeleteGoal={handleDeleteGoal}
                        key={goal.id}
                        goal={goal}
                    />
                ))}
            </Grid>
        </>
    );
};

ActiveGoalsBoard.propTypes = {
    username: PropTypes.string.isRequired,
};

export default ActiveGoalsBoard;
