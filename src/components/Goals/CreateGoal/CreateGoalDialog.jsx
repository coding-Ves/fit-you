import { Alert, Button, Dialog, DialogActions, DialogContent, Snackbar } from '@mui/material';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import NewGoalForm from './NewGoalForm';

const CreateGoalDialog = ({ onAddGoal, hasReachedMaximumGoals }) => {
    const [open, setOpen] = useState(false);
    console.log(hasReachedMaximumGoals);
    const handleClose = () => {
        setOpen(false);
    };
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    const handleOpen = () => {
        if (!hasReachedMaximumGoals) {
            setOpen(true);
        } else {
            setSnackbarMessage('You have reached the maximum number of active goals');
            setSnackbarSeverity('warning');
            setSnackbarOpen(true);
            onAddGoal();
            handleClose();
        }
    };

    return (
        <>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={handleSnackbarClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert
                    onClose={handleSnackbarClose}
                    severity={snackbarSeverity}
                    sx={{ width: '100%' }}
                >
                    {snackbarMessage}
                </Alert>
            </Snackbar>
            <Button
                sx={{
                    borderRadius: '2rem',
                }}
                onClick={() => handleOpen()}
                color='primary'
                variant='contained'
            >
                Add a new goal
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogContent>
                    <NewGoalForm handleClose={handleClose} onAddGoal={onAddGoal} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

CreateGoalDialog.propTypes = {
    onAddGoal: PropTypes.func.isRequired,
    hasReachedMaximumGoals: PropTypes.bool.isRequired,
};

export default CreateGoalDialog;
