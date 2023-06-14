import { getAllUsers } from '../../../firebase/services/users.service';

export const searchFriends = (searchQuery) => {
    return getAllUsers()
        .then((userData) => {
            const searchedUsers = userData?.filter((user) => {
                return user?.username?.toLowerCase().includes(searchQuery);
            });

            return searchedUsers;
        })
        .catch((error) => {
            console.log(error);
        });
};

export default searchFriends;
