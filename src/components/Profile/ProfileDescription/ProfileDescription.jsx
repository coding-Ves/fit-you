import { Box, Card, CardContent, Grid, TextField } from '@mui/material';
import * as React from 'react';

export const ProfileDescription = ({ userData }) => {
    const date = userData.createdOn;
    const formattedDate = new Date(userData.createdOn);
    const displayDate = formattedDate.toDateString();

    return (
        <Card
            sx={{
                m: 3,
                p: 1,
            }}
        >
            <CardContent>
                <Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Box component='form' noValidate sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        id='username'
                                        label='Username'
                                        defaultValue={userData.username}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        id='phoneNumber'
                                        label='Phone Number'
                                        defaultValue={userData.phoneNumber}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        id='registrationDate'
                                        label='Registered on:'
                                        defaultValue={displayDate}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

export default ProfileDescription;
