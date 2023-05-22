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
import { userRoles } from '../../common/constants';

export const getUserByHandle = (handle) => {
    return get(ref(db, `users/${handle}`));
};

export const getUserData = (uid) => {
    return get(query(ref(db, 'users'), orderByChild('uid'), equalTo(uid)));
};

export const createUserHandle = (handle, uid, email, phoneNumber) => {
    return set(ref(db, `users/${handle}`), {
        handle,
        uid,
        email,
        phoneNumber,
        createdOn: Date.now(),
        role: userRoles.user,
    });
};

export const updateUserDetails = (handle, firstName, lastName, phoneNumber) => {
    const userDetails = {};
    userDetails[`/users/${handle}/firstName`] = firstName;
    userDetails[`/users/${handle}/lastName`] = lastName;
    userDetails[`/users/${handle}/phoneNumber`] = phoneNumber;
    return update(ref(db), userDetails);
};

export const updateUserBmiDetails = (handle, height, weight, age, gender) => {
    const userBmiDetails = {};
    userBmiDetails[`/users/${handle}/height`] = height;
    userBmiDetails[`/users/${handle}/weight`] = weight;
    userBmiDetails[`/users/${handle}/age`] = age;
    userBmiDetails[`/users/${handle}/gender`] = gender;

    // calculate BMI
    const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
    userBmiDetails[`/users/${handle}/bmi`] = bmi;

    return update(ref(db), userBmiDetails);
};
