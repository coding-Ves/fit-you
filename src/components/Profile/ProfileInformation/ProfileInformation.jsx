import { Card, CardContent, Grid, Paper } from '@mui/material';
import React from 'react';
import ProfileAvatar from '../ProfileAvatar/ProfileAvatar';
import ProfileDescription from '../ProfileDescription/ProfileDescription';

const ProfileInformation = ({ userData }) => {
    return (
        <Card>
            <CardContent
                sx={{
                    display: 'flex',
                    justifyContent: 'start',
                    width: '100%',
                }}
            >
                <Paper
                    sx={{
                        p: 2,
                        height: '100%',
                    }}
                >
                    <Grid container spacing={2}>
                        <Grid item xs={6} sm={4}>
                            <ProfileAvatar userData={userData} />
                        </Grid>
                        <Grid item xs={6} sm={8}>
                            <ProfileDescription userData={userData} />
                        </Grid>
                    </Grid>
                </Paper>
            </CardContent>
        </Card>
    );
};

export default ProfileInformation;
