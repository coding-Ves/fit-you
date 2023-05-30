import * as React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, Typography, Box, Card } from '@mui/material';

import AccountInfo from './AccountInfo/AccountInfo';
import HealthInfo from './HealthInfo/HealthInfo';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Box
            role='tabpanel'
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </Box>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export const ProfileDescription = ({ userData }) => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Card sx={{ p: 2, width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label='account information tabs'
                    variant='scrollable'
                    scrollButtons
                    allowScrollButtonsMobile
                >
                    <Tab label='Account' {...a11yProps(0)} />
                    <Tab label='Health' {...a11yProps(1)} />
                    {/* <Tab label='Item Three' {...a11yProps(2)} /> */}
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <AccountInfo userData={userData} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <HealthInfo userData={userData} />
            </TabPanel>
            {/* <TabPanel value={value} index={2}>
                Item Three
            </TabPanel> */}
        </Card>
    );
};

export default ProfileDescription;
//  <AccountInfo userData={userData} />
