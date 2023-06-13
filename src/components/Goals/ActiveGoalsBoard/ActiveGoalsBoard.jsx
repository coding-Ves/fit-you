import { Box, Grid, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { deleteGoal, getGoalsByUsername } from '../../../firebase/services/goals.service';
import CreateGoalDialog from '../CreateGoal/CreateGoalDialog';
import SingleActiveGoalCard from '../SingleActiveGoalCard/SingleActiveGoalCard';
import { GOAL_STATUS, MAXIMUM_ACTIVE_GOALS } from '../../../common/constants';
import Title from '../../Dashboard/Title/Title';
import Loader from '../../Loader/Loader';

const ActiveGoalsBoard = ({ username }) => {
    const [goals, setGoals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasReachedMaximumGoals, setHasReachedMaximumGoals] = useState(false);
    const [goalDeleted, setGoalDeleted] = useState(false);
    const [goalEdited, setGoalEdited] = useState(false);
    const [goalAdded, setGoalAdded] = useState(false);

    useEffect(() => {
        getGoalsByUsername(username).then((goals) => {
            const filteredActiveGoals = goals.filter(
                (goal) => goal.goalStatus === GOAL_STATUS.ACTIVE
            );
            setGoals(filteredActiveGoals);
            setIsLoading(false);
            if (filteredActiveGoals.length >= MAXIMUM_ACTIVE_GOALS) {
                setHasReachedMaximumGoals(true);
            }
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

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <Title variant='h4' textAlign='center'>
                    Currently active goals:
                </Title>
                <CreateGoalDialog
                    hasReachedMaximumGoals={hasReachedMaximumGoals}
                    onAddGoal={handleAddGoal}
                />
            </Box>
            {isLoading ? (
                <Loader />
            ) : (
                <Grid container justifyContent='center' paddingBottom={2} paddingTop={2}>
                    {goals.length > 0 ? (
                        goals.map((goal) => (
                            <SingleActiveGoalCard
                                onDeleteGoal={handleDeleteGoal}
                                onEditGoal={handleEditGoal}
                                key={goal.goalId}
                                goal={goal}
                            />
                        ))
                    ) : (
                        <Typography variant='h6'>
                            You have no active goals. Click the + button to add one.
                        </Typography>
                    )}
                </Grid>
            )}
        </>
    );
};

ActiveGoalsBoard.propTypes = {
    username: PropTypes.string,
};

export default ActiveGoalsBoard;
