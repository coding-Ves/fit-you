import { CircularProgress, Grid } from '@mui/material';
import * as React from 'react';
import ProfileAvatar from '../../components/Profile/ProfileAvatar/ProfileAvatar';
import ProfileDescription from '../../components/Profile/ProfileDescription/ProfileDescription.jsx';

import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getUserByUsername } from '../../firebase/services/users.service';
import Achievements from '../../components/Profile/Achievements/Achievements';

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
                <CircularProgress />
            ) : (
                <Grid align='center' spacing={2}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <ProfileAvatar userData={userData} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <ProfileDescription userData={userData} />
                        </Grid>
                    </Grid>
                    <Achievements />
                </Grid>
            )}
        </>
    );
};

export default Profile;
