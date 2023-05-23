import Box from '@mui/material/Box';
import ListOfExercises from '../../components/Exercises/ListOfExercises';
import SearchExercises from '../../components/Exercises/SearchExercises';
import SideBarDrawer from '../../components/SideBarDrawer/SideBarDrawer';
import { ExercisesProvider } from '../../contexts/ExercisesContext';

const Exercises = () => {
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
                    <ListOfExercises />
                </Box>
            </Box>
        </ExercisesProvider>
    );
};

export default Exercises;
