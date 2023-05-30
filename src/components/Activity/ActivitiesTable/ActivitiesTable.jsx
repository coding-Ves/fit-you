import { Pagination, Stack, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { ACTIVITIES_PER_PAGE } from '../../../common/constants';
import AuthContext from '../../../contexts/AuthContext';
import { getUserActivities } from '../../../firebase/services/users.service';
import Title from '../../Dashboard/Title/Title';

const ActivitiesTable = () => {

    const { userData } = useContext(AuthContext);
    const [activities, setActivities] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastActivityOnPage = currentPage * ACTIVITIES_PER_PAGE;
    const indexOfFirstActivityOnPage = indexOfLastActivityOnPage - ACTIVITIES_PER_PAGE;
    const currentActivitiesOnPage = activities.slice(indexOfFirstActivityOnPage, indexOfLastActivityOnPage);

    useEffect(() => {
        // без if-a гърмеше с "Cannot read properties of null (reading 'username')"
        if (userData && userData.username) {
            getUserActivities(userData.username)
                .then((result) => {
                    setActivities(result);
                })
                .catch((error) => console.log(error));
        }
    }, [userData]);

    return (
        <>
            <Title>Your Activities</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Name</TableCell>
                        {/* <TableCell>Type</TableCell> ??*/}
                        <TableCell align="right"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {currentActivitiesOnPage.map((activity) => (
                        <TableRow key={activity.id}>
                            <TableCell>{activity.createdOn}</TableCell>
                            {/* fitnessExerciseName -> also change it in all service files to just 'name' */}
                            <TableCell>{activity.fitnessExerciseName}</TableCell>
                            {activity.sets ?
                                <TableCell align="right">Sets: {activity.sets.length}</TableCell>
                                :
                                <TableCell align="right">Duration: {activity.reps} mins</TableCell>
                            }
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <Stack
                sx={{ mt: { lg: '25px', xs: '5px' } }}
                alignItems='center'
            >
                {activities.length > ACTIVITIES_PER_PAGE && (
                    <Pagination
                        color='secondary'
                        shape='rounded'
                        size='small'
                        count={Math.ceil(
                            activities.length / ACTIVITIES_PER_PAGE
                        )}
                        page={currentPage}
                        onChange={(event, value) => setCurrentPage(value)}
                    />
                )}
            </Stack>
        </>
    );
};

export default ActivitiesTable;
