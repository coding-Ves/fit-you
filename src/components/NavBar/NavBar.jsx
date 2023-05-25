import { DarkMode, Home, WbSunny } from '@mui/icons-material';
import { Switch } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link as ReactRouterLink } from 'react-router-dom';
import { auth } from '../../firebase/firebase-config';
import MyAccountMenu from './../Menus/MyAccountMenu';

const NavBar = ({ onThemeChange }) => {
    const [user] = useAuthState(auth);

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

                    {user ? (
                        <Box>
                            <MyAccountMenu />
                        </Box>
                    ) : (
                        <Box>
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
                        </Box>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default NavBar;
