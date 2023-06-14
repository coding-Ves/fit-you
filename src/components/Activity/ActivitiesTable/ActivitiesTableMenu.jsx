import { Delete, Edit, MoreVert } from '@mui/icons-material';
import { Box, IconButton, ListItemIcon, Menu, MenuItem, Tooltip } from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';
import EditActivityDialog from '../EditActivity/EditActivityDialog';
import DeleteActivityDialog from '../DeleteActivity/DeleteActivityDialog';

const ActivitiesTableMenu = ({ activity, onDeleteActivity, onEditActivity }) => {
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
            <Tooltip title='Activity menu'>
                <IconButton onClick={handleClick}>
                    <MoreVert />
                </IconButton>
            </Tooltip>

            <Menu
                anchorEl={anchorEl}
                id='activities-table-menu'
                open={open}
                onClose={handleClose}
                onClick={handleClose}
            >
                {!activity.fitnessExerciseName && (
                    <MenuItem onClick={() => handleEditClick(true)}>
                        <ListItemIcon>
                            <Edit fontSize='small' />
                        </ListItemIcon>
                        Edit
                    </MenuItem>
                )}


                <MenuItem onClick={() => handleDeleteClick(true)}>
                    <ListItemIcon>
                        <Delete fontSize='small' />
                    </ListItemIcon>
                    Delete
                </MenuItem>
            </Menu>

            <EditActivityDialog
                activity={activity}
                isOpen={isEditDialogOpen}
                onClose={handleEditCloseDialog}
                onEditActivity={onEditActivity}
            />
            <DeleteActivityDialog
                onDeleteActivity={onDeleteActivity}
                activity={activity}
                isOpen={isDeleteDialogOpen}
                onClose={handleDeleteCloseDialog}
            />
        </Box>
    );
};

ActivitiesTableMenu.propTypes = {
    activity: PropTypes.object.isRequired,
    onDeleteActivity: PropTypes.func.isRequired,
    onEditActivity: PropTypes.func.isRequired,
};

export default ActivitiesTableMenu;
