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
                    src={singleUser.avatarURL}
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
                    {singleUser.username !== userData.username && (
                        <Button>Follow</Button>
                    )}
                    <Button href={`/profile/${singleUser.username}`}>
                        Details
                    </Button>
                </CardActions>
            </Grid>
        </Card>
    );
};

export default UserSearchCard;
