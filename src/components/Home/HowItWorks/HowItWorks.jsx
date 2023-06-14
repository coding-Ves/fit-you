import { Login, RocketLaunch, Search, TagRounded } from '@mui/icons-material';
import {
    Box,
    Container,
    Grid,
    Paper,
    Typography
} from '@mui/material';
import puzzlePiece1 from '../../../assets/images/Puzzle-Piece-1.png';

const item = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: '270px',
    minHeight: '300px',
    p: 2,
};

export const HowItWorks = () => {
    return (
        <Box
            id='product-features'
            sx={{
                backgroundColor: 'primary.main',
                mt: 15,
                width: '90%',
                backgroundImage: `url(${puzzlePiece1})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '500px',
                backgroundPosition: 'start',
                backgroundBlendMode: 'lighten',
                borderRadius: '10px',
            }}
        >
            <Typography sx={{ p: 2, mt: 2 }} variant='h4'>
                Here&apos;s how it works
            </Typography>
            <Typography sx={{ p: 2, mt: 2 }} variant='h6'>
                Don&apos;t worry if you need a refresh, just click help once you&apos;re
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
                            <Paper>
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
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Paper>
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
                                        Pick from Cardio, Fitness, Sports and
                                        other goals.
                                    </Typography>
                                </Box>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} md={3}>
                            <Paper>
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
                                        Search for the activity you complete it
                                        and add it to your account, tying it to
                                        a goal
                                    </Typography>
                                </Box>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Paper>
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
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default HowItWorks;
