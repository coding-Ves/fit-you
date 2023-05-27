import BarChartIcon from '@mui/icons-material/BarChart';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FitnessCenterRoundedIcon from '@mui/icons-material/FitnessCenterRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import KitchenRoundedIcon from '@mui/icons-material/KitchenRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import TrackChangesRoundedIcon from '@mui/icons-material/TrackChangesRounded';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import * as React from 'react';
import { Link } from 'react-router-dom';

export const mainListItems = (
    <React.Fragment>
        <ListItemButton component={Link} to="/dashboard">
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton component={Link} to="/my-activity">
            <ListItemIcon>
                <QueryStatsRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="My Activity" />
        </ListItemButton>
        <ListItemButton component={Link} to="/my-goals">
            <ListItemIcon>
                <TrackChangesRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="My Goals" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <KitchenRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Diet" />
        </ListItemButton>

        <ListItemButton>
            <ListItemIcon>
                <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="BMI" />
        </ListItemButton>
    </React.Fragment>
);

export const secondaryListItems = (
    <React.Fragment>
        <ListSubheader component="div" inset>
            Social
        </ListSubheader>
        <ListItemButton>
            <ListItemIcon>
                <GroupsRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Friends" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <FitnessCenterRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Shared activities" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <TrackChangesRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Shared goals" />
        </ListItemButton>
    </React.Fragment>
);