import { Grid, Paper, Box } from '@mui/material';

import Container from '@mui/material/Container';
import Chart from '../../components/Dashboard/Chart/Chart';
import ActivitiesTable from '../../components/Activity/ActivitiesTable/ActivitiesTable';
import SideBarDrawer from '../../components/SideBarDrawer/SideBarDrawer';

const Dashboard = () => {
    return (
        <Paper variant='elevation' elevation={2} sx={{ display: 'flex' }}>
            <SideBarDrawer />

            <Box
                component='main'
                sx={{
                    flexGrow: 1,
                    height: '100vh',
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
    );
};

export default Dashboard;
