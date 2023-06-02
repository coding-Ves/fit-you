import { Box, Grid, Pagination, Stack } from '@mui/material';
import { useContext, useState } from 'react';
import { RESULTS_PER_PAGE } from '../../common/constants';
import UserSearchCard from './UserSearchCard';

import { UsersContext } from '../../contexts/UsersContext';

const ListOfUsers = () => {
    const { users } = useContext(UsersContext);

    const [currentPage, setCurrentPage] = useState(1);

    // For the pagination
    const indexOfLastUsersOnPage = currentPage * RESULTS_PER_PAGE;
    const indexOfFirstUsersOnPage = indexOfLastUsersOnPage - RESULTS_PER_PAGE;
    const currentUsersOnPage = users.slice(
        indexOfFirstUsersOnPage,
        indexOfLastUsersOnPage
    );

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
        window.scrollTo({ top: 1800, behavior: 'smooth' });
    };

    // when we have a loader?
    // if (!currentExercisesOnPage.length) return <Loader />;

    return (
        <>
            {users && (
                <Box
                    id='users'
                    margin={{ lg: '80px', xs: '40px' }}
                    p='20px'
                    display='block'
                >
                    <Grid container spacing={2} ml={0}>
                        {currentUsersOnPage.map((user) => (
                            <Grid item xs={12} sm={6} md={4} key={users.uid}>
                                <UserSearchCard user={user} />
                            </Grid>
                        ))}
                    </Grid>

                    <Stack
                        sx={{ mt: { lg: '114px', xs: '70px' } }}
                        alignItems='center'
                    >
                        {users.length > RESULTS_PER_PAGE && (
                            <Pagination
                                color='secondary'
                                shape='rounded'
                                size='large'
                                count={Math.ceil(
                                    users.length / RESULTS_PER_PAGE
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

export default ListOfUsers;
