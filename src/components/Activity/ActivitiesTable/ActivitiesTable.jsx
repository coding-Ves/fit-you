import { Pagination, Stack, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { ACTIVITIES_PER_PAGE, DATE_OPTIONS } from '../../../common/constants';
import AuthContext from '../../../contexts/AuthContext';
import { deleteCardioSession } from '../../../firebase/services/cardioSessions.service';
import { deleteFitnessExercise } from '../../../firebase/services/fitnessExercises.service';
import { deleteSportSession } from '../../../firebase/services/sportSessions.service';
import { getUserActivities } from '../../../firebase/services/users.service';
import { deleteYogaSession } from '../../../firebase/services/yogaSessions.service';
import Title from '../../Dashboard/Title/Title';
import Loader from '../../Loader/Loader';
import ActivitiesTableMenu from './ActivitiesTableMenu';

const ActivitiesTable = () => {
    const { userData } = useContext(AuthContext);
    const [activities, setActivities] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const [isLoading, setIsLoading] = useState(false);
    const [activityDeleted, setActivityDeleted] = useState(false);
    const [activityEdited, setActivityEdited] = useState(false);

    const indexOfLastActivityOnPage = currentPage * ACTIVITIES_PER_PAGE;
    const indexOfFirstActivityOnPage = indexOfLastActivityOnPage - ACTIVITIES_PER_PAGE;
    const currentActivitiesOnPage = activities.slice(
        indexOfFirstActivityOnPage,
        indexOfLastActivityOnPage
    );

    useEffect(() => {
        if (userData && userData.username) {
            setIsLoading(true);

            getUserActivities(userData.username)
                .then((result) => {
                    setActivities(result);
                })
                .then(() => setIsLoading(false));

            setActivityDeleted(false);
            setActivityEdited(false);
        }
    }, [userData, activityDeleted, activityEdited]);

    const handleDeleteActivity = (activity, username) => {
        if (activity?.poseName) {
            deleteYogaSession(activity.id, username);
        }
        if (activity?.cardioName) {
            deleteCardioSession(activity.id, username);
        }
        if (activity?.sportName) {
            deleteSportSession(activity.id, username);
        }
        if (activity?.fitnessExerciseName) {
            deleteFitnessExercise(activity.id, username);
        }

        setActivityDeleted(true);
    };

    const handleEditActivity = () => {
        setActivityEdited(true);
    };

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <Title>Activities</Title>
                    <Table size='small'>
                        <TableHead>
                            <TableRow>
                                <TableCell>Date</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Type</TableCell>
                                <TableCell align='right'>Measurements</TableCell>
                                <TableCell align='right'>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {activities.length > 0 ? (
                                currentActivitiesOnPage.map((activity) => (
                                    <TableRow key={activity.id}>
                                        <TableCell align='left'>
                                            {new Date(activity.createdOn).toLocaleString(
                                                'en-US',
                                                DATE_OPTIONS
                                            )}
                                        </TableCell>

                                        <TableCell>
                                            {activity?.fitnessExerciseName}
                                            {activity?.sportName}
                                            {activity?.cardioName}
                                            {activity?.poseName}
                                        </TableCell>

                                        {activity?.fitnessExerciseName && (
                                            <TableCell>Fitness</TableCell>
                                        )}
                                        {activity?.sportName && <TableCell>Sports</TableCell>}
                                        {activity?.cardioName && <TableCell>Cardio</TableCell>}
                                        {activity?.poseName && <TableCell>Yoga</TableCell>}

                                        {/* Measurements */}
                                        {activity?.fitnessExerciseName && (
                                            <TableCell align='right'>
                                                {activity.sets.length} sets
                                            </TableCell>
                                        )}

                                        {activity?.sportName &&
                                            (activity.durationInMinutes ? (
                                                <TableCell align='right'>
                                                    {activity.durationInMinutes} mins
                                                </TableCell>
                                            ) : (
                                                <TableCell align='right'>A session</TableCell>
                                            ))}

                                        {activity?.cardioName &&
                                            (activity.durationInMinutes ? (
                                                <TableCell align='right'>
                                                    {activity.durationInMinutes} mins
                                                </TableCell>
                                            ) : (
                                                <TableCell align='right'>
                                                    {activity.distance} km
                                                </TableCell>
                                            ))}

                                        {activity?.poseName &&
                                            (activity.durationInMinutes ? (
                                                <TableCell align='right'>
                                                    {activity.durationInMinutes} mins
                                                </TableCell>
                                            ) : (
                                                <TableCell align='right'>
                                                    {activity.sessions} session
                                                </TableCell>
                                            ))}

                                        {/* Edit/Delete */}
                                        <TableCell align='right'>
                                            <ActivitiesTableMenu
                                                onDeleteActivity={handleDeleteActivity}
                                                onEditActivity={handleEditActivity}
                                                activity={activity}
                                            />
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell align='center' colSpan={5}>
                                        No activities found
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>

                    <Stack sx={{ mt: { lg: '25px', xs: '5px' } }} alignItems='center'>
                        {activities.length > ACTIVITIES_PER_PAGE && (
                            <Pagination
                                color='secondary'
                                shape='rounded'
                                size='small'
                                count={Math.ceil(activities.length / ACTIVITIES_PER_PAGE)}
                                page={currentPage}
                                onChange={(event, value) => setCurrentPage(value)}
                            />
                        )}
                    </Stack>
                </>
            )}
        </>
    );
};

export default ActivitiesTable;
