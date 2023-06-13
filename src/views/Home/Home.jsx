import { Grid } from '@mui/material';
import HeroBanner from '../../components/Home/HeroBanner/HeroBanner';
import HowItWorks from '../../components/Home/HowItWorks/HowItWorks';
import AboutSection from '../../components/Home/AboutSection/AboutSection';
import ProductFeatures from '../../components/Home/ProductFeatures/ProductFeatures';

import PuzzleImage from '../../img/Puzzle.png';

const Home = () => {
    return (
        <Grid
            container
            direction='column'
            spacing={2}
            align='center'
            sx={{
                backgroundColor: 'theme.palette.primary.contrastText',
                mb: 2,
                // backgroundBlendMode: 'difference',
                // backgroundImage: `url(${PuzzleImage})`,
                // backgroundSize: '75%',
                // backgroundPosition: 'center',
                // backgroundAttachment: 'fixed',
            }}
        >
            <Grid item xs={12} sm={6}>
                <HeroBanner />
            </Grid>
            <Grid item xs={12} sm={6}>
                <ProductFeatures />
            </Grid>
            <Grid item xs={12} sm={6}>
                <HowItWorks />
            </Grid>
            <Grid item xs={12} sm={6}>
                <AboutSection />
            </Grid>
        </Grid>
    );
};

export default Home;
