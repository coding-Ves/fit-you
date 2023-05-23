import { Box, Button, Stack, TextField, Typography, Container, InputAdornment, } from '@mui/material';
import { useEffect, useState, useContext } from 'react';
import { exerciseOptions, fetchDataFromExerciseDB } from '../../../services/exercises.service';
import { ExercisesContext } from '../../../contexts/ExercisesContext';
import { exerciseDBUrl } from '../../../common/constants'; // 'https://exercisedb.p.rapidapi.com/exercises/'
import SearchIcon from "@mui/icons-material/Search";
import Exercises from './Exercises';

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

                    setSearch('');
                    setExercises(searchedExercises);
                });
        }
    };

    return (
        <Container maxWidth="md" sx={{ mt: 20 }}>
            <TextField
                placeholder="Search for exercises to add to your activities"
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value.toLowerCase())}
                sx={{ width: 600 }}
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
            {search && <Exercises />}
        </Container>
    );
};

export default SearchExercises;


{/* <Stack alignContent="center" mt="37px" justifyContent="center" p="20px">
<Box position="relative" mb="72px">
    <TextField
        height="76px"
        sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: "40px" }}
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        placeholder="Search for exercises to add to your activities"
        type="text"
    />
    <Button className="search-btn"
        sx={{ mr: 2, textDecoration: 'none', }}
        variant='contained'
        onClick={handleSearch}>
        Search
    </Button>
</Box>
</Stack> */}