import { Box, Grid, Typography } from '@mui/material';
import SingleActiveGoalCard from '../SingleActiveGoalCard/SingleActiveGoalCard';
import { useEffect, useState } from 'react';
import { getGoalsByUsername } from '../../../firebase/services/goals.service';

const ActiveGoalsBoard = ({ username }) => {
    const [goals, setGoals] = useState([]);

    useEffect(() => {
        getGoalsByUsername(username).then((goals) => {
            setGoals(goals);
        });
    }, [username]);

    // TODO - currently, all goals are displayed, regardless if they are active or not

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Typography
                fontWeight={700}
                sx={{
                    fontSize: '44px',
                    '@media (max-width: 600px)': { fontSize: '30px' },
                }}
                mb='49px'
                textAlign='center'
            >
                Currently active goals:
            </Typography>
            <Grid container spacing={1} justifyContent='center'>
                {goals.map((goal) => (
                    <Grid item key={goal.id}>
                        <SingleActiveGoalCard goal={goal} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

ActiveGoalsBoard.propTypes = {};

export default ActiveGoalsBoard;
