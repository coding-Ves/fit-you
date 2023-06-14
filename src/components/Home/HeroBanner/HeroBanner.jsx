import { Box, Typography, Button, IconButton, Paper } from '@mui/material';
import React from 'react';
import { HOME_HERO_IMAGE } from '../../../common/constants';
import { ArrowDownward } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import puzzleHero from '../../../img/Puzzle-Pattern-Hero.png';

const HeroBanner = () => {
    return (
        <Box
            sx={{
                backgroundImage: `url(${puzzleHero})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundBlendMode: 'overlay',
                backgroundColor: 'primary.main',

                width: '100%',
                height: '90vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundAttachment: 'fixed',
            }}
        >
            <Paper sx={{ p: 2, m: 4, borderRadius: '15px' }}>
                <Typography
                    color='inherit'
                    align='center'
                    variant='h2'
                    marked='center'
                    fontWeight='bold'
                >
                    Fit You
                </Typography>

                <Typography
                    color='inherit'
                    align='center'
                    variant='h5'
                    sx={{ mb: 4, mt: { xs: 2, sm: 5 } }}
                >
                    The app to fit your needs and help you get fit.
                </Typography>
            </Paper>
            <Button
                color='secondary'
                variant='contained'
                size='large'
                component={Link}
                to='/register'
                sx={{ minWidth: 200 }}
            >
                Register
            </Button>
            <Typography variant='body2' color='inherit' sx={{ mt: 2 }}>
                to start your journey...
            </Typography>

            <ArrowDownward
                sx={{
                    position: 'absolute',
                    bottom: '50px',
                    borderRadius: '50%',
                    border: '1px solid',
                }}
            />
        </Box>
    );
};

export default HeroBanner;
