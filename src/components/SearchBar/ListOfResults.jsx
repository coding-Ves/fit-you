import { Box, Grid, Pagination, Stack } from '@mui/material';
import { useContext, useState } from 'react';
import { RESULTS_PER_PAGE } from '../../common/constants';
import { ExercisesContext } from '../../contexts/ExercisesContext';
import SearchResultCard from './SearchResultCard';

const ListOfResults = () => {
    const { exercises } = useContext(ExercisesContext);
    const [currentPage, setCurrentPage] = useState(1);

    // exercises: масив с обекти
    // bodyPart:"waist"
    // equipment:"medicine ball"
    // gifUrl:"http://d205bpvrqc9yn1.cloudfront.net/0014.gif"
    // id: "0014"
    // name: "assisted motion russian twist"
    // target: "abs"

    // For the pagination
    const indexOfLastExerciseOnPage = currentPage * RESULTS_PER_PAGE;
    const indexOfFirstExerciseOnPage =
        indexOfLastExerciseOnPage - RESULTS_PER_PAGE;
    const currentExercisesOnPage = exercises.slice(
        indexOfFirstExerciseOnPage,
        indexOfLastExerciseOnPage
    );

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
        window.scrollTo({ top: 1800, behavior: 'smooth' });
    };

    // when we have a loader?
    // if (!currentExercisesOnPage.length) return <Loader />;

    return (
        <>
            {exercises && (
                <Box
                    id='exercises'
                    margin={{ lg: '80px', xs: '40px' }}
                    p='20px'
                    display='block'
                >
                    <Grid container spacing={2} ml={0}>
                        {currentExercisesOnPage.map((exercise, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                {/* this needs refactoring!!! */}
                                <SearchResultCard exercise={exercise} /> 
                            </Grid>
                        ))}
                    </Grid>

                    <Stack
                        sx={{ mt: { lg: '114px', xs: '70px' } }}
                        alignItems='center'
                    >
                        {exercises.length > RESULTS_PER_PAGE && (
                            <Pagination
                                color='secondary'
                                shape='rounded'
                                size='large'
                                count={Math.ceil(
                                    exercises.length / RESULTS_PER_PAGE
                                )}
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

export default ListOfResults;
