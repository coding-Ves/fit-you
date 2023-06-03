import { Button } from '@mui/material';
import { Favorite, HeartBroken } from '@mui/icons-material';
import { useState, useEffect, useContext } from 'react';
import AuthContext from '../../../contexts/AuthContext';
import {
    followUser,
    unfollowUser,
} from '../../../firebase/services/users.service';

const FollowButton = ({ userToFollow }) => {
    const { userData } = useContext(AuthContext);
    const [followed, setFollowed] = useState(false);

    useEffect(() => {
        if (userData && userToFollow) {
            // Check if userToFollow has already been followed by userData
            const isFollowed = followStatus({ userData, userToFollow });
            setFollowed(isFollowed);
        }
    }, [userData, userToFollow]);

    const followStatus = ({ userData, userToFollow }) => {
        if (!userData.following) {
            return false;
        }
        // Get the list of users that the logged in user is following
        const followedUsers = Object.keys(userData.following);
        if (followedUsers.includes(userToFollow)) {
            return true;
        }
        return false;
    };

    // Follow user if they are not already followed
    const handleFollow = () => {
        followUser(userData.username, userToFollow)
            .then(() => {
                setFollowed(true);
            })
            .catch((error) => {
                console.error('Error following user:', error);
            });
    };

    // Unfollow user if they are already followed
    const handleUnfollow = () => {
        unfollowUser(userData.username, userToFollow)
            .then(() => {
                setFollowed(false);
            })
            .catch((error) => {
                console.error('Error unfollowing user:', error);
            });
    };

    if (!userData || !userToFollow) {
        return null; // Return null or a fallback component if userData or userToFollow is not available
    }

    return (
        <Button
            variant={followed ? 'contained' : 'outlined'}
            startIcon={followed ? <HeartBroken /> : <Favorite />}
            onClick={followed ? handleUnfollow : handleFollow}
        >
            {followed ? 'Unfollow' : 'Follow'}
        </Button>
    );
};

export default FollowButton;
