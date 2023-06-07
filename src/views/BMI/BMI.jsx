import { Box, Container, Grid, Paper, TextField } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';

import SideBarDrawer from '../../components/SideBarDrawer/SideBarDrawer';
import HealthInfo from '../../components/Profile/ProfileDescription/HealthInfo/HealthInfo';
import AuthContext from '../../contexts/AuthContext';
import BMIGraph from '../../components/BMI/BMIGraph';
import { BMIGraphSection } from '../../components/BMI/BMIGraphSection';

const BMI = () => {
    const { userData } = useContext(AuthContext);
    const [user, setUser] = useState(userData);

    useEffect(() => {
        setUser(userData);
    }, [userData]);

    return (
        <Box sx={{ display: 'flex' }}>
            <SideBarDrawer />
            <Paper sx={{ p: 1, m: 1 }}>
                <BMIGraphSection userData={user} />
            </Paper>
            <Paper sx={{ p: 1, m: 1 }}>
                <HealthInfo userData={user} />
            </Paper>
        </Box>
    );
};

export default BMI;
