import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import PropTypes from 'prop-types';

const DeleteActivityDialog = ({ onDeleteActivity, activity, isOpen, onClose }) => {

    const handleDelete = () => {
        onDeleteActivity(activity, activity.username);
        onClose();
    };

    return (
        <Dialog open={isOpen} onClose={onClose}>
            <DialogTitle>Delete Activity</DialogTitle>
            <DialogContent>Are you sure you wish to delete this activity? <br />
                This action cannot be reverted.
            </DialogContent>
            <DialogActions>
                <Button onClick={() => onClose()}>Cancel</Button>
                <Button onClick={handleDelete}>Delete</Button>{' '}
            </DialogActions>
        </Dialog>
    );
};

DeleteActivityDialog.propTypes = {
    username: PropTypes.string,
    activity: PropTypes.object.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onDeleteActivity: PropTypes.func.isRequired,
};

export default DeleteActivityDialog;
