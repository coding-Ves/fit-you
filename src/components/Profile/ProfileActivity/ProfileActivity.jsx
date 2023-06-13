import * as React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab,  Box, Paper } from '@mui/material';

import Achievements from '../Achievements/Achievements';
import { useContext } from 'react';

import AuthContext from './../../../contexts/AuthContext';
import FollowMain from '../Follow/FollowMain';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role='tabpanel'
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export const ProfileActivity = ({ userData: userProfileData }) => {
    const { userData } = useContext(AuthContext);
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Paper variant='elevation' elevation={1} sx={{ p: 2, width: '100%' }}>
            <Box
                sx={{
                    borderBottom: 1,
                    borderColor: 'divider',
                }}
            >
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label='account information tabs'
                    variant='fullWidth'
                    scrollButtons
                    allowScrollButtonsMobile
                >
                    <Tab label='Achievements' {...a11yProps(0)} />
                    <Tab label='Friends' {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <Achievements userData={userProfileData} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <FollowMain userData={userProfileData} />
            </TabPanel>
        </Paper>
    );
};

export default ProfileActivity;
