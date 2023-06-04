import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ActivitiesContext } from '../../contexts/ActivitiesContext';
import { searchFitness, searchSports } from './helpers/searchBarHelpers';
import { set, useForm } from 'react-hook-form';

const SearchBar = ({ category }) => {

    const { handleSubmit, register, reset } = useForm();
    // const [search, setSearch] = useState('');
    const [placeholder, setPlaceholder] = useState('Search');
    const { setExercises, setCategory, setSports } = useContext(ActivitiesContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (category === 'fitness') {
            setPlaceholder('Search by name, target muscle, body part or equipment');
        } else if (category === 'sports') {
            setPlaceholder('Search by sports name or category');
        } else if (category === 'cardio') {
            setPlaceholder('Search by name');
        }
    }, [category]);

    const handleSearch = (data) => {
        if (data && data.search) {
            //this handles special characters that could be in the search input
            //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
            const encodedSearch = encodeURIComponent(data.search);
            const searchQueryUrl = `/search/${category}?query=${encodedSearch}`;

            if (category === 'fitness') {
                searchFitness(data.search)
                    .then((result) => {
                        setExercises(result);
                        setCategory(category);
                        navigate(searchQueryUrl);
                    });
            } else if (category === 'sports') {
                const result = searchSports(data.search);
                setSports(result);
                setCategory(category);
                navigate(searchQueryUrl);
            }

            window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
            reset();
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(handleSearch)();
        }
    };

    return (
        <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
            <Typography fontWeight={700} sx={{ fontSize: '44px', '@media (max-width: 600px)': { fontSize: '30px' } }} mb="49px" textAlign="center">
                {`Pick a ${category}-related activity!`}
            </Typography>
            <Box position="relative"
                component='form'
                onSubmit={handleSubmit(handleSearch)}
                sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <TextField
                    {...register('search')}
                    onKeyDown={handleKeyDown}
                    placeholder={placeholder}
                    type="text"
                    sx={{
                        width: '100%',
                        maxWidth: '600px',
                    }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <Button type='submit'>
                                    <SearchIcon />
                                </Button>
                            </InputAdornment>
                        ),
                    }}
                />
            </Box>
        </Stack >
    );
};

SearchBar.propTypes = {
    category: PropTypes.string.isRequired,
};

export default SearchBar;
