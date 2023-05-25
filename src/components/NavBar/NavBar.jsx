import { DarkMode, Home, WbSunny } from '@mui/icons-material';
import { Switch, Link } from '@mui/material';
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
                    <Link
                        as={ReactRouterLink}
                        to={`/`}
                        focusRipple='none'
                        sx={{ mr: 2 }}
                    >
                        <Home />
                    </Link>
                    <Typography
                        variant='h6'
                        component='div'
                        sx={{ flexGrow: 1 }}
                    >
                        Fit You
                    </Typography>
                    <Switch
                        sx={{
                            color: '#fff',
                            p: 0,
                            borderRadius: 10,
                        }}
                        onChange={onThemeChange}
                        icon={<WbSunny />}
                        checkedIcon={<DarkMode />}
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
                                sx={{ mr: 1, textDecoration: 'none' }}
                                variant='contained'
                            >
                                Login
                            </Button>
                            <Button
                                as={ReactRouterLink}
                                to={`/register`}
                                sx={{ mr: 1, textDecoration: 'none' }}
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
