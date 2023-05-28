import Box from '@mui/material/Box';
import SideBarDrawer from '../../components/SideBarDrawer/SideBarDrawer';
import NewGoalForm from './../../components/Goals/CreateGoal/NewGoalForm';

const MyGoals = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <SideBarDrawer />
            <NewGoalForm />
        </Box>
    );
};

export default MyGoals;
