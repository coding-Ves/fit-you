import { Grid, Paper, Box } from '@mui/material';
import Container from '@mui/material/Container';
import Chart from '../../components/Dashboard/Chart/Chart';
import ActivitiesTable from '../../components/Activity/ActivitiesTable/ActivitiesTable';
import SideBarDrawer from '../../components/SideBarDrawer/SideBarDrawer';
import { useContext, useEffect, useState } from 'react';
import AuthContext from '../../contexts/AuthContext';
import SingleActiveGoalCard from '../../components/Goals/SingleActiveGoalCard/SingleActiveGoalCard';
import { getGoalById } from '../../firebase/services/goals.service';
import Loader from '../../components/Loader/Loader';

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
                        {/* <Toolbar /> */}
                        <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
                            <Grid container spacing={3}>
                                {/* Chart */}
                                <Grid item xs={12} md={8} lg={9}>
                                    <Paper
                                        sx={{
                                            p: 2,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            height: 240,
                                        }}
                                    >
                                        <Chart />
                                    </Paper>
                                </Grid>
                                {/* Placement o favorite to be decided */}
                                {hasFavoriteGoal && <SingleActiveGoalCard goal={goal} />}
                                {/* Activities Table */}
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
                            </Grid>
                        </Container>
                    </Box>
                </Paper>
            )}
        </>
    );
};

export default Dashboard;
