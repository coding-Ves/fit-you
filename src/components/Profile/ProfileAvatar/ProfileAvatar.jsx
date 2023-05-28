import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Divider,
    Typography,
    Paper,
} from '@mui/material';

export const ProfileAvatar = ({ userData }) => {
    return (
        <>
            <Box
                sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Paper
                    sx={{
                        p: 2,

                        width: '100%',
                        height: '100%',
                    }}
                >
                    <Avatar
                        sx={{
                            width: '150px',
                            height: '150px',
                            mb: 2,
                        }}
                    >
                        {userData.username}
                    </Avatar>
                    <Typography gutterBottom variant='h5'>
                        {userData.username}
                    </Typography>
                </Paper>
            </Box>
        </>
    );
};

export default ProfileAvatar;
