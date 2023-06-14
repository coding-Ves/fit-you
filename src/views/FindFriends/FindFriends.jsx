import Box from '@mui/material/Box';
import ListOfUsers from '../../components/Friends/ListOfUsers';
import SideBarDrawer from '../../components/SideBarDrawer/SideBarDrawer';
import { UsersProvider } from '../../contexts/UsersContext';
import FriendSearchBar from './../../components/Friends/FriendSearchBar';
import puzzlePatternImageSearch2 from '../../img/Puzzle-Top-Bar-1.png';

const FindFriends = () => {
    return (
        <UsersProvider>
            <Box
                sx={{
                    display: 'flex',
                    height: '100vh',
                    width: '100vw',
                    backgroundImage: `url(${puzzlePatternImageSearch2})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '95%',
                    backgroundPosition: 'center',
                    backgroundBlendMode: 'multiply',
                    boxSizing: 'border-box',
                }}
            >
                <SideBarDrawer />
                <Box
                    component='main'
                    sx={{
                        flexGrow: 1,
                        height: '100%',
                        width: '100%',
                        overflow: 'auto',
                        paddingRight: { xs: '16px', lg: '0' },
                        // margin={ lg: '80px', xs: '40px' }
                    }}
                >
                    <FriendSearchBar />

                    <ListOfUsers />
                </Box>
            </Box>
        </UsersProvider>
    );
};

export default FindFriends;
