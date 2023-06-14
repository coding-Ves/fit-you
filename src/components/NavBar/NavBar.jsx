import { DarkMode, Home, WbSunny } from '@mui/icons-material';
import { Avatar, Switch } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase-config';
import MyAccountMenu from './../Menus/MyAccountMenu';

import { PropTypes } from 'prop-types';
import Logo1 from '../../assets/Logo-v1.png';

// attribution for logo: <a href="https://www.flaticon.com/free-icons/heart" title="heart icons">Heart icons created by Freepik - Flaticon</a>
// <a href="https://www.flaticon.com/free-icons/autism" title="autism icons">Autism icons created by Freepik - Flaticon</a>
//<a href="https://www.flaticon.com/free-icons/hobbies-and-free-time" title="hobbies and free time icons">Hobbies and free time icons created by Erix - Flaticon</a>
// <a href="https://www.flaticon.com/free-icons/puzzle-piece" title="puzzle piece icons">Puzzle piece icons created by kerismaker - Flaticon</a>

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
};

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
                <AppBar sx={{ backgroundColor: '#175084' }}>
                    <Toolbar>
                        <Avatar
                            variant='rounded'
                            src={Logo1}
                            component={Link}
                            to={'/'}
                            sx={{
                                mr: 2,
                                backgroundColor: 'white',

                                height: '40px',
                                width: '40px',
                            }}
                        >
                            <Home />
                        </Avatar>
                        <Typography variant='h4' sx={{ flexGrow: 1 }}>
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
                                    component={Link}
                                    to={'/login'}
                                    sx={{ mr: 1, textDecoration: 'none' }}
                                    variant='contained'
                                >
                                    Login
                                </Button>
                                <Button
                                    component={Link}
                                    to={'/register'}
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
