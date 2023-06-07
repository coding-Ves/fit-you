import * as React from 'react';
import {
    Box,
    Button,
    Typography,
    Container,
    Grid,
    Card,
    Avatar,
    Zoom,
    Slide,
    Grow,
    Paper,
} from '@mui/material';
import {
    BatteryCharging20TwoTone,
    ChairAlt,
    Login,
    RocketLaunch,
    Search,
    TagRounded,
} from '@mui/icons-material';

import { HOME_HERO_IMAGE } from './../../../common/constants';

const item = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: '250px',
    minHeight: '300px',
    p: 2,
};

export const HowItWorks = () => {
    return (
        <Box
            id='product-features'

            // sx={{
            //     backgroundImage: `url(${HOME_HERO_IMAGE})`,
            //     backgroundPosition: 'center',
            //     backgroundSize: 'cover',
            //     width: '100%',
            // }}
        >
            <Typography sx={{ p: 2, mt: 2 }} variant='h4'>
                Here's how it works
            </Typography>
            <Typography sx={{ p: 2, mt: 2 }} variant='h6'>
                Don't worry if you need a refresh, just click help once you're
                in the app.
            </Typography>
            <Box
                component='section'
                sx={{
                    display: 'flex',
                    overflow: 'hidden',
                    justifyContent: 'center',
                }}
            >
                <Container
                    sx={{
                        mt: 5,
                        mb: 5,
                        display: 'flex',
                        position: 'relative',
                    }}
                >
                    <Grid container spacing={5}>
                        <Grid item xs={12} md={3}>
                            <Box sx={item}>
                                <Login
                                    sx={{
                                        width: '100px',
                                        height: '100px',
                                        backgroundColor: 'transparent',
                                    }}
                                />

                                <Typography variant='h6' sx={{ my: 2 }}>
                                    Register for Fit You
                                </Typography>
                                <Typography variant='h7'>
                                    Complete the registration form to get
                                    started.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Box sx={item}>
                                <TagRounded
                                    sx={{
                                        width: '100px',
                                        height: '100px',
                                        backgroundColor: 'transparent',
                                    }}
                                />
                                <Typography variant='h6' sx={{ my: 2 }}>
                                    Set up your first goal
                                </Typography>
                                <Typography variant='h7'>
                                    Pick from Cardio, Fitness, Sports and other
                                    goals.
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={3}>
                            <Box sx={item}>
                                <Search
                                    sx={{
                                        width: '100px',
                                        height: '100px',
                                        backgroundColor: 'transparent',
                                    }}
                                />
                                <Typography variant='h6' sx={{ my: 2 }}>
                                    Find and add activities
                                </Typography>
                                <Typography variant='h7'>
                                    Search for the activity you complete it and
                                    add it to your account, tying it to a goal
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Box sx={item}>
                                <RocketLaunch
                                    sx={{
                                        width: '100px',
                                        height: '100px',
                                        backgroundColor: 'transparent',
                                    }}
                                />
                                <Typography variant='h6' sx={{ my: 2 }}>
                                    Track your progress
                                </Typography>
                                <Typography variant='h7'>
                                    By using our dashboard and earning
                                    achievements on your account.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default HowItWorks;
