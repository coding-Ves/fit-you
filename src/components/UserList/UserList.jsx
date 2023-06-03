import { Box, Grid, Pagination, Stack } from '@mui/material';
import { useContext, useState } from 'react';
import { RESULTS_PER_PAGE } from '../../common/constants';
import UserSearchCard from './../Friends/UserSearchCard';

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
        <>
            <Box id='users' margin={{ lg: '10px', xs: '5px' }} p='5px'>
                <Grid container spacing={2}>
                    {currentUsersOnPage.map((user) => (
                        <Grid item xs={12} sm={6} md={4} key={users.uid}>
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
        </>
    );
};

export default UserList;
