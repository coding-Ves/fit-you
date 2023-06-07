import { Box, Container, Grid, Paper, } from '@mui/material';
import ActivitiesTable from '../../components/Activity/ActivitiesTable/ActivitiesTable';
import AddActivityTable from '../../components/Activity/AddActivityTable/AddActivityTable';
import SideBarDrawer from '../../components/SideBarDrawer/SideBarDrawer';

const MyActivity = () => {

    return (
        <Box sx={{ display: 'flex' }}>
            <SideBarDrawer />
            <Box component="main" sx={{ flex: '1', display: 'flex', }}>
                <Container maxWidth="lg" sx={{ mt: 4, mb: 4, }}>
                    <Grid container spacing={3} sx={{ display: 'flex', flexDirection: 'column' }}>

                        {/* AddActivityTable */}
                        <Grid item xs={12} md={8} lg={10}>
                            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: '100%', }}>
                                <AddActivityTable />
                            </Paper>
                        </Grid>

                        {/* Activities Table */}
                        <Grid item xs={12} md={8} lg={10}>
                            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                                <ActivitiesTable />
                            </Paper>
                        </Grid>
                    </Grid>

                </Container>
            </Box>
        </Box>
    );
};

export default MyActivity;
