import React from 'react';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import FollowUser from './FollowUsers';
import { useState } from 'react';

const FollowMain = ({ userData }) => {
    const hasFollowers =
        userData?.followers && Object.keys(userData?.followers).length > 0;
    const hasFollowing =
        userData?.following && Object.keys(userData?.following).length > 0;

    return (
        <Card>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Typography variant='h5'>Followers</Typography>
                        {hasFollowers ? (
                            <FollowUser followUsers={userData?.followers} />
                        ) : (
                            <Typography variant='h6'>No followers</Typography>
                        )}
                    </Grid>

                    <Grid item xs={6} sx={{ backgroundColor: '#f9f9f9' }}>
                        <Typography variant='h5'>Following</Typography>
                        {hasFollowing ? (
                            <FollowUser followUsers={userData?.following} />
                        ) : (
                            <Typography variant='h6'>
                                Following No one
                            </Typography>
                        )}
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default FollowMain;
