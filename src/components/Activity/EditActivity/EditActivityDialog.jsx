import { Button, Dialog, DialogActions, DialogContent } from '@mui/material';
import PropTypes from 'prop-types';
import EditActivityForm from './EditActivityForm';

const EditActivityDialog = ({ activity, isOpen, onClose, onEditActivity }) => {
    return (
        <Dialog open={isOpen} onClose={onClose}>
            <DialogContent>
                <EditActivityForm onClose={onClose} onEditActivity={onEditActivity} activity={activity} />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Close</Button>
            </DialogActions>
        </Dialog>
    );
};

EditActivityDialog.propTypes = {
    activity: PropTypes.object.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onEditActivity: PropTypes.func.isRequired,
};

export default EditActivityDialog;
