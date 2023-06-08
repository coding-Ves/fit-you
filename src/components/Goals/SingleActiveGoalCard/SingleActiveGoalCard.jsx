import { Box, Typography, Paper } from '@mui/material';
import PropTypes from 'prop-types';
import { DAY_TO_MILLISECONDS } from '../../../common/constants';
import ProgressPieChart from './ProgressPieChart/ProgressPieChart';
import SingleGoalMenu from '../SingleGoalMenu/SingleGoalMenu';

// TODO - move the PieChart to a separate component

const SingleActiveGoalCard = ({ goal }) => {
    return (
        <Paper
            variant='elevation'
            elevation={5}
            borderRadius={'5px'}
            border={'solid 1px #e4e4e4'}
            sx={{ m: 2, p: 2 }}
        >
            <SingleGoalMenu sx={{ position: 'absolute'}}/>
            <Typography
                fontWeight={500}
                sx={{
                    '@media (max-width: 600px)': { fontSize: '30px' },
                }}
                textAlign='center'
                m={'10px 10px 0px 10px'}
            >
                {goal.goalName}
            </Typography>
            <ProgressPieChart
                currentProgress={goal.goalProgress}
                goalTarget={goal.targetValue}
            />
            <Typography
                fontWeight={500}
                sx={{
                    '@media (max-width: 600px)': { fontSize: '30px' },

                    p: 2,
                }}
                textAlign='center'
            >
                {goal.goalProgress} / {goal.targetValue} {goal.goalTargetType}
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    m: '0px 10px 5px 10px',
                }}
            >
                <Typography>
                    Started on: <br />{' '}
                    {new Date(goal.createdOn).toLocaleDateString('en-GB')}
                </Typography>
                <Typography>
                    Target date: <br />{' '}
                    {new Date(
                        goal.createdOn + goal.targetDate * DAY_TO_MILLISECONDS
                    ).toLocaleDateString('en-GB')}
                </Typography>
            </Box>
        </Paper>
    );
};

SingleActiveGoalCard.propTypes = {
    goal: PropTypes.object.isRequired,
};

export default SingleActiveGoalCard;
