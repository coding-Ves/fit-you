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
        const sportSessionId = result.key;
        const updateSportSession = {};
        updateSportSession[`/sportSessions/${sportSessionId}/sportSessionId`] = sportSessionId;
        updateSportSession[`/users/${username}/sportSessions/${sportSessionId}`] = true;
        return update(ref(db), updateSportSession);
    });
};

export const getSportSessionById = (sportSessionId) => {
    return get(ref(db, `sportSessions/${sportSessionId}`)).then((result) => {
        if (!result.exists()) {
            throw new Error(`Sport session with id ${sportSessionId} does not exist!`);
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
            });

            return sportSessions;
        }
    );
};
