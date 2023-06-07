import { Box, Paper } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';

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
        <Box variant='elevation' elevation={2} sx={{ display: 'flex' }}>
            <SideBarDrawer />
            <Paper variant='elevation' elevation={2} sx={{ p: 1, m: 1 }}>
                <BMIGraphSection userData={user} />
            </Paper>
            <Paper variant='elevation' elevation={2} sx={{ p: 1, m: 1 }}>
                <HealthInfo userData={user} />
            </Paper>
        </Box>
    );
};

export default BMI;
