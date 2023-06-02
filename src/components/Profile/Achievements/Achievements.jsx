import { Grid, Card, CardContent, Typography } from '@mui/material';
import { DonutLargeTwoTone } from '@mui/icons-material';

// When properly implemented this object will hold the icon of the achievement, we'll do a check against the userData object and render
// the different items accordingly

const cardsData = [
    {
        title: 'Achievement',
        description: 'Achievement description',
    },
    {
        title: 'Achievement',
        description: 'Achievement description',
    },
    {
        title: 'Achievement',
        description: 'Achievement description',
    },
    {
        title: 'Achievement',
        description: 'Achievement description',
    },
    {
        title: 'Achievement',
        description: 'Achievement description',
    },
    {
        title: 'Achievement',
        description: 'Achievement description',
    },
    {
        title: 'Achievement',
        description: 'Achievement description',
    },
    {
        title: 'Achievement',
        description: 'Achievement description',
    },
    {
        title: 'Achievement',
        description: 'Achievement description',
    },
    {
        title: 'Achievement',
        description: 'Achievement description',
    },
    {
        title: 'Achievement',
        description: 'Achievement description',
    },
    {
        title: 'Achievement',
        description: 'Achievement description',
    },
];

export const Achievements = ({ userData }) => {
    return (
        <Card align='center'>
            <Typography mb={3} variant='h4'>
                Achievements
            </Typography>
            <Grid container spacing={2} align='center' fullWidth>
                {cardsData.map((card, index) => (
                    <Grid item xs={6} sm={6} md={3} lg={2} key={index}>
                        <Card>
                            <CardContent>
                                <DonutLargeTwoTone size={32} />
                                <Typography variant='h6'>
                                    {card.title}
                                </Typography>
                                <Typography variant='body1'>
                                    {card.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Card>
    );
};

export default Achievements;
