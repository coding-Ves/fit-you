import { useParams } from 'react-router-dom';
import ListOfResults from '../../components/SearchBar/ListOfResults';
import SearchBar from '../../components/SearchBar/SearchBar';
import SideBarDrawer from '../../components/SideBarDrawer/SideBarDrawer';
import { ActivitiesProvider } from '../../contexts/ActivitiesContext';
import { Box, Paper } from '@mui/material';

const Search = () => {
    const { category } = useParams();

    return (
        <ActivitiesProvider>
            <Paper
                variant='elevation'
                elevation={2}
                sx={{ display: 'flex', height: '93vh', width: '100vw' }}
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
                    <SearchBar category={category} />
                    <ListOfResults category={category} />
                </Box>
            </Paper>
        </ActivitiesProvider>
    );
};

export default Search;

// idea - ListOfResults can directly take category as props if need be
