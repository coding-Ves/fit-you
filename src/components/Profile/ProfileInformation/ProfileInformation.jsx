import { Box, Grid } from '@mui/material';
import React from 'react';
import ProfileAvatar from '../ProfileAvatar/ProfileAvatar';
import ProfileDescription from '../ProfileDescription/ProfileDescription';

const ProfileInformation = ({ userData }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 2,
            }}
        >
            <Box spacing={2} component='div'>
                <Grid item xs={6} sm={4}>
                    <ProfileAvatar userData={userData} />
                </Grid>
                <Grid item xs={6} sm={8}>
                    <ProfileDescription userData={userData} />
                </Grid>
            </Box>
        </Box>
    );
};

export default ProfileInformation;
