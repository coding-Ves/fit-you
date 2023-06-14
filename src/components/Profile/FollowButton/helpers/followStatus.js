export const followStatus = ({ userData, userToFollow }) => {
    if (!userData.following) {
        return false;
    }
    if (userData?.following) {
        if (userData?.following.includes(userToFollow)) {
            return true;
        }
    }
    return false;
};
