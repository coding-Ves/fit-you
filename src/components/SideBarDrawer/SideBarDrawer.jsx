import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { DRAWER_WIDTH_OPEN, DRAWER_WIDTH_CLOSED } from '../../common/constants';
import {
    mainListItems,
    physicalListItems,
    wellnessListItems,
    socialListItems,
} from './ListItems';
import { Box } from '@mui/material';

import PuzzlePatternSideBar from '../../assets/images/Puzzle-SideBar-1.png';

const StyledDrawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    '& .MuiDrawer-paper': {
        position: 'fixed',
        top: 'auto',
        whiteSpace: 'nowrap',
        width: DRAWER_WIDTH_OPEN,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        backgroundImage: `url(${PuzzlePatternSideBar})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'normal',
        boxSizing: 'border-box',
        ...(!open && {
            overflowX: 'hidden',
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            width: theme.spacing(7),
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(9),
            },
        }),
    },
}));

const SideBarDrawer = () => {
    const [open, setOpen] = useState(true);
    const marginLeft = open ? DRAWER_WIDTH_OPEN : DRAWER_WIDTH_CLOSED;

    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <StyledDrawer
            variant='permanent'
            open={open}
            sx={{
                ml: { marginLeft },
            }}

            // if the sidebar is open, then the main content should have a margin
            // if the sidebar is closed, then the main content should not have a margin
        >
            <Toolbar
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <IconButton onClick={toggleDrawer}>
                    <ChevronLeftIcon />
                </IconButton>
            </Toolbar>
            <Divider />
            <List component='nav'>
                {mainListItems}
                <Divider sx={{ my: 1 }} />
                {physicalListItems}
                <Divider sx={{ my: 1 }} />
                {wellnessListItems}
                <Divider sx={{ my: 1 }} />
                {socialListItems}
            </List>
        </StyledDrawer>
    );
};

export default SideBarDrawer;
