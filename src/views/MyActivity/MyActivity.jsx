
import Box from '@mui/material/Box';
import { mainListItems, secondaryListItems } from '../../components/SideBarDrawer/ListItems';
import SideBarDrawer from '../../components/SideBarDrawer/SideBarDrawer';

const MyActivity = () => {

    return (
        <Box sx={{ display: 'flex' }}>
            <SideBarDrawer
                variant='permanent'
                mainListItems={mainListItems}
                secondaryListItems={secondaryListItems}
            />
        </Box>
    );
};

export default MyActivity;
