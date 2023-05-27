import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExercisesContext } from '../../contexts/ExercisesContext';
import { searchFitness } from './helpers/searchBarHelpers';

const SearchBar = ({ category }) => {

    const [search, setSearch] = useState('');
    const { setExercises } = useContext(ExercisesContext);
    const navigate = useNavigate();

    const handleSearch = () => {
        if (search) {
            //this handles special characters that could be in the search input
            const encodedSearch = encodeURIComponent(search);
            const searchQueryUrl = `/search/${category}?query=${encodedSearch}`;

            if (category === 'fitness') {
                searchFitness(search)
                    .then((result) => {
                        setExercises(result);
                        navigate(searchQueryUrl);
                    });
            }

            window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
            setSearch('');
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
            <Typography fontWeight={700} sx={{ fontSize: '44px', '@media (max-width: 600px)': { fontSize: '30px' } }} mb="49px" textAlign="center">
                {`Pick a ${category}-related activity!`}
            </Typography>
            <Box position="relative" sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
            }}>
                <TextField
                    value={search}
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    onKeyDown={handleKeyDown}
                    placeholder="Search by name, target muscle, body part or equipment"
                    type="text"
                    sx={{
                        width: '100%', // Updated width to take up the full width of the container
                        maxWidth: '600px', // Added maxWidth to limit the width on larger screens
                    }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <Button onClick={handleSearch}>
                                    <SearchIcon />
                                </Button>
                            </InputAdornment>
                        ),
                    }}
                />
            </Box>
        </Stack>
    );
};

export default SearchBar;
