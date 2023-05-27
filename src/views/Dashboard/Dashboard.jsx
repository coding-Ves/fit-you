import { Grid, Paper } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Chart from '../../components/Dashboard/Chart/Chart';
import RecentActivity from '../../components/Dashboard/RecentActivity/RecentActivity';
import SideBarDrawer from '../../components/SideBarDrawer/SideBarDrawer';

const Dashboard = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <SideBarDrawer />
            <Box
                component='main'
                sx={{
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[100]
                            : theme.palette.grey[800],
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

                        {/* Recent Activity */}
                        <Grid item xs={12}>
                            <Paper
                                sx={{
                                    p: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                            >
                                <RecentActivity />
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default Dashboard;
