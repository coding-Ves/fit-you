import { Box, Container, Grid, Paper } from '@mui/material';
import { useContext, useEffect, useState } from 'react';

import { BMIGraphSection } from '../../components/BMI/BMIGraphSection';
import HealthInfo from '../../components/Profile/ProfileDescription/HealthInfo/HealthInfo';
import SideBarDrawer from '../../components/SideBarDrawer/SideBarDrawer';
import AuthContext from '../../contexts/AuthContext';

const BMI = () => {
    const { userData } = useContext(AuthContext);
    const [user, setUser] = useState(userData);

    useEffect(() => {
        setUser(userData);
    }, [userData]);

    return (
        <>
            <Paper
                variant='elevation'
                elevation={2}
                sx={{ display: 'flex', justifyContent: 'center' }}
            >
                <SideBarDrawer />
                <Box>
                    <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
                        <Paper
                            variant='elevation'
                            elevation={5}
                            sx={{
                                p: 2,
                                display: 'flex',
                            }}
                        >
                            <BMIGraphSection userData={user} />
                            <Paper variant='elevation' elevation={2} sx={{ p: 1, m: 1 }}>
                                <HealthInfo userData={user} />
                            </Paper>
                        </Paper>
                    </Container>
                </Box>
            </Paper>
        </>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export default BMI;
