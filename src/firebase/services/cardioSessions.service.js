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
        const id = result.key;
        const updateCardioSession = {};
        updateCardioSession[`/cardioSessions/${id}/id`] = id;
        updateCardioSession[`/users/${username}/cardioSessions/${id}`] = true;
        return update(ref(db), updateCardioSession)
            .then(() => id);
    });
};

export const getCardioSessionById = (id) => {
    return get(ref(db, `cardioSessions/${id}`)).then((result) => {
        if (!result.exists()) {
            throw new Error(`Cardio session with id ${id} does not exist!`);
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

export const editCardioSession = (cardioId, newDurationInMinutes, newDistance) => {
    const updateCardioSession = {};
    updateCardioSession[`/cardioSessions/${cardioId}/durationInMinutes`] = newDurationInMinutes;
    updateCardioSession[`/cardioSessions/${cardioId}/distance`] = newDistance;

    return update(ref(db), updateCardioSession);
};

export const deleteCardioSession = (cardioId, username) => {
    const deleteCardioSession = {};
    deleteCardioSession[`/cardioSessions/${cardioId}`] = null;
    deleteCardioSession[`/users/${username}/cardioSessions/${cardioId}`] = null;

    return update(ref(db), deleteCardioSession);
};