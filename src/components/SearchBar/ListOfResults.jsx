import { Box, Grid, Pagination, Stack } from '@mui/material';
import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import NoResultsIcon from '../../assets/images/no-results-found.png';
import { RESULTS_PER_PAGE } from '../../common/constants';
import { ActivitiesContext } from '../../contexts/ActivitiesContext';
import SearchResultCard from './SearchResultCard';

const ListOfResults = ({ category }) => {
    const { exercises, sports, cardio, yoga } = useContext(ActivitiesContext);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentActivities, setCurrentActivities] = useState([]);
    const isSearched = Boolean(useLocation().search);

    useEffect(() => {
        let activities;
        if (category === 'fitness') {
            activities = exercises;
        } else if (category === 'sports') {
            activities = sports;
        } else if (category === 'cardio') {
            activities = cardio;
        } else if (category === 'yoga') {
            activities = yoga;
        }
        setCurrentActivities(activities);
    }, [category, exercises, sports, cardio, yoga]);

    // For the pagination
    const indexOfLastActivityOnPage = currentPage * RESULTS_PER_PAGE;
    const indexOfFirstActivityOnPage =
        indexOfLastActivityOnPage - RESULTS_PER_PAGE;
    const activitiesToShow = currentActivities.slice(
        indexOfFirstActivityOnPage,
        indexOfLastActivityOnPage
    );

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
        window.scrollTo({ top: 1800, behavior: 'smooth' });
    };

    // when we have a loader?
    // if (!activitiesToShow.length) return <Loader />;

    return (
        <>
            {activitiesToShow.length === 0 && isSearched ? (
                <Box
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    minHeight={200}
                    mt={20}
                    px={10}
                >
                    <img
                        src={NoResultsIcon}
                        style={{ maxWidth: '60%', height: 'auto' }}
                        alt='No Results'
                    />
                </Box>
            ) : (
                <Box
                    id='activities'
                    margin={{ lg: '80px', xs: '40px' }}
                    p='20px'
                    display='block'
                >
                    <Grid container spacing={2} ml={0}>
                        {activitiesToShow.map((activity) => (
                            <Grid
                                item
                                xs={12}
                                sm={6}
                                md={4}
                                key={activity.id}
                                mb={3}
                            >
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
