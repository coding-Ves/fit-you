import { Button, Dialog, DialogActions, DialogContent } from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';
import NewGoalForm from './NewGoalForm';

const CreateGoalDialog = ({ onAddGoal }) => {
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
};

export default CreateGoalDialog;
