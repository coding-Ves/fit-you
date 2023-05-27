import { equalTo, get, orderByChild, push, query, ref, update } from 'firebase/database';
import { db } from '../firebase-config';

// unsure what we should use as a metric - distance and/or time.
export const addCardioSession = (username, cardioName, distance, durationInMinutes) => {
    return push(ref(db, 'cardioSessions'), {
        username,
        cardioName,
        distance,
        durationInMinutes,
        createdOn: Date.now(),
    }).then((result) => {
        // add the cardio session id to the cardio session object and the user's cardioSession objects
        const cardioSessionId = result.key;
        const updateCardioSession = {};
        updateCardioSession[`/cardioSessions/${cardioSessionId}/cardioSessionId`] = cardioSessionId;
        updateCardioSession[`/users/${username}/cardioSessions/${cardioSessionId}`] = true;
        return update(ref(db), updateCardioSession);
    });
};

export const getCardioSessionById = (cardioSessionId) => {
    return get(ref(db, `cardioSessions/${cardioSessionId}`)).then((result) => {
        if (!result.exists()) {
            throw new Error(`Cardio session with id ${cardioSessionId} does not exist!`);
        }
        const cardioSession = result.val();
        cardioSession.createdOn = new Date(cardioSession.createdOn).toLocaleString();
        return cardioSession;
    });
};

export const getCardioSessionsByUsername = (username) => {
    return get(query(ref(db, 'cardioSessions'), orderByChild('username'), equalTo(username))).then(
        (result) => {
            if (!result.exists()) return [];
            const cardioSessions = Object.values(result.val());

            cardioSessions.forEach((cardioSession) => {
                cardioSession.createdOn = new Date(cardioSession.createdOn).toLocaleString();
            });

            return cardioSessions;
        }
    );
};
