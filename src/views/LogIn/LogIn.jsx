import { CssBaseline, Grid, Paper } from '@mui/material';
import { LOGIN_IMAGE } from '../../common/constants';

import LoginForm from '../../components/Authentication/LogInForm/LogInForm.jsx';

const LogIn = () => {
    return (
        <>
            <Grid container component='main' sx={{ height: '100vh' }}>
                <CssBaseline />

                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: `url(${LOGIN_IMAGE})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid
                    item
                    xs={12}
                    sm={8}
                    md={5}
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
