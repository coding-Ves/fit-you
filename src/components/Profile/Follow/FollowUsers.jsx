import React, { useEffect, useState } from 'react';
import getFollowDetails from '../../UserList/helpers/getFollowDetails';
import UserList from '../../UserList/UserList';

const FollowUser = ({ followUsers }) => {
    const [allUserInfo, setAllUserInfo] = useState([]);

    useEffect(() => {
        const fetchFollowDetails = () => {
            getFollowDetails(followUsers)
                .then((followDetails) => {
                    setAllUserInfo(followDetails);
                })
                .catch((error) => {
                    console.log(error);
                });
        };

        fetchFollowDetails();
    }, [followUsers]);

    return <UserList followUserList={allUserInfo} />;
};

export default FollowUser;
