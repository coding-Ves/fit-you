import SearchIcon from '@mui/icons-material/Search';
import {
    Box,
    Button,
    InputAdornment,
    Stack,
    TextField,
    Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ActivitiesContext } from '../../contexts/ActivitiesContext';
import {
    searchCardio,
    searchFitness,
    searchSports,
    searchYoga,
} from './helpers/searchBarHelpers';

import puzzlePatternImageSearch1 from '../../assets/images/Puzzle-Top-Bar-1.png';
import puzzlePatternImageSearch2 from '../../assets/images/Puzzle-Top-Bar-2.png';

const SearchBar = ({ category }) => {
    const { handleSubmit, register, reset } = useForm();
    // const [search, setSearch] = useState('');
    const [placeholder, setPlaceholder] = useState('Search');
    const { setCategory, setExercises, setSports, setCardio, setYoga } =
        useContext(ActivitiesContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (category === 'fitness') {
            setPlaceholder(
                'Search by name, target muscle, body part or equipment'
            );
        } else if (category === 'sports') {
            setPlaceholder('Search by sports name or category');
        } else if (category === 'cardio') {
            setPlaceholder('Search by name or category');
        } else if (category === 'yoga') {
            setPlaceholder('Search by yoga pose name in English or Sanskrit');
        }
    }, [category]);

    const handleSearch = (data) => {
        if (data && data.search) {
            //this handles special characters that could be in the search input
            //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
            const encodedSearch = encodeURIComponent(data.search);
            const searchQueryUrl = `/search/${category}?query=${encodedSearch}`;

            if (category === 'fitness') {
                searchFitness(data.search).then((result) => {
                    setExercises(result);
                    setCategory(category);
                    navigate(searchQueryUrl);
                });
            } else if (category === 'sports') {
                const result = searchSports(data.search);
                setSports(result);
                setCategory(category);
                navigate(searchQueryUrl);
            } else if (category === 'cardio') {
                const result = searchCardio(data.search);
                setCardio(result);
                setCategory(category);
                navigate(searchQueryUrl);
            } else if (category === 'yoga') {
                searchYoga(data.search).then((result) => {
                    setYoga(result);
                    setCategory(category);
                    navigate(searchQueryUrl);
                });
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
        <Stack
            alignItems='center'
            justifyContent='center'
            p='20px'
            sx={{
                backgroundImage: `url(${puzzlePatternImageSearch2})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100%',
                backgroundPosition: 'center',
                backgroundBlendMode: 'multiply',
                boxSizing: 'border-box',
            }}
        >
            <Typography
                fontWeight={700}
                sx={{
                    fontSize: '44px',
                    '@media (max-width: 600px)': {
                        fontSize: '30px',
                    },
                }}
                mb='49px'
                textAlign='center'
                color='text.primary'
            >
                {`Pick a ${category}-related activity!`}
            </Typography>
            <Box
                position='relative'
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
                    type='text'
                    sx={{
                        width: '100%',
                        maxWidth: '600px',
                        backgroundColor: 'background.paper',
                    }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position='end'>
                                <Button type='submit'>
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

SearchBar.propTypes = {
    category: PropTypes.string.isRequired,
};

export default SearchBar;
