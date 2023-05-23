import { ExercisesContext } from '../../../contexts/ExercisesContext';
import { useContext } from 'react';
import { Box, Stack, Pagination } from '@mui/material';
import ExerciseCard from './ExerciseCard';

const Exercises = () => {

    const { exercises } = useContext(ExercisesContext);

    return (
        <>
            {exercises ?
                <Box id="exercises"
                    sx={{ mt: { lg: '110px' } }}
                    mt="50px"
                    p="20px"
                >
                    <Stack direction="row" sx={{ gap: { lg: '110px', xs: '50px' } }}
                        flexWrap="wrap" justifyContent="center">
                        {exercises.map((exercise, index) => (
                            <ExerciseCard key={index} exercise={exercise} />
                        ))}
                    </Stack>
                </Box >
                :
                <p>Oops!</p>
            }

        </>
    );
};

export default Exercises;
