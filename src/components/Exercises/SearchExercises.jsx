import SearchIcon from '@mui/icons-material/Search';
import { Button, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { useContext, useState } from 'react';
import { exerciseDBUrl } from '../../common/constants'; // 'https://exercisedb.p.rapidapi.com/exercises/'
import { ExercisesContext } from '../../contexts/ExercisesContext';
import { exerciseOptions, fetchDataFromExerciseDB } from '../../services/exercises.service';

const SearchExercises = () => {

    const [search, setSearch] = useState('');
    const { setExercises } = useContext(ExercisesContext);

    const handleSearch = () => {
        if (search) {
            fetchDataFromExerciseDB(exerciseDBUrl, exerciseOptions)
                .then((exercisesData) => {
                    const searchedExercises = exercisesData.filter((exercise) => {
                        return exercise.name.toLowerCase().includes(search)
                            || exercise.target.toLowerCase().includes(search)
                            || exercise.bodyPart.toLowerCase().includes(search)
                            || exercise.equipment.toLowerCase().includes(search);
                    });

                    window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

                    setSearch('');
                    setExercises(searchedExercises);
                });
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
                Browse our list of extensive exercises <br /> and add them to your activities!
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

export default SearchExercises;
