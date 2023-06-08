import Box from '@mui/material/Box';
import SideBarDrawer from '../../components/SideBarDrawer/SideBarDrawer';
import NewGoalForm from './../../components/Goals/CreateGoal/NewGoalForm';
import ActiveGoalsBoard from '../../components/Goals/ActiveGoalsBoard/ActiveGoalsBoard';
import { Container, Grid, Paper } from '@mui/material';
import { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';

const MyGoals = () => {
    const { userData } = useContext(AuthContext);

    return (
        <Box sx={{ display: 'flex' }}>
            <SideBarDrawer />
            <Box
                component='main'
                sx={{
                    flex: '1',
                    display: 'flex',
                }}
            >
                <Container maxWidth='xl' sx={{ mt: 4, mb: 4 }}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                        }}
                    >
                        <ActiveGoalsBoard username={userData?.username} />
                    </Paper>
                </Container>
            </Box>
        </Box>
    );
};

export default MyGoals;
