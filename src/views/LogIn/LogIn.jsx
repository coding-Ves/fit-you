import { CssBaseline, Grid, Paper } from '@mui/material';
import PuzzlePattern from '../..//assets/images/Puzzle-Pattern-Hero.png';
import LoginForm from '../../components/Authentication/LogInForm/LogInForm.jsx';

const LogIn = () => {
    return (
        <>
            <Grid
                container
                component='main'
                sx={{
                    boxSizing: 'border-box',
                    height: '93vh',
                }}
            >
                <CssBaseline />

                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={5}
                    sx={{
                        height: '93vh',
                        backgroundImage: `url(${PuzzlePattern})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'fit',
                        backgroundPosition: 'center',
                        backgroundBlendMode: 'lighten',
                    }}
                />
                <Grid
                    item
                    xs={12}
                    sm={8}
                    md={7}
                    component={Paper}
                    elevation={6}
                    square
                >
                    <LoginForm />
                </Grid>
            </Grid>
        </>
    );
};

export default LogIn;
