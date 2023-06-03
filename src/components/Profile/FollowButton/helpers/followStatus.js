import { useContext } from 'react';
import AuthContext from '../../../../contexts/AuthContext';

// If you're already following the user, return true, else return false
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
