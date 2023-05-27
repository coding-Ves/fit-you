import { Box, Typography, Button, IconButton } from '@mui/material';
import React from 'react';
import { homeHeroImage } from '../../../common/constants';
import { ArrowDownward } from '@mui/icons-material';

const HeroBanner = () => {
    return (
        <Box
            sx={{
                backgroundImage: `url(${homeHeroImage})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                width: '100%',
                height: '90vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundAttachment: 'fixed',
            }}
        >
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
                The app to fit all your needs and help you get fit.
            </Typography>
            <Button
                color='secondary'
                variant='contained'
                size='large'
                component='a'
                href='/register'
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
