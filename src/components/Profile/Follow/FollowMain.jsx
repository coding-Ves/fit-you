import { Grid, Paper, Typography } from '@mui/material';
import { PropTypes } from 'prop-types';
import FollowUser from './FollowUsers';

const FollowMain = ({ userData }) => {
    const hasFollowers =
        userData?.followers && Object.keys(userData?.followers).length > 0;
    const hasFollowing =
        userData?.following && Object.keys(userData?.following).length > 0;

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Paper variant='elevation' elevation={2} sx={{ p: 3 }}>
                        <Typography variant='h5'>Followers</Typography>
                        {hasFollowers ? (
                            <FollowUser followUsers={userData?.followers} />
                        ) : (
                            <Typography variant='h6'>No followers</Typography>
                        )}
                    </Paper>
                </Grid>

                <Grid item xs={6} sx={{ p: 2 }}>
                    <Paper variant='elevation' elevation={2} sx={{ p: 3 }}>
                        <Typography variant='h5'>Following</Typography>
                        {hasFollowing ? (
                            <FollowUser followUsers={userData?.following} />
                        ) : (
                            <Typography variant='h6'>
                                Following No one
                            </Typography>
                        )}
                    </Paper>
                </Grid>
            </Grid>
        </>
    );
};

FollowMain.propTypes = {
    userData: PropTypes.object,
};

export default FollowMain;
