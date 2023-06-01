import {
    Box,
    Card,
    CardContent,
    Grid,
    TextField,
    Paper,
    Button,
    InputAdornment,
    Icon,
} from '@mui/material';
import { useState } from 'react';
import Edit from '@mui/icons-material/Edit';

export const AccountInfo = ({ userData }) => {
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

    const formattedDate = new Date(userData.createdOn);
    const displayDate = formattedDate.toDateString();

    return (
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
                        // variant={editable ? 'outlined' : 'standard'} // Set variant based on editable state
                        defaultValue={userData.phoneNumber}
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
                        id='registrationDate'
                        label='Registered on:'
                        defaultValue={displayDate}
                        InputProps={{
                            readOnly: true,
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
                                sx={{ mr: 2 }}
                                variant='contained'
                                onClick={handleSave}
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

export default AccountInfo;
