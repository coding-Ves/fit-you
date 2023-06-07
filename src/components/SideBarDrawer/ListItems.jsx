import {
    Calculate,
    DirectionsRun,
    FitnessCenter,
    LocalDining,
    SelfImprovement,
    Spa,
    SportsBasketball,
    WaterDrop,
} from '@mui/icons-material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import TrackChangesRoundedIcon from '@mui/icons-material/TrackChangesRounded';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';
import { Link } from 'react-router-dom';

export const mainListItems = (
    <>
        <ListItemButton component={Link} to='/dashboard'>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary='Dashboard' />
        </ListItemButton>
        <ListItemButton component={Link} to='/my-activity'>
            <ListItemIcon>
                <QueryStatsRoundedIcon />
            </ListItemIcon>
            <ListItemText primary='My Activity' />
        </ListItemButton>
        <ListItemButton component={Link} to='/my-goals'>
            <ListItemIcon>
                <TrackChangesRoundedIcon />
            </ListItemIcon>
            <ListItemText primary='My Goals' />
        </ListItemButton>
    </>
);

export const physicalListItems = (
    <>
        {/* <ListSubheader>Physical</ListSubheader> */}
        <ListItemButton component={Link} to='/search/fitness'>
            <ListItemIcon>
                <FitnessCenter />
            </ListItemIcon>
            <ListItemText primary='Fitness' />
        </ListItemButton>
        <ListItemButton component={Link} to='/search/sports'>
            <ListItemIcon>
                <SportsBasketball />
            </ListItemIcon>
            <ListItemText primary='Sports' />
        </ListItemButton>
        <ListItemButton component={Link} to='/search/cardio'>
            <ListItemIcon>
                <DirectionsRun />
            </ListItemIcon>
            <ListItemText primary='Cardio' />
        </ListItemButton>
    </>
);

export const socialListItems = (
    <>
        {/* <ListSubheader>Connect</ListSubheader> */}
        <ListItemButton component={Link} to='/friends'>
            <ListItemIcon>
                <GroupsRoundedIcon />
            </ListItemIcon>
            <ListItemText primary='Find Friends' />
        </ListItemButton>
    </>
);

export const wellnessListItems = (
    <>
        {/* <ListSubheader>Wellness</ListSubheader> */}
        <ListItemButton component={Link} to='/bmi'>
            <ListItemIcon>
                <Calculate />
            </ListItemIcon>
            <ListItemText primary='BMI' />
        </ListItemButton>
        <ListItemButton component={Link} to='/water'>
            <ListItemIcon>
                <WaterDrop />
            </ListItemIcon>
            <ListItemText primary='Water' />
        </ListItemButton>
        <ListItemButton component={Link} to='/diet'>
            <ListItemIcon>
                <LocalDining />
            </ListItemIcon>
            <ListItemText primary='Diet' />
        </ListItemButton>
    </>
);

export const mentalListItems = (
    <>
        {/* <ListSubheader>Mental Health</ListSubheader> */}
        <ListItemButton component={Link} to='/meditation'>
            <ListItemIcon>
                <SelfImprovement />
            </ListItemIcon>
            <ListItemText primary='Meditation' />
        </ListItemButton>
        <ListItemButton component={Link} to='/Yoga'>
            <ListItemIcon>
                <Spa />
            </ListItemIcon>
            <ListItemText primary='Yoga' />
        </ListItemButton>
    </>
);
