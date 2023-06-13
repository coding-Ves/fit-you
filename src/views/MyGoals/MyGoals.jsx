import Box from '@mui/material/Box';
import SideBarDrawer from '../../components/SideBarDrawer/SideBarDrawer';
import ActiveGoalsBoard from '../../components/Goals/ActiveGoalsBoard/ActiveGoalsBoard';
import { Container, Paper } from '@mui/material';
import { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';
import GoalsHistoryTable from '../../components/Goals/GoalsHistoryTable/GoalsHistoryTable';

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
                    padding: '20px',
                    justifyContent: 'center',                    
                }}
            >
                <Container maxWidth='xl' sx={{ m: 4 }}>
                    <Paper
                        variant='elevation'
                        elevation={4}
                        sx={{
                            p: 2,
                            m: 2,
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <ActiveGoalsBoard username={userData?.username} />
                    </Paper>
                    <Paper
                        variant='elevation'
                        elevation={4}
                        sx={{
                            p: 2,
                            m: 2,
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <GoalsHistoryTable username={userData?.username} />
                    </Paper>
                </Container>
            </Box>
        </Box>
    );
};

export default MyGoals;
