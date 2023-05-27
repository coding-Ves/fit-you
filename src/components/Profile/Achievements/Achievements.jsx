import { Grid, Card, CardContent, Typography } from '@mui/material';
import { StreetviewTwoTone } from '@mui/icons-material';
import { DonutLargeTwoTone } from '@mui/icons-material';

// When properly implemented this object will hold the icon of the achievement, we'll do a check against the userData object and render
// the different items accordingly

const cardsData = [
    {
        title: 'Start your journey',
        description: 'You created your account!',
    },
    {
        title: 'Set a goal',
        description: 'Yours first of many!',
    },
    {
        title: 'Finish an activity',
        description: 'You go girl!',
    },
    {
        title: 'Make a friend',
        description: 'If only it were that easy',
    },
    {
        title: 'Discover fire',
        description: 'Advance humanity!',
    },
    {
        title: 'Finish Telerik Academy',
        description: 'Almost there!',
    },
    {
        title: 'Compliment Imad',
        description: 'He a good man!',
    },
    {
        title: 'Compliment Bibi',
        description: 'She a fancy lady!',
    },
    {
        title: 'Grow a three',
        description: 'It took so long!',
    },
    {
        title: 'Find a job',
        description: 'Okay, mom!',
    },
    {
        title: 'Write code',
        description: 'I already am!',
    },
    {
        title: 'Build a house',
        description: 'How?!',
    },
];

export const Achievements = () => {
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
