import { equalTo, get, orderByChild, push, query, ref, update } from 'firebase/database';
import { db } from '../firebase-config';

export const addSportSession = (username, sportName, durationInMinutes) => {
    return push(ref(db, 'sportSessions'), {
        username,
        sportName,
        durationInMinutes,
        createdOn: Date.now(),
    }).then((result) => {
        // add the sport session id to the sport session object and the user's sportsSession objects,
        const id = result.key;
        const updateSportSession = {};
        updateSportSession[`/sportSessions/${id}/id`] = id;
        updateSportSession[`/users/${username}/sportSessions/${id}`] = true;

        return update(ref(db), updateSportSession)
            .then(() => id);
    });
};

export const getSportSessionById = (id) => {
    return get(ref(db, `sportSessions/${id}`)).then((result) => {
        if (!result.exists()) {
            throw new Error(`Sport session with id ${id} does not exist!`);
        }
        const sportSession = result.val();
        sportSession.createdOn = new Date(sportSession.createdOn).toLocaleString();
        return sportSession;
    });
};

export const getSportSessionsByUsername = (username) => {
    return get(query(ref(db, 'sportSessions'), orderByChild('username'), equalTo(username))).then(
        (result) => {
            if (!result.exists()) return [];
            const sportSessions = Object.values(result.val());

            sportSessions.forEach((sportSession) => {
                sportSession.createdOn = new Date(sportSession.createdOn).toLocaleString();
                sportSession.activityType = 'sport';
            });

            return sportSessions;
        }
    );
};

export const editSportSession = (sportId, newDurationInMinutes) => {
    const updateSportSession = {};
    updateSportSession[`/sportSessions/${sportId}/durationInMinutes`] = newDurationInMinutes;

    return update(ref(db), updateSportSession);
};

export const deleteSportSession = (sportId, username) => {
    const deleteSportSession = {};
    deleteSportSession[`/sportSessions/${sportId}`] = null;
    deleteSportSession[`/users/${username}/sportSessions/${sportId}`] = null;

    return update(ref(db), deleteSportSession);
};