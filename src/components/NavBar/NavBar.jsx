import { DarkMode, Home, WbSunny } from '@mui/icons-material';
import { Link, Switch, Avatar } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link as ReactRouterLink } from 'react-router-dom';
import { auth } from '../../firebase/firebase-config';
import MyAccountMenu from './../Menus/MyAccountMenu';

function ElevationScroll({ children }) {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const NavBar = ({ onThemeChange }) => {
    const [user] = useAuthState(auth);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <ElevationScroll>
                <AppBar sx={{ background: '#3a6b94' }}>
                    <Toolbar>
                        <Avatar as={ReactRouterLink} to={`/`} sx={{ mr: 2 }}>
                            <Home />
                        </Avatar>
                        <Typography variant='h6' sx={{ flexGrow: 1 }}>
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
                            <Box sx={{ ml: 2 }}>
                                <MyAccountMenu />
                            </Box>
                        ) : (
                            <Box sx={{ ml: 2 }}>
                                <Button
                                    // as={Link}
                                    href={`/login`}
                                    sx={{ mr: 1, textDecoration: 'none' }}
                                    variant='contained'
                                >
                                    Login
                                </Button>
                                <Button
                                    // as={Link}
                                    // to={`/register`}
                                    href={`/register`}
                                    sx={{ mr: 1, textDecoration: 'none' }}
                                    variant='contained'
                                >
                                    Register
                                </Button>
                            </Box>
                        )}
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Toolbar />
        </Box>
    );
};

export default NavBar;
