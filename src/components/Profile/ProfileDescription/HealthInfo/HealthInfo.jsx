import { Box, Card, CardContent, Grid, TextField, Paper } from '@mui/material';
import * as React from 'react';

export const HealthInfo = ({ userData }) => {
    const date = userData.createdOn;
    const formattedDate = new Date(userData.createdOn);
    const displayDate = formattedDate.toDateString();

    return (
        <Box component='form' noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id='height'
                        label='Height'
                        defaultValue={userData?.height}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id='weight'
                        label='Weight'
                        defaultValue={userData?.weight}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id='age'
                        label='Age'
                        defaultValue={userData?.age}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default HealthInfo;
