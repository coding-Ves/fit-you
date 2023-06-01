import {
    Box,
    Card,
    CardContent,
    Grid,
    TextField,
    Paper,
    Button,
    Icon,
    InputAdornment,
} from '@mui/material';
import { useState } from 'react';
import { Edit } from '@mui/icons-material';

export const HealthInfo = ({ userData }) => {
    const [editable, setEditable] = useState(false); // State to track if fields are editable or not

    const handleEdit = () => {
        setEditable(true);
    };

    const handleSave = () => {
        setEditable(false);
        // Perform save/update action here if needed
    };

    const handleCancel = () => {
        setEditable(false);
        // Perform cancel action here if needed
    };

    return (
        <Box component='form' noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id='height'
                        label='Height'
                        defaultValue={userData?.height}
                        // variant={editable ? 'outlined' : 'standard'}
                        InputProps={{
                            readOnly: !editable, // Set readOnly based on editable state
                            endAdornment: editable && (
                                <InputAdornment position='end'>
                                    <Icon>
                                        <Edit />
                                    </Icon>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id='weight'
                        label='Weight'
                        defaultValue={userData?.weight}
                        // variant={editable ? 'outlined' : 'standard'}
                        InputProps={{
                            readOnly: !editable, // Set readOnly based on editable state
                            endAdornment: editable && (
                                <InputAdornment position='end'>
                                    <Icon>
                                        <Edit />
                                    </Icon>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id='age'
                        label='Age'
                        defaultValue={userData?.age}
                        // variant={editable ? 'outlined' : 'standard'}
                        InputProps={{
                            readOnly: !editable, // Set readOnly based on editable state
                            endAdornment: editable && (
                                <InputAdornment position='end'>
                                    <Icon>
                                        <Edit />
                                    </Icon>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    {!editable ? (
                        <Button variant='outlined' onClick={handleEdit}>
                            Edit
                        </Button>
                    ) : (
                        <Box>
                            <Button
                                variant='contained'
                                onClick={handleSave}
                                sx={{ mr: 2 }}
                            >
                                Save
                            </Button>
                            <Button variant='outlined' onClick={handleCancel}>
                                Cancel
                            </Button>
                        </Box>
                    )}
                </Grid>
            </Grid>
        </Box>
    );
};

export default HealthInfo;
