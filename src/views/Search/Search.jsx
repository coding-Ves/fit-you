import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
import ListOfResults from '../../components/SearchBar/ListOfResults';
import SearchBar from '../../components/SearchBar/SearchBar';
import SideBarDrawer from '../../components/SideBarDrawer/SideBarDrawer';
import { ActivitiesProvider } from '../../contexts/ActivitiesContext';

const Search = () => {
    const { category } = useParams();

    return (
        <ActivitiesProvider>
            <Box sx={{ display: 'flex', height: '100vh', width: '100vw' }}>
                <SideBarDrawer />
                <Box
                    component="main"
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
                    <SearchBar category={category} />
                    <ListOfResults category={category}/>
                </Box>
            </Box>
        </ActivitiesProvider>
    );
};

export default Search;

// idea - ListOfResults can directly take category as props if need be 