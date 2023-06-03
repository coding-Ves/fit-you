import Box from '@mui/material/Box';
import SideBarDrawer from '../../components/SideBarDrawer/SideBarDrawer';
import NewGoalForm from './../../components/Goals/CreateGoal/NewGoalForm';
import SingleActiveGoalCard from '../../components/Goals/SingleActiveGoalCard/SingleActiveGoalCard';

const MyGoals = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <SideBarDrawer />
            {/* <NewGoalForm /> */}
            <Box sx={{ display: 'flex', p: 1 }}>
                <SingleActiveGoalCard />
                <SingleActiveGoalCard />
                <SingleActiveGoalCard />
            </Box>
        </Box>
    );
};

export default MyGoals;
