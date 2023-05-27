import { ArrowLeft } from '@mui/icons-material';
import { Box, Container, Button, Typography, Avatar } from '@mui/material';
import { notFoundImage } from '../../common/constants';

const NotFound = () => {
    return (
        <>
            <Box
                component='main'
                sx={{
                    alignItems: 'center',
                    display: 'flex',
                    flexGrow: 1,
                    minHeight: '100%',
                }}
            >
                <Container maxWidth='md'>
                    <Box
                        sx={{
                            alignItems: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <Box
                            sx={{
                                mb: 3,
                                mt: 3,
                                textAlign: 'center',
                            }}
                        >
                            {/* 'https://www.freepik.com/free-vector/404-error-with-landscape-concept-illustration_20602801.htm#query=404%20page&position=9&from_view=keyword&track=ais' */}

                            <Avatar
                                alt='404 Image'
                                src={notFoundImage}
                                mt={3}
                                style={{
                                    width: '300px',
                                    height: '300px',
                                }}
                            />
                        </Box>
                        <Typography
                            align='center'
                            color='text.secondary'
                            variant='body1'
                        >
                            This isn't where we wanted to go, are we lost? Let's
                            go back to safety.
                        </Typography>
                        <Button href='/' sx={{ mt: 3 }} variant='contained'>
                            Go back to dashboard <ArrowLeft />
                        </Button>
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default NotFound;
