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
import { BatteryCharging20TwoTone } from '@mui/icons-material';

import { HOME_HERO_IMAGE } from './../../../common/constants';

import puzzlePiece1 from '../../../img//Puzzle-Piece-1.png';
import puzzlePiece2 from '../../../img//Puzzle-Piece-2.png';
import puzzlePiece3 from '../../../img//Puzzle-Piece-3.png';

const item = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: '250px',
    minHeight: '300px',
    p: 2,
};

const ProductFeatures = () => {
    const [visible, setVisible] = React.useState(false);

    const handleScroll = () => {
        const windowHeight = window.innerHeight;
        const { top } = document
            .querySelector('#product-features')
            .getBoundingClientRect();
        const isVisible = top < windowHeight - 100; // Adjust the threshold as needed

        setVisible(isVisible);
    };

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check visibility on initial mount

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Box
            id='product-features'
            sx={{
                width: '90%',
                backgroundColor: 'primary.main',
                backgroundImage: `url(${puzzlePiece2})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '250px',
                backgroundPosition: 'right',
                backgroundBlendMode: 'overlay',
                borderRadius: '10px',
            }}
        >
            <Box
                sx={{
                    mt: 15,
                }}
            >
                <Typography
                    sx={{
                        mt: 2,
                        pt: 2,
                    }}
                    variant='h4'
                >
                    Product Features
                </Typography>
                <Typography sx={{ p: 2, mt: 2 }} variant='h6'>
                    Fit me is a Fitness Tracking Application designed to fit
                    your specific needs. It's a toolbox that helps you keep all
                    of your health information in one place, neat and organized.
                </Typography>
            </Box>
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
                        <Grid item xs={12} md={4}>
                            <Slide
                                in={visible}
                                style={{
                                    transitionDelay: visible ? '300ms' : '0ms',
                                }}
                                direction='left'
                            >
                                <Card
                                    sx={item}
                                    style={{
                                        backgroundImage: `url(${puzzlePiece1})`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: '50px',
                                        backgroundPosition: 'center',
                                    }}
                                >
                                    <Avatar
                                        src='https://images.unsplash.com/photo-1563705883268-eb58ab6f505d'
                                        variant='rounded'
                                        sx={{
                                            width: '100%',
                                            height: '100px',
                                        }}
                                    ></Avatar>
                                    <Typography
                                        variant='h6'
                                        sx={{ my: 2, mt: 9 }}
                                    >
                                        Set Goals
                                    </Typography>
                                    <Typography variant='h7'>
                                        The right goals can help you reach your
                                        full potential. We offer different types
                                        of goals to help you stay on track.
                                    </Typography>
                                </Card>
                            </Slide>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Slide
                                in={visible}
                                style={{
                                    transitionDelay: visible ? '500ms' : '0ms',
                                }}
                                direction='left'
                            >
                                <Card
                                    sx={item}
                                    style={{
                                        backgroundImage: `url(${puzzlePiece2})`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: '50px',
                                        backgroundPosition: 'center',
                                    }}
                                >
                                    <Avatar
                                        src='https://images.unsplash.com/photo-1563705883268-eb58ab6f505d'
                                        variant='rounded'
                                        sx={{
                                            width: '100%',
                                            height: '100px',
                                        }}
                                    ></Avatar>
                                    <Typography
                                        variant='h6'
                                        sx={{ my: 2, mt: 9 }}
                                    >
                                        Track Activity
                                    </Typography>
                                    <Typography variant='h7'>
                                        Each activity you complete can be
                                        assigned to an active goal, so you can
                                        see your progress.
                                    </Typography>
                                </Card>
                            </Slide>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Slide
                                in={visible}
                                style={{
                                    transitionDelay: visible ? '700ms' : '0ms',
                                }}
                                direction='left'
                            >
                                <Card
                                    sx={item}
                                    style={{
                                        backgroundImage: `url(${puzzlePiece3})`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: '50px',
                                        backgroundPosition: 'center',
                                    }}
                                >
                                    <Avatar
                                        src='https://images.unsplash.com/photo-1563705883268-eb58ab6f505d'
                                        variant='rounded'
                                        sx={{
                                            width: '100%',
                                            height: '100px',
                                        }}
                                    ></Avatar>
                                    <Typography
                                        variant='h6'
                                        sx={{ my: 2, mt: 9 }}
                                    >
                                        Learn and Improve
                                    </Typography>
                                    <Typography variant='h7'>
                                        We offer a variety of information on the
                                        different types of activities, so you
                                        can learn how to improve.
                                    </Typography>
                                </Card>
                            </Slide>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default ProductFeatures;
