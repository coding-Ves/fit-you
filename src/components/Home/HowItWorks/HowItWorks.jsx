import * as React from 'react';
import {
    Box,
    Grid,
    Container,
    Button,
    Typography,
    Card,
    Avatar,
} from '@mui/material';
import { BatteryCharging20TwoTone } from '@mui/icons-material';

const item = {
    minHeight: 200,
    minWidth: 200,
    px: 5,
    p: 2,
};
const image = {
    height: 100,
    my: 4,
};

const HowItWorks = () => {
    return (
        <Box
            component='section'
            sx={{
                display: 'flex',
                bgcolor: 'secondary.light',
                overflow: 'hidden',
            }}
        >
            <Container
                sx={{
                    mt: 10,
                    mb: 15,
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography
                    variant='h4'
                    marked='center'
                    component='h2'
                    sx={{ mb: 14 }}
                >
                    How it works
                </Typography>
                <div>
                    <Grid container spacing={5}>
                        <Grid item xs={12} md={4} sx={item}>
                            <Card>
                                <Box
                                    component='img'
                                    src='https://images.unsplash.com/photo-1571008887538-b36bb32f4571'
                                    alt='suitcase'
                                    sx={image}
                                />
                                <Box>1.</Box>

                                <Typography variant='h5' align='center'>
                                    Register and setup your account.
                                </Typography>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4} sx={item}>
                            <Card>
                                <Box
                                    component='img'
                                    src='https://images.unsplash.com/photo-1571008887538-b36bb32f4571'
                                    alt='suitcase'
                                    sx={image}
                                />
                                <Box>2.</Box>

                                <Typography variant='h5' align='center'>
                                    Set up your goals.
                                </Typography>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4} sx={item}>
                            <Card>
                                <Box
                                    component='img'
                                    src='https://images.unsplash.com/photo-1571008887538-b36bb32f4571'
                                    alt='suitcase'
                                    sx={image}
                                />
                                <Box>3.</Box>
                                <Typography variant='h5' align='center'>
                                    Log activities to track your progress.
                                </Typography>
                            </Card>
                        </Grid>
                    </Grid>
                </div>
                <Button
                    color='secondary'
                    size='large'
                    variant='contained'
                    component='a'
                    sx={{ mt: 8 }}
                >
                    Get started
                </Button>
            </Container>
        </Box>
    );
};

export default HowItWorks;
