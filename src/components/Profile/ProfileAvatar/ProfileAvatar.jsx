import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Divider,
    Typography,
} from '@mui/material';

export const ProfileAvatar = ({ userData }) => {
    return (
        <Card
            sx={{
                m: 3,
                p: 1,
            }}
        >
            <CardContent>
                <Box
                    sx={{
                        alignItems: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Avatar
                        sx={{
                            height: 80,
                            mb: 2,
                            width: 80,
                        }}
                    >
                        {userData.username}
                    </Avatar>
                    <Typography gutterBottom variant='h5'>
                        {userData.username}
                    </Typography>
                </Box>
            </CardContent>
            <Divider />
            <CardActions>
                <Button fullWidth variant='text'>
                    Upload picture
                </Button>
            </CardActions>
        </Card>
    );
};

export default ProfileAvatar;
