import { Grid, Card, CardContent, Typography, Paper } from '@mui/material';
import {} from '@mui/icons-material';
import {
    EmojiEvents,
    Flag,
    SportsHandball,
    CheckCircle,
    ImportContacts,
    Face2,
    DirectionsRun,
    FollowTheSigns,
    WavingHand,
    AutoFixHigh,
    AutoAwesome,
    DonutLargeTwoTone,
} from '@mui/icons-material';
import achievementChecker from './helpers/achievementChecker';

export const Achievements = ({ userData }) => {
    const achievements = achievementChecker(userData);

    return (
        <Paper align='center'>
            <Typography mb={3} variant='h4'>
                Achievements
            </Typography>
            <Grid container spacing={2} align='center' fullWidth>
                {achievements.map((card, index) => (
                    <Grid item xs={6} sm={6} md={3} lg={2} key={index}>
                        <Card>
                            <CardContent>
                                {card.icon}
                                <Typography variant='h6' color={card.color}>
                                    {card.title}
                                </Typography>
                                <Typography variant='body1' color={card.color}>
                                    {card.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Paper>
    );
};

export default Achievements;
