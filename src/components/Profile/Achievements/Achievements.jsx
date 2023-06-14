import {} from '@mui/icons-material';
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import achievementChecker from './helpers/achievementChecker';

import { PropTypes } from 'prop-types';

export const Achievements = ({ userData }) => {
    const achievements = achievementChecker(userData);

    return (
        <Box sx={{ p: 2 }} align='center'>
            <Typography component='div' mb={3} variant='h4'>
                Achievements
            </Typography>
            <Grid container spacing={2} align='center'>
                {achievements.map((card, index) => (
                    <Grid item xs={12} sm={6} md={5} lg={4} key={index}>
                        <Card
                            variant='elevation'
                            elevation={3}
                            sx={{ minHeight: '15px' }}
                        >
                            <CardContent>
                                {card.icon}
                                <Typography
                                    component='div'
                                    variant='h6'
                                    color={card.color}
                                >
                                    {card.title}
                                </Typography>
                                <Typography
                                    component='div'
                                    variant='body1'
                                    color={card.color}
                                >
                                    {card.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Achievements;

Achievements.propTypes = {
    userData: PropTypes.object,
};
