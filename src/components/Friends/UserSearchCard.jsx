/* eslint-disable react/prop-types */
import {
    Avatar,
    Button,
    Card,
    CardActions,
    CardContent,
    Divider,
    Grid,
    Typography,
} from '@mui/material';
import { useContext, useState } from 'react';
import { USER_NAME_MAX_LENGTH } from '../../common/constants';
import AuthContext from '../../contexts/AuthContext';
import FollowButton from '../Profile/FollowButton/FollowButton';
import { Link } from 'react-router-dom';

const UserSearchCard = ({ user: singleUser }) => {
    const { userData } = useContext(AuthContext);
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const shortenedUserName =
        singleUser.username.length > USER_NAME_MAX_LENGTH
            ? singleUser.username.substring(0, USER_NAME_MAX_LENGTH) + '...'
            : singleUser.username;

    return (
        <Card sx={{ maxWidth: 250 }} variant='elevation' elevation={5}>
            <Grid align='center'>
                <Avatar
                    variant='rounded'
                    sx={{
                        width: '150px',
                        height: '150px',
                        // border: '1px solid',
                        // borderColor: 'primary.main',
                        // borderRadius: '5px',
                        width: 'fit-content',
                        m: 2,
                    }}
                    src={singleUser.avatarURL}
                />
                <CardContent align='center'>
                    <Typography
                        gutterBottom
                        variant='h5'
                        sx={{
                            // border: '1px solid',
                            // borderColor: 'primary.main',
                            // borderRadius: '5px',
                            width: 'fit-content',
                            pl: '10px',
                            pr: '10px',
                        }}
                    >
                        {shortenedUserName}
                    </Typography>
                    <Typography
                        level='body3'
                        sx={{ fontWeight: 'md', color: 'text.secondary' }}
                    ></Typography>
                    <Divider orientation='vertical' />
                    <Typography
                        level='body3'
                        sx={{ fontWeight: 'md', color: 'text.secondary' }}
                    ></Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'space-evenly' }}>
                    {userData && singleUser.username !== userData.username && (
                        <FollowButton userToFollow={singleUser.username} />
                    )}
                    <Button
                        component={Link}
                        to={`/profile/${singleUser.username}`}
                    >
                        Details
                    </Button>
                </CardActions>
            </Grid>
        </Card>
    );
};

export default UserSearchCard;
