import { Box, Grid, Pagination, Stack } from '@mui/material';
import { useState } from 'react';
import { RESULTS_PER_PAGE } from '../../common/constants';
import UserSearchCard from './../Social/UserSearchCard';

import { PropTypes } from 'prop-types';

const UserList = ({ followUserList }) => {
    const [currentPage, setCurrentPage] = useState(1);
    // For the pagination
    const indexOfLastUsersOnPage = currentPage * RESULTS_PER_PAGE;
    const indexOfFirstUsersOnPage = indexOfLastUsersOnPage - RESULTS_PER_PAGE;
    const currentUsersOnPage = followUserList?.slice(
        indexOfFirstUsersOnPage,
        indexOfLastUsersOnPage
    );

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
        window.scrollTo({ top: 1800, behavior: 'smooth' });
    };

    return (
        <Box id='users'>
            <Grid container spacing={2}>
                {currentUsersOnPage.map((user) => (
                    <Grid
                        item
                        xs={12}
                        sm={3}
                        md={5}
                        key={user.uid}
                        sx={{ minWidth: '300px' }}
                    >
                        <UserSearchCard user={user} />
                    </Grid>
                ))}
            </Grid>

            <Stack alignItems='center'>
                {followUserList.length > RESULTS_PER_PAGE && (
                    <Pagination
                        color='secondary'
                        shape='rounded'
                        size='large'
                        count={Math.ceil(
                            followUserList.length / RESULTS_PER_PAGE
                        )}
                        page={currentPage}
                        onChange={handlePageChange}
                    />
                )}
            </Stack>
        </Box>
    );
};

export default UserList;

UserList.propTypes = {
    followUserList: PropTypes.array.isRequired,
};
