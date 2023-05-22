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