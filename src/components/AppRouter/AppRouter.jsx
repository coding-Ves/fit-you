import { Routes, Route } from 'react-router-dom';
import Home from '../../views/Home/Home';
import Login from '../../views/LogIn/LogIn';
import Register from '../../views/Register/Register';
import Profile from '../../views/Profile/Profile';
import Dashboard from '../../views/Dashboard/Dashboard';
import MyActivity from '../../views/MyActivity/MyActivity';
import MyGoals from '../../views/MyGoals/MyGoals';
import NotFound from '../../views/NotFound/NotFound';
import ExerciseDetails from '../../views/ExerciseDetails/ExerciseDetails';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            {/* <Route path='/register/:step' element={<Register />} />  */}
            <Route path='/profile/:userId' element={<Profile />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/my-activity' element={<MyActivity />} />
            <Route path='/my-goals' element={<MyGoals />} />
            <Route path='/exercises/:exercise' element={<ExerciseDetails/>} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
};

export default AppRouter;
