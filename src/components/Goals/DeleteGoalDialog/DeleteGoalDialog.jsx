import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import PropTypes from 'prop-types';

const DeleteGoalDialog = ({ goalId, username, isOpen, onClose, onDeleteGoal }) => {

    const handleDelete = () => {
        onDeleteGoal(goalId, username);
        onClose();
    }

    return (
        <Dialog open={isOpen} onClose={onClose}>
            <DialogTitle>Delete Goal</DialogTitle>
            <DialogContent>Are you sure you wish to delete this goal? <br/>
                This action cannot be reverted.
            </DialogContent>
            <DialogActions>
                <Button onClick={() => onClose()}>Cancel</Button>
                <Button onClick={handleDelete}>Delete</Button>{' '}
            </DialogActions>
        </Dialog>
    );
};

DeleteGoalDialog.propTypes = {
    goalId: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onDeleteGoal: PropTypes.func.isRequired,
};

export default DeleteGoalDialog;
