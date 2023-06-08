import { Button, Dialog, DialogActions, DialogContent } from '@mui/material';
import EditGoalForm from './EditGoalForm';
import PropTypes from 'prop-types';

const EditGoalDialog = ({ goal, isOpen, onClose, onEditGoal }) => {
    return (
        <Dialog open={isOpen} onClose={onClose}>
            <DialogContent>
                <EditGoalForm onClose={onClose} onEditGoal={onEditGoal} goal={goal} />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Close</Button>
            </DialogActions>
        </Dialog>
    );
};

EditGoalDialog.propTypes = {
    goal: PropTypes.object.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onEditGoal: PropTypes.func.isRequired,
};

export default EditGoalDialog;
