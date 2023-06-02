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
import { useState } from 'react';
import { EXERCISE_NAME_MAX_LENGTH } from '../../common/constants';

const UserSearchCard = ({ user }) => {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const shortenedUserName =
        user.username.length > EXERCISE_NAME_MAX_LENGTH
            ? user.username.substring(0, EXERCISE_NAME_MAX_LENGTH) + '...'
            : user.username;

    return (
        <Card sx={{ maxWidth: 345 }}>
            <Grid>
                <Avatar
                    sx={{
                        mt: '10px',
                        ml: 'auto',
                        mr: 'auto',
                        width: '150px',
                        height: '150px',
                        // border: '1px solid',
                        // borderColor: 'primary.main',
                        // borderRadius: '5px',
                        width: 'fit-content',
                        p: '5px',
                    }}
                    src={user.avatarURL}
                    variant='rounded'
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
                    <Button>Follow</Button>
                    <Button href={`/profile/${user.username}`}>Details</Button>
                </CardActions>
            </Grid>
        </Card>
    );
};

export default UserSearchCard;
