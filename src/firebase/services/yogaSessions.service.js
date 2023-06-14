import {
    equalTo,
    get,
    orderByChild,
    push,
    query,
    ref,
    update,
} from 'firebase/database';
import { db } from '../firebase-config';

export const addYogaSession = (username, poseName, durationInMinutes) => {
    return push(ref(db, 'yogaSessions'), {
        username,
        poseName,
        durationInMinutes,
        createdOn: Date.now(),
    }).then((result) => {
        const id = result.key;
        const updateYogaSession = {};
        updateYogaSession[`/yogaSessions/${id}/id`] = id;
        updateYogaSession[`/users/${username}/yogaSessions/${id}`] = true;
        return update(ref(db), updateYogaSession).then(() => id);
    });
};

export const getYogaSessionById = (id) => {
    return get(ref(db, `yogaSessions/${id}`)).then((result) => {
        if (!result.exists()) {
            throw new Error(`Yoga session with id ${id} does not exist!`);
        }
        const yogaSessions = result.val();
        yogaSessions.createdOn = new Date(
            yogaSessions.createdOn
        ).toLocaleString();
        return yogaSessions;
    });
};

export const getYogaSessionsByUsername = (username) => {
    return get(
        query(
            ref(db, 'yogaSessions'),
            orderByChild('username'),
            equalTo(username)
        )
    ).then((result) => {
        if (!result.exists()) return [];
        const yogaSessions = Object.values(result.val());

        yogaSessions.forEach((yogaSession) => {
            yogaSession.createdOn = new Date(
                yogaSession.createdOn
            ).toLocaleString();
            yogaSession.activityType = 'yoga';
        });

        return yogaSessions;
    });
};

export const editYogaSession = (yogaId, newDurationInMinutes) => {
    const updateYogaSession = {};
    updateYogaSession[`/yogaSessions/${yogaId}/durationInMinutes`] = newDurationInMinutes;

    return update(ref(db), updateYogaSession);
};

export const deleteYogaSession = (yogaId, username) => {
    const deleteYogaSession = {};
    deleteYogaSession[`/yogaSessions/${yogaId}`] = null;
    deleteYogaSession[`/users/${username}/yogaSessions/${yogaId}`] = null;

    return update(ref(db), deleteYogaSession);
};