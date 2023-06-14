import React, { useEffect, useState } from 'react';
import UserList from '../../UserList/UserList';
import getFollowDetails from '../../UserList/helpers/getFollowDetails';

import { PropTypes } from 'prop-types';

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

FollowUser.propTypes = {
    followUsers: PropTypes.object,
};
