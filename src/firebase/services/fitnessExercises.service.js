import { equalTo, get, orderByChild, push, query, ref, update } from 'firebase/database';
import { db } from '../firebase-config';

// fitnessExercise maybe? idk

// the sets parameter is an array of objects, where each object has a weight and reps property:
// {
//     1: {
//         reps: 5,
//         weight: 50
//     },
//     2: {
//         reps: 5,
//         weight: 50
//     },
//     3: {
//         reps: 5,
//         weight: 50
//     }
// }

export const addFitnessExercise = (username, fitnessExerciseName, sets) => {
    return push(ref(db, 'fitnessExercises'), {
        username,
        fitnessExerciseName,
        sets,
        createdOn: Date.now(),
    }).then((result) => {
        // add the fitness exercise id to the fitness exercise object and the user's fitnessExercise objects
        const fitnessExerciseId = result.key;
        const updateFitnessExercise = {};
        updateFitnessExercise[`/fitnessExercises/${fitnessExerciseId}/fitnessExerciseId`] =
            fitnessExerciseId;
        updateFitnessExercise[`/users/${username}/fitnessExercises/${fitnessExerciseId}`] = true;
        return update(ref(db), updateFitnessExercise);
    });
};

export const getFitnessExerciseById = (fitnessExerciseId) => {
    return get(ref(db, `fitnessExercises/${fitnessExerciseId}`)).then((result) => {
        if (!result.exists()) {
            throw new Error(`Fitness exercise with id ${fitnessExerciseId} does not exist!`);
        }
        const fitnessExercise = result.val();
        fitnessExercise.createdOn = new Date(fitnessExercise.createdOn).toLocaleString();
        return fitnessExercise;
    });
};

export const getFitnessExercisesByUsername = (username) => {
    return get(
        query(ref(db, 'fitnessExercises'), orderByChild('username'), equalTo(username))
    ).then((result) => {
        if (!result.exists()) return [];
        const fitnessExercises = Object.values(result.val());

        fitnessExercises.forEach((fitnessExercise) => {
            fitnessExercise.createdOn = new Date(fitnessExercise.createdOn).toLocaleString();
        });

        return fitnessExercises;
    });
};
