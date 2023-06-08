import { Delete, Edit, MoreVert,  } from '@mui/icons-material';
import { Box, IconButton, ListItemIcon, Menu, MenuItem, Tooltip } from '@mui/material';
import { useState } from 'react';

const SingleGoalMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
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
                <MenuItem>
                    <ListItemIcon>
                        <Delete fontSize='small' />
                    </ListItemIcon>
                    Delete
                </MenuItem>
            </Menu>
        </Box>
    );
};

export default SingleGoalMenu;
