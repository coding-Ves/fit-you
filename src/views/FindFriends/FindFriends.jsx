import Box from '@mui/material/Box';
import ListOfUsers from '../../components/Friends/ListOfUsers';
import SideBarDrawer from '../../components/SideBarDrawer/SideBarDrawer';
import { UsersProvider } from '../../contexts/UsersContext';
import FriendSearchBar from './../../components/Friends/FriendSearchBar';

const FindFriends = () => {
    return (
        <UsersProvider>
            <Box
                sx={{
                    display: 'flex',
                    height: '100vh',
                    width: '100vw',
                }}
            >
                <SideBarDrawer />
                <Box
                    component='main'
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[100]
                                : theme.palette.grey[800],
                        flexGrow: 1,
                        height: '100%',
                        width: '100%',
                        overflow: 'auto',
                        paddingRight: { xs: '16px', lg: '0' },
                        // margin={ lg: '80px', xs: '40px' }
                    }}
                >
                    <FriendSearchBar />
                    {/* So I can focus on Search bar */}
                    <ListOfUsers />
                </Box>
            </Box>
        </UsersProvider>
    );
};

export default FindFriends;
