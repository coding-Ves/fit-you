import { getUserByUsername } from '../../../firebase/services/users.service';

export const getFollowDetails = (followingArray) => {
    if (!followingArray || typeof followingArray !== 'object') {
        return Promise.resolve([]);
    }

    const follow = Object.keys(followingArray);

    const getUserPromises = follow.map((username) => {
        return getUserByUsername(username);
    });

    const allFollowInfo = Promise.all(getUserPromises).then((snapshots) => {
        const followDetails = snapshots.map((snapshot) => snapshot.val());
        return followDetails;
    });

    return allFollowInfo;
};

export default getFollowDetails;
