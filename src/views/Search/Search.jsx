import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
import ListOfResults from '../../components/SearchBar/ListOfResults';
import SearchBar from '../../components/SearchBar/SearchBar';
import SideBarDrawer from '../../components/SideBarDrawer/SideBarDrawer';
import { ExercisesProvider } from '../../contexts/ExercisesContext';

const Search = () => {
    const { category } = useParams();

    return (
        <ExercisesProvider>
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
                    <ListOfResults />
                </Box>
            </Box>
        </ExercisesProvider>
    );
};

export default Search;
