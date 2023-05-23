import { Box, Pagination, Stack } from '@mui/material';
import { useContext, useState } from 'react';
import { exercisesPerPage } from '../../common/constants';
import { ExercisesContext } from '../../contexts/ExercisesContext';
import ExerciseCard from './ExerciseCard';

const ListOfExercises = () => {

    const { exercises } = useContext(ExercisesContext);
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastExerciseOnPage = currentPage * exercisesPerPage;
    const indexOfFirstExerciseOnPage = indexOfLastExerciseOnPage - exercisesPerPage;
    const currentExercisesOnPage = exercises.slice(indexOfFirstExerciseOnPage, indexOfLastExerciseOnPage);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);

        window.scrollTo({ top: 1800, behavior: 'smooth' });
    };

    return (
        <>
            {exercises &&
                <Box id="exercises"
                    sx={{ mt: { lg: '109px' } }}
                    mt="50px"
                    p="20px"
                >
                    <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }}
                        flexWrap="wrap" justifyContent="center">
                        {currentExercisesOnPage.map((exercise, index) => (
                            <ExerciseCard key={index} exercise={exercise} />
                        ))}
                    </Stack>
                    <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems='center'>
                        {exercises.length > 9 && (
                            <Pagination
                                color='secondary'
                                shape='rounded'
                                size='large'
                                count={Math.ceil(exercises.length / exercisesPerPage)}
                                // defaultPage={1}
                                page={currentPage}
                                onChange={handlePageChange}
                            />
                        )}
                    </Stack>
                </Box >
            }
        </>
    );
};

export default ListOfExercises;
