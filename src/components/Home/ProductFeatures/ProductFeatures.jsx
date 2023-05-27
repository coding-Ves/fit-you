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

const ProductFeatures = () => {
    return (
        <Box>
            <Typography variant='h4'>Product Features</Typography>

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
                                <Avatar>
                                    <BatteryCharging20TwoTone mt='30px' />
                                </Avatar>
                                <Typography variant='h5' sx={{ my: 5 }}>
                                    Set Goals
                                </Typography>
                                <Typography variant='h6'>
                                    To improve your health
                                </Typography>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Card sx={item}>
                                <Avatar>
                                    <BatteryCharging20TwoTone mt='30px' />
                                </Avatar>
                                <Typography variant='h5' sx={{ my: 5 }}>
                                    Track Progress
                                </Typography>
                                <Typography variant='h6'>
                                    To see how you are doing
                                </Typography>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Card sx={item}>
                                <Avatar>
                                    <BatteryCharging20TwoTone mt='30px' />
                                </Avatar>
                                <Typography variant='h5' sx={{ my: 5 }}>
                                    Connect to Friends
                                </Typography>
                                <Typography variant='h6'>
                                    To stay motivated
                                </Typography>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default ProductFeatures;
