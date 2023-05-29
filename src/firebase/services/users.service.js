import {
    get,
    set,
    ref,
    query,
    equalTo,
    orderByChild,
    update,
} from 'firebase/database';
import { db } from '../firebase-config';
import { USER_ROLES } from '../../common/constants';

export const getUserByUsername = (username) => {
    return get(ref(db, `users/${username}`));
};

export const getUserData = (uid) => {
    return get(query(ref(db, 'users'), orderByChild('uid'), equalTo(uid)));
};

export const createUsername = (username, uid, email, phoneNumber) => {
    return set(ref(db, `users/${username}`), {
        username: username,
        uid: uid,
        email: email,
        phoneNumber: phoneNumber,
        createdOn: Date.now(),
        role: 1,
    });
};

export const updateUserDetails = (username, phoneNumber) => {
    const userDetails = {};
    userDetails[`/users/${username}/username`] = username;
    userDetails[`/users/${username}/email`] = email;
    userDetails[`/users/${username}/phoneNumber`] = phoneNumber;
    return update(ref(db), userDetails);
};

export const updateUserHealthInfo = (username, height, weight, age) => {
    const userBmiDetails = {};
    userBmiDetails[`/users/${username}/height`] = height;
    userBmiDetails[`/users/${username}/weight`] = weight;
    userBmiDetails[`/users/${username}/age`] = age;

    // calculate BMI
    const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
    userBmiDetails[`/users/${username}/bmi`] = bmi;

    return update(ref(db), userBmiDetails);
};

// upload user profile picture/avatar
export const uploadUserAvatar = (username, file) => {
    return update(ref(db), {
        [`/users/${username}/avatarURL`]: url,
    });
};
