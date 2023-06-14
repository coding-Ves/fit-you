import { Box, Grid, Paper } from '@mui/material';
import Container from '@mui/material/Container';
import { useContext, useEffect, useState } from 'react';
import { PREVIOUS_GOALS_PER_PAGE_DASHBOARD } from '../../common/constants';
import ActivitiesTable from '../../components/Activity/ActivitiesTable/ActivitiesTable';
import ActivitiesChart from '../../components/Dashboard/ActivitiesChart/ActivitiesChart';
import GoalsHistoryTable from '../../components/Goals/GoalsHistoryTable/GoalsHistoryTable';
import SingleActiveGoalCard from '../../components/Goals/SingleActiveGoalCard/SingleActiveGoalCard';
import Loader from '../../components/Loader/Loader';
import SideBarDrawer from '../../components/SideBarDrawer/SideBarDrawer';
import AuthContext from '../../contexts/AuthContext';
import { getGoalById } from '../../firebase/services/goals.service';

const Dashboard = () => {
    const { userData } = useContext(AuthContext);
    const [goal, setGoal] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [hasFavoriteGoal, setHasFavoriteGoal] = useState(false);

    useEffect(() => {
        if (userData?.favoriteGoal) {
            setIsLoading(false);
            getGoalById(userData?.favoriteGoal).then((goal) => {
                setGoal(goal);
                setHasFavoriteGoal(true);
            });
        }
        setIsLoading(false);
    }, [userData?.favoriteGoal]);

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <Paper variant='elevation' elevation={2} sx={{ display: 'flex' }}>
                    <SideBarDrawer />
                    <Box
                        component='main'
                        sx={{
                            flexGrow: 1,
                            overflow: 'auto',
                        }}
                    >
                        <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={8} lg={9}>
                                    <Paper
                                        sx={{
                                            p: 2,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            height: '100%',
                                            width: '100%',
                                        }}
                                    >
                                        <ActivitiesChart />
                                    </Paper>
                                </Grid>
                                {hasFavoriteGoal && (
                                    <Box mt={1}>
                                        <SingleActiveGoalCard goal={goal} />{' '}
                                    </Box>
                                )}

                                <Grid item xs={12}>
                                    <Paper
                                        sx={{
                                            p: 2,
                                            display: 'flex',
                                            flexDirection: 'column',
                                        }}
                                    >
                                        <ActivitiesTable />
                                    </Paper>
                                </Grid>
                                <Grid item xs={12}>
                                    <Paper
                                        sx={{
                                            p: 2,
                                            display: 'flex',
                                            flexDirection: 'column',
                                        }}
                                    >
                                        <GoalsHistoryTable
                                            itemsPerPage={PREVIOUS_GOALS_PER_PAGE_DASHBOARD}
                                            username={userData?.username}
                                        />
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Container>
                    </Box>
                </Paper>
            )}
        </>
    );
};

export default Dashboard;
