import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Home } from '@mui/icons-material';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Switch } from '@mui/material';
import { WbSunny, DarkMode } from '@mui/icons-material';

const NavBar = ({ onThemeChange }) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar sx={{ background: '#284A67' }} position='static'>
                <Toolbar>
                    <IconButton
                        size='large'
                        edge='start'
                        color='inherit'
                        aria-label='home'
                        as={ReactRouterLink}
                        to={`/`}
                        sx={{ mr: 2 }}
                    >
                        <Home />
                    </IconButton>

                    <Typography
                        variant='h6'
                        component='div'
                        sx={{ flexGrow: 1 }}
                    >
                        Fit You
                    </Typography>
                    <Switch
                        onChange={onThemeChange}
                        icon={<WbSunny />}
                        checkedIcon={
                            <DarkMode
                                sx={{
                                    color: '#fff',
                                }}
                            />
                        }
                        sx={{ pb: 1 }}
                    />
                    <Button
                        as={ReactRouterLink}
                        to={`/login`}
                        sx={{ mr: 2, textDecoration: 'none' }}
                        variant='contained'
                    >
                        Login
                    </Button>
                    <Button
                        as={ReactRouterLink}
                        to={`/register`}
                        sx={{ mr: 2, textDecoration: 'none' }}
                        variant='contained'
                    >
                        Register
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default NavBar;
