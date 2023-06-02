import { Route, Routes } from 'react-router-dom';
import ActivityDetails from '../../views/ActivityDetails/ActivityDetails';
import Dashboard from '../../views/Dashboard/Dashboard';
import Home from '../../views/Home/Home';
import Login from '../../views/LogIn/LogIn';
import MyActivity from '../../views/MyActivity/MyActivity';
import MyGoals from '../../views/MyGoals/MyGoals';
import NotFound from '../../views/NotFound/NotFound';
import Profile from '../../views/Profile/Profile';
import Register from '../../views/Register/Register';
import RegisterHealth from '../../views/Register/RegisterHealth';
import Search from '../../views/Search/Search';
import FindFriends from '../../views/FindFriends/FindFriends';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/health-info' element={<RegisterHealth />} />
            {/* <Route path='/register/:step' element={<Register />} />  */}
            <Route path='/profile/:username' element={<Profile />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/friends' element={<FindFriends />} />
            <Route path='/my-activity' element={<MyActivity />} />
            <Route path='/my-goals' element={<MyGoals />} />
            <Route path='/search/:category' element={<Search />} />
            <Route path='/search/:category/:id' element={<ActivityDetails />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
};

export default AppRouter;
