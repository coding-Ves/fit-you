import { Box, Grid, Pagination, Stack } from '@mui/material';
import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react';
import { RESULTS_PER_PAGE } from '../../common/constants';
import { ActivitiesContext } from '../../contexts/ActivitiesContext';
import SearchResultCard from './SearchResultCard';

const ListOfResults = ({ category }) => {
    const { exercises, sports, cardio } = useContext(ActivitiesContext);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentActivities, setCurrentActivities] = useState([]);

    useEffect(() => {
        let activities;
        if (category === 'fitness') {
            activities = exercises;
        } else if (category === 'sports') {
            activities = sports;
        } else if (category === 'cardio') {
            activities = cardio;
        }
        setCurrentActivities(activities);
    }, [category, exercises, sports, cardio]);

    // For the pagination
    const indexOfLastActivityOnPage = currentPage * RESULTS_PER_PAGE;
    const indexOfFirstActivityOnPage = indexOfLastActivityOnPage - RESULTS_PER_PAGE;
    const activitiesToShow = currentActivities.slice(indexOfFirstActivityOnPage, indexOfLastActivityOnPage);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
        window.scrollTo({ top: 1800, behavior: 'smooth' });
    };

    // when we have a loader?
    // if (!activitiesToShow.length) return <Loader />;

    return (
        <>
            {currentActivities && (
                <Box
                    id='activities'
                    margin={{ lg: '80px', xs: '40px' }}
                    p='20px'
                    display='block'
                >
                    <Grid container spacing={2} ml={0}>
                        {activitiesToShow.map((activity) => (
                            <Grid item xs={12} sm={6} md={4} key={activity.id}>
                                <SearchResultCard activity={activity} />
                            </Grid>
                        ))}
                    </Grid>

                    <Stack
                        sx={{ mt: { lg: '114px', xs: '70px' } }}
                        alignItems='center'
                    >
                        {currentActivities.length > RESULTS_PER_PAGE && (
                            <Pagination
                                color='secondary'
                                shape='rounded'
                                size='large'
                                count={Math.ceil(
                                    currentActivities.length / RESULTS_PER_PAGE
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

ListOfResults.propTypes = {
    category: PropTypes.string.isRequired,
};

export default ListOfResults;
