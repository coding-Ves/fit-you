import Box from '@mui/material/Box';
import SearchExercises from '../../components/Activity/Exercises/SearchExercises';
import SideBarDrawer from '../../components/SideBarDrawer/SideBarDrawer';
import { ExercisesProvider } from '../../contexts/ExercisesContext';
import Exercises from '../../components/Activity/Exercises/Exercises';

const MyActivity = () => {

    return (
        <ExercisesProvider>
            <Box sx={{ display: 'flex' }}>
                <SideBarDrawer />
                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[100]
                                : theme.palette.grey[800],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                    }}
                >
                    <SearchExercises />
                    <Exercises />
                </Box>
            </Box>
        </ExercisesProvider>
    );
};

export default MyActivity;
