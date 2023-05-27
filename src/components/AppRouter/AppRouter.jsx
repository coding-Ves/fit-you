import { Route, Routes } from 'react-router-dom';
import Dashboard from '../../views/Dashboard/Dashboard';
// import ExerciseDetails from '../../views/ExerciseDetails/ExerciseDetails';
import Home from '../../views/Home/Home';
import Login from '../../views/LogIn/LogIn';
import MyActivity from '../../views/MyActivity/MyActivity';
import MyGoals from '../../views/MyGoals/MyGoals';
import NotFound from '../../views/NotFound/NotFound';
import Profile from '../../views/Profile/Profile';
import Register from '../../views/Register/Register';
import Search from '../../views/Search/Search';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            {/* <Route path='/register/:step' element={<Register />} />  */}
            <Route path='/profile/:username' element={<Profile />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/my-activity' element={<MyActivity />} />
            <Route path='/my-goals' element={<MyGoals />} />
            <Route path='/search/:category' element={<Search />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
};

export default AppRouter;
