import { Box, Paper, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import SingleGoalMenu from '../SingleGoalMenu/SingleGoalMenu';
import ProgressPieChart from './ProgressPieChart/ProgressPieChart';
import { useEffect } from 'react';
import { checkGoalExpired } from '../../../firebase/services/goals.service';
import { useLocation } from 'react-router-dom';
import { Favorite, Grade, GradeOutlined } from '@mui/icons-material';

const SingleActiveGoalCard = ({ goal, onDeleteGoal, onEditGoal }) => {
    useEffect(() => {
        checkGoalExpired(goal.goalId, goal.targetDate);
    }, [goal]);

    const location = useLocation();

    return (
        <Paper
            variant='elevation'
            elevation={5}
            border={'solid 1px #e4e4e4'}
            sx={{
                m: '0px 10px 0px 10px',
                p: '0px 0px 25px 0px',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    width: '100%',
                    direction: 'column',
                }}
            >
                <Typography
                    fontWeight={500}
                    textAlign='center'
                    m={'10px auto 10px 10px'}
                    p={'15px 0px 0px 10px'}
                >
                    {goal.goalName}
                </Typography>
                {location.pathname !== '/dashboard' ? (
                    <Box paddingTop={'15px'}>
                        <SingleGoalMenu
                            onDeleteGoal={onDeleteGoal}
                            onEditGoal={onEditGoal}
                            goal={goal}
                            goalId={goal.goalId}
                            username={goal.username}
                        />
                    </Box>
                ) : (
                    <Box padding={'15px 10px 0px 0px'}>
                        <Grade sx={{color:'primary.main'}} fontSize="large"  />
                    </Box>
                )}
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <ProgressPieChart
                    currentProgress={goal.goalProgress}
                    goalTarget={goal.targetValue}
                />
            </Box>
            <Typography fontWeight={500} textAlign='center'>
                {goal.goalProgress} / {goal.targetValue} {goal.goalTargetType}
            </Typography>
            <Typography fontWeight={500} textAlign='center'>
                {goal.goalType}
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    m: '0px 10px 0px 10px',
                }}
            >
                <Typography>
                    Started on: <br />
                    {new Date(goal.createdOn).toLocaleDateString('en-GB')}
                </Typography>
                <Typography>
                    Target date: <br />
                    {new Date(goal.targetDate).toLocaleDateString('en-GB')}
                </Typography>
            </Box>
        </Paper>
    );
};

SingleActiveGoalCard.propTypes = {
    goal: PropTypes.object.isRequired,
    onDeleteGoal: PropTypes.func,
    onEditGoal: PropTypes.func,
};

export default SingleActiveGoalCard;
