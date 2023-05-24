import { Box, Pagination, Stack, Grid } from '@mui/material';
import { useContext, useState } from 'react';
import { exercisesPerPage } from '../../common/constants';
import { ExercisesContext } from '../../contexts/ExercisesContext';
import ExerciseCard from './ExerciseCard';

const ListOfExercises = () => {

    const { exercises } = useContext(ExercisesContext);
    const [currentPage, setCurrentPage] = useState(1);

    // For the pagination
    const indexOfLastExerciseOnPage = currentPage * exercisesPerPage;
    const indexOfFirstExerciseOnPage = indexOfLastExerciseOnPage - exercisesPerPage;
    const currentExercisesOnPage = exercises.slice(indexOfFirstExerciseOnPage, indexOfLastExerciseOnPage);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);

        window.scrollTo({ top: 1800, behavior: 'smooth' });
    };

    // when we have a loader
    // if (!currentExercisesOnPage.length) return <Loader />;

    return (
        <>
            {exercises && (
                <Box id="exercises" margin={{ lg: '80px', xs: '40px' }} p="20px" display="block">
                    <Grid container spacing={2} ml={0}>
                        {currentExercisesOnPage.map((exercise, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <ExerciseCard exercise={exercise} />
                            </Grid>
                        ))}
                    </Grid>

                    <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
                        {exercises.length > exercisesPerPage && (
                            <Pagination
                                color="secondary"
                                shape="rounded"
                                size="large"
                                count={Math.ceil(exercises.length / exercisesPerPage)}
                                page={currentPage}
                                onChange={handlePageChange}
                            />
                        )}
                    </Stack>
                </Box>
            )}
        </>
    );
};

export default ListOfExercises;


{/* <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }}
flexWrap="wrap" justifyContent="center">
{currentExercisesOnPage.map((exercise, index) => (
    <ExerciseCard key={index} exercise={exercise} sx={{ width: '33%' }}/>
))}
</Stack> */}