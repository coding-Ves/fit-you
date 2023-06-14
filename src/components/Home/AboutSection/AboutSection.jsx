import {
    Avatar,
    Box,
    Card,
    Container,
    Grid,
    Typography
} from '@mui/material';
import puzzlePiece3 from '../../..//assets/images/Puzzle-Piece-3.png';

const item = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: '200px;',
    minHeight: '200px;',
    p: 2,
};

const avatars = {
    height: '100px',
    width: '100px',
};

const AboutSection = () => {
    return (
        <Box
            sx={{
                width: '90%',
                backgroundColor: 'primary.main',
                backgroundImage: `url(${puzzlePiece3})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '200px',
                backgroundPosition: 'right 80% bottom 90%',
                backgroundBlendMode: 'overlay',
                borderRadius: '10px',
                pt: 5,
                mt: 15,
                mt: 10,
            }}
        >
            <Typography variant='h4'>Meet Studio Lucky 13</Typography>

            <Box
                component='section'
                sx={{
                    display: 'flex',
                    overflow: 'hidden',
                    justifyContent: 'center',
                    // bgcolor: 'secondary.light',
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
                            <Card sx={item}>
                                <Avatar sx={avatars}>Bibi</Avatar>
                                <Typography variant='h5' sx={{ my: 5 }}>
                                    Bilyana
                                </Typography>
                                <Typography variant='h6'>CEO</Typography>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Card sx={item}>
                                <Avatar sx={avatars}>Imad</Avatar>
                                <Typography variant='h5' sx={{ my: 5 }}>
                                    Imad
                                </Typography>
                                <Typography variant='h6'>CTO</Typography>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Card sx={item}>
                                <Avatar sx={avatars}>Ves</Avatar>
                                <Typography variant='h5' sx={{ my: 5 }}>
                                    Veselin
                                </Typography>
                                <Typography variant='h6'>Janitor</Typography>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default AboutSection;
