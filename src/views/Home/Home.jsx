import { Grid } from '@mui/material';
import HeroBanner from '../../components/Home/HeroBanner/HeroBanner';
import HowItWorks from '../../components/Home/HowItWorks/HowItWorks';
import AboutSection from '../../components/Home/AboutSection/AboutSection';
import ProductFeatures from '../../components/Home/ProductFeatures/ProductFeatures';

const Home = () => {
    return (
        <Grid
            container
            direction='column'
            spacing={2}
            align='center'
            // style={{
            //     backgroundImage:
            //         "url('../../public/imgs/henry-co--odUkx8C2gg-unsplash.jpg')",
            // }}
            // sx={{
            //     backgroundPosition: 'center',
            //     backgroundSize: 'cover',
            //     width: '100%',
            // }}
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
