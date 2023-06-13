import { Grid } from '@mui/material';
import * as React from 'react';
import ProfileAvatar from '../../components/Profile/ProfileAvatar/ProfileAvatar';
import ProfileDescription from '../../components/Profile/ProfileDescription/ProfileDescription.jsx';

import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getUserByUsername } from '../../firebase/services/users.service';
import Achievements from '../../components/Profile/Achievements/Achievements';
import ProfileInformation from '../../components/Profile/ProfileInformation/ProfileInformation';
import ProfileActivity from '../../components/Profile/ProfileActivity/ProfileActivity';
import Loader from '../../components/Loader/Loader';

const Profile = () => {
    const [userData, setUserData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const { username } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        setIsLoading(true);
        getUserByUsername(username)
            .then((snapshot) => {
                if (!snapshot.val()) {
                    throw new Error("User doesn't exist");
                }
                setUserData(() => snapshot.val());

                setIsLoading(false);
            })
            .catch(() => {
                setIsLoading(false);
                navigate('/404');
            });
    }, [username, navigate]);

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <Grid align='center'>
                    <ProfileInformation userData={userData} />
                    <ProfileActivity userData={userData} />
                </Grid>
            )}
        </>
    );
};

export default Profile;
