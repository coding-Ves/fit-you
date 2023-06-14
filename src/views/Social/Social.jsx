import Box from '@mui/material/Box';

import SideBarDrawer from '../../components/SideBarDrawer/SideBarDrawer';
import { UsersProvider } from '../../contexts/UsersContext';
import UserSearchBar from './../../components/Social/UserSearchBar';
import puzzlePatternImageSearch2 from '../../assets/images/Puzzle-Top-Bar-1.png';
import ListOfUsers from './../../components/Social/ListOfUsers';

const Social = () => {
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
                    <UserSearchBar />

                    <ListOfUsers />
                </Box>
            </Box>
        </UsersProvider>
    );
};

export default Social;
