import Box from '@mui/material/Box';
import SideBarDrawer from '../../components/SideBarDrawer/SideBarDrawer';

const MyActivity = () => {

    return (
        <Box sx={{ display: 'flex' }}>
            <SideBarDrawer />
            <Box
                component="main"
                sx={{
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[100]
                            : theme.palette.grey[800],
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto',
                }}
            >

            </Box>
        </Box>
    );
};

export default MyActivity;
