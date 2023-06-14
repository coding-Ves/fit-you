import PropTypes from 'prop-types';
import { getGoalsByUsername } from '../../../firebase/services/goals.service';
import { useEffect, useState } from 'react';
import { DATE_OPTIONS, GOAL_STATUS, MAXIMUM_ACTIVE_GOALS } from '../../../common/constants';
import { Pagination, Stack, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import Title from '../../Dashboard/Title/Title';

const GoalsHistoryTable = ({ username, itemsPerPage }) => {
    const [goals, setGoals] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        getGoalsByUsername(username).then((goals) => {
            const filteredActiveGoals = goals
                .filter((goal) => goal.goalStatus !== GOAL_STATUS.ACTIVE)
                .reverse(); // Reverse the array so that the newest goals are on top
            setGoals(filteredActiveGoals);
        });
    }, [username]);

    const indexOfLastGoalOnPage = currentPage * itemsPerPage;
    const indexOfFirstGoalOnPage = indexOfLastGoalOnPage - itemsPerPage;
    const currentGoalsOnPage = goals.slice(indexOfFirstGoalOnPage, indexOfLastGoalOnPage);

    return (
        <>
            <Title>Previous goals</Title>
            <Table size='small'>
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Section</TableCell>
                        <TableCell>Goal Type</TableCell>
                        <TableCell>Progress</TableCell>
                        <TableCell>Target</TableCell>
                        <TableCell>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {currentGoalsOnPage.map((goal) => (
                        <TableRow key={goal.goalId}>
                            <TableCell>
                                {new Date(goal.createdOn).toLocaleString('en-US', DATE_OPTIONS)}
                            </TableCell>
                            <TableCell>{goal.goalName}</TableCell>
                            <TableCell>{goal.goalType}</TableCell>
                            <TableCell>{goal.goalTargetType}</TableCell>
                            <TableCell>
                                {goal.goalProgress} (
                                {((goal.goalProgress / goal.targetValue) * 100).toFixed(0)}%)
                            </TableCell>
                            <TableCell>{goal.targetValue}</TableCell>
                            <TableCell>{goal.goalStatus}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Stack sx={{ mt: { lg: '25px', xs: '5px' } }} alignItems='center'>
                {goals.length > MAXIMUM_ACTIVE_GOALS && (
                    <Pagination
                        color='secondary'
                        shape='rounded'
                        size='small'
                        count={Math.ceil(goals.length / itemsPerPage)}
                        page={currentPage}
                        onChange={(_, value) => setCurrentPage(value)}
                    />
                )}
            </Stack>
        </>
    );
};

GoalsHistoryTable.propTypes = {
    username: PropTypes.string,
    itemsPerPage: PropTypes.number,
};

export default GoalsHistoryTable;
