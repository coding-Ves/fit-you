import * as React from 'react';

import {
    Box,
    Button,
    Typography,
    Container,
    Grid,
    Card,
    Avatar,
} from '@mui/material';
import { BatteryCharging20TwoTone } from '@mui/icons-material';

const item = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: '200px;',
    minHeight: '200px;',
    p: 2,
};

const avatars = {
    height: '100px',
    width: '100px',
};

const AboutSection = () => {
    return (
        <Box>
            <Typography variant='h4'>Meet the team</Typography>

            <Box
                component='section'
                sx={{
                    display: 'flex',
                    overflow: 'hidden',
                    justifyContent: 'center',
                    // bgcolor: 'secondary.light',
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
                        <Grid item xs={12} md={4}>
                            <Card sx={item}>
                                <Avatar sx={avatars}>Bibi</Avatar>
                                <Typography variant='h5' sx={{ my: 5 }}>
                                    Person
                                </Typography>
                                <Typography variant='h6'>
                                    Description
                                </Typography>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Card sx={item}>
                                <Avatar sx={avatars}>Imad</Avatar>
                                <Typography variant='h5' sx={{ my: 5 }}>
                                    Person
                                </Typography>
                                <Typography variant='h6'>
                                    Description
                                </Typography>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Card sx={item}>
                                <Avatar sx={avatars}>Ves</Avatar>
                                <Typography variant='h5' sx={{ my: 5 }}>
                                    Person
                                </Typography>
                                <Typography variant='h6'>
                                    Description
                                </Typography>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default AboutSection;
