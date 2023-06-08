import { Delete, Edit, MoreVert } from '@mui/icons-material';
import {
    Box,
    IconButton,
    ListItemIcon,
    Menu,
    MenuItem,
    Tooltip,
} from '@mui/material';
import { useState } from 'react';
import DeleteGoalDialog from '../DeleteGoalDialog/DeleteGoalDialog';
import PropTypes from 'prop-types';
import EditGoalDialog from '../EditGoal/EditGoalDialog';

const SingleGoalMenu = ({ goal, onDeleteGoal, onEditGoal }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

    const handleDeleteClick = () => {
        setIsDeleteDialogOpen(true);
    };

    const handleDeleteCloseDialog = () => {
        setIsDeleteDialogOpen(false);
    };

    const handleEditClick = () => {
        setIsEditDialogOpen(true);
    };

    const handleEditCloseDialog = () => {
        setIsEditDialogOpen(false);
    };

    return (
        <Box>
            <Tooltip title='Goal menu'>
                <IconButton onClick={handleClick}>
                    <MoreVert />
                </IconButton>
            </Tooltip>

            <Menu
                anchorEl={anchorEl}
                id='single-goal-menu'
                open={open}
                onClose={handleClose}
                onClick={handleClose}
            >
                {/* <MenuItem>
                    <ListItemIcon>
                        <RemoveRedEyeSharp fontSize='small' />
                    </ListItemIcon>
                    View activities
                </MenuItem> */}
                <MenuItem onClick={() => handleEditClick(true)}>
                    <ListItemIcon>
                        <Edit fontSize='small' />
                    </ListItemIcon>
                    Edit
                </MenuItem>
                <MenuItem onClick={() => handleDeleteClick(true)}>
                    <ListItemIcon>
                        <Delete fontSize='small' />
                    </ListItemIcon>
                    Delete
                </MenuItem>
            </Menu>
            <EditGoalDialog
                goal={goal}
                isOpen={isEditDialogOpen}
                onClose={handleEditCloseDialog}
                onEditGoal={onEditGoal}
            />
            <DeleteGoalDialog
                onDeleteGoal={onDeleteGoal}
                goalId={goal.goalId}
                username={goal.username}
                isOpen={isDeleteDialogOpen}
                onClose={handleDeleteCloseDialog}
            />
        </Box>
    );
};

SingleGoalMenu.propTypes = {
    goal: PropTypes.object.isRequired,
    onDeleteGoal: PropTypes.func.isRequired,
    onEditGoal: PropTypes.func.isRequired,
};

export default SingleGoalMenu;
