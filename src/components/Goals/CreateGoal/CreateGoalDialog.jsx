import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { useState } from 'react';
import NewGoalForm from './NewGoalForm';

const CreateGoalDialog = () => {
    
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button
                sx={{
                    borderRadius: '2rem',
                }}
                onClick={() => setOpen(true)}
                color='primary'
                variant='contained'
            >
                Add a new goal
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add a new goal</DialogTitle>
                <DialogContent>
                    <NewGoalForm />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default CreateGoalDialog;
