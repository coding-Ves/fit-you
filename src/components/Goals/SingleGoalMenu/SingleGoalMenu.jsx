import { Delete, Edit, MoreVert } from '@mui/icons-material';
import { Box, IconButton, ListItemIcon, Menu, MenuItem, Tooltip } from '@mui/material';
import { useState } from 'react';
import DeleteGoalDialog from '../DeleteGoalDialog/DeleteGoalDialog';
import PropTypes from 'prop-types';

const SingleGoalMenu = ({ goalId, username, onDeleteGoal }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

    const handleDeleteClick = () => {
        setIsDeleteDialogOpen(true);
    };

    const handleDeleteCloseDialog = () => {
        setIsDeleteDialogOpen(false);
    };
    return (
        <Box sx={{ position: 'absolute' }}>
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
                <MenuItem>
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
            <DeleteGoalDialog
                onDeleteGoal={onDeleteGoal}
                goalId={goalId}
                username={username}
                isOpen={isDeleteDialogOpen}
                onClose={handleDeleteCloseDialog}
            />
        </Box>
    );
};

SingleGoalMenu.propTypes = {
    goalId: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    onDeleteGoal: PropTypes.func.isRequired,
};

export default SingleGoalMenu;
