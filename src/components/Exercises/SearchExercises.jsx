import SearchIcon from '@mui/icons-material/Search';
import { Button, Container, InputAdornment, TextField } from '@mui/material';
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
        </Container>
    );
};

export default SearchExercises;
