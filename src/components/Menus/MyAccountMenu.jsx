import { MonitorHeart, People } from '@mui/icons-material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Logout from '@mui/icons-material/Logout';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import { Link, useNavigate } from 'react-router-dom';
import { logoutUser } from '../../firebase/services/auth.service';
import { TrackChangesOutlined } from '@mui/icons-material';
import { useContext, useState } from 'react';
import AuthContext from '../../contexts/AuthContext';

const MyAccountMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const { userData } = useContext(AuthContext);

    const open = Boolean(anchorEl);
    const navigate = useNavigate();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleLogout = () => {
        logoutUser();
        navigate('/login');
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    textAlign: 'center',
                }}
            >
                <Tooltip title='Account settings'>
                    <IconButton
                        onClick={handleClick}
                        size='small'
                        sx={{ ml: 2 }}
                    >
                        <Avatar
                            variant='rounded'
                            sx={{ width: 40, height: 40 }}
                            src={userData?.avatarURL}
                            alt={userData?.username}
                        ></Avatar>
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id='account-menu'
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem
                    onClick={handleClose}
                    component={Link}
                    to={`/profile/${userData?.username}`}
                    style={{ color: 'inherit' }}
                >
                    <Avatar
                        src={userData?.avatarURL}
                        alt={userData?.username}
                    />{' '}
                    My account
                </MenuItem>
                <Divider />
                <MenuItem
                    component={Link}
                    onClick={handleClose}
                    to={'/dashboard'}
                    style={{ color: 'inherit' }}
                >
                    <ListItemIcon>
                        <DashboardIcon fontSize='small' />
                    </ListItemIcon>
                    Dashboard
                </MenuItem>
                <MenuItem
                    onClick={handleClose}
                    component={Link}
                    to={'/my-activity'}
                    style={{ color: 'inherit' }}
                >
                    <ListItemIcon>
                        <MonitorHeart fontSize='small' />
                    </ListItemIcon>
                    My Activity
                </MenuItem>
                <MenuItem
                    onClick={handleClose}
                    component={Link}
                    to={'/my-goals'}
                    style={{ color: 'inherit' }}
                >
                    <ListItemIcon>
                        <TrackChangesOutlined fontSize='small' />
                    </ListItemIcon>
                    My Goals
                </MenuItem>
                <Divider />
                <MenuItem
                    onClick={handleClose}
                    component={Link}
                    to={'/social'}
                    style={{ color: 'inherit' }}
                >
                    <ListItemIcon>
                        <People fontSize='small' />
                    </ListItemIcon>
                    Friends
                </MenuItem>

                <Divider />
                <MenuItem onClick={handleLogout}>
                    <ListItemIcon>
                        <Logout fontSize='small' />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </>
    );
};

export default MyAccountMenu;
