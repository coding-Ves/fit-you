import { Navigate, Route, Routes } from 'react-router-dom';
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
import BMI from '../../views/BMI/BMI';
import AuthenticatedRoute from './AuthenticatedRoute/AuthenticatedRoute';
import { auth } from '../../firebase/firebase-config';
import { useAuthState } from 'react-firebase-hooks/auth';

export const AppRouter = () => {
    const [user] = useAuthState(auth);

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route
                path='/login'
                element={!user ? <Login /> : <Navigate to='/dashboard' />}
            />
            <Route path='/register' element={<Register />} />
            <Route
                path='/health-info'
                element={
                    <AuthenticatedRoute>
                        <RegisterHealth />
                    </AuthenticatedRoute>
                }
            />
            {/* TODO: handle this route */}
            {/* <Route path='/register/:step' element={<Register />} />  */}
            <Route
                path='/profile/:username'
                element={
                    <AuthenticatedRoute>
                        <Profile />
                    </AuthenticatedRoute>
                }
            />
            <Route
                path='/dashboard'
                element={
                    <AuthenticatedRoute>
                        <Dashboard />
                    </AuthenticatedRoute>
                }
            />
            <Route
                path='/friends'
                element={
                    <AuthenticatedRoute>
                        <FindFriends />
                    </AuthenticatedRoute>
                }
            />
            <Route
                path='/bmi'
                element={
                    <AuthenticatedRoute>
                        <BMI />
                    </AuthenticatedRoute>
                }
            />
            <Route
                path='/my-activity'
                element={
                    <AuthenticatedRoute>
                        <MyActivity />
                    </AuthenticatedRoute>
                }
            />
            <Route
                path='/my-goals'
                element={
                    <AuthenticatedRoute>
                        <MyGoals />
                    </AuthenticatedRoute>
                }
            />
            <Route
                path='/search/:category'
                element={
                    <AuthenticatedRoute>
                        <Search />
                    </AuthenticatedRoute>
                }
            />
            <Route
                path='/search/:category/:id'
                element={
                    <AuthenticatedRoute>
                        <ActivityDetails />
                    </AuthenticatedRoute>
                }
            />
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
};

export default AppRouter;
