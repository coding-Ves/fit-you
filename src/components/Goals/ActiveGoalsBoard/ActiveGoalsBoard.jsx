import { Box, Grid, Paper, Typography } from '@mui/material';
import SingleActiveGoalCard from '../SingleActiveGoalCard/SingleActiveGoalCard';
import { useEffect, useState } from 'react';
import { getGoalsByUsername } from '../../../firebase/services/goals.service';
import PropTypes from 'prop-types';
import CreateGoalDialog from '../CreateGoal/CreateGoalDialog';

const ActiveGoalsBoard = ({ username }) => {
    const [goals, setGoals] = useState([]);

    useEffect(() => {
        getGoalsByUsername(username).then((goals) => {
            setGoals(goals);
        });
    }, [username]);

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
                    <Grid item key={goal.id}>
                        <SingleActiveGoalCard goal={goal} />
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

ActiveGoalsBoard.propTypes = {
    username: PropTypes.string.isRequired,
};

export default ActiveGoalsBoard;
