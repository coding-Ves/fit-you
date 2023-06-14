import { equalTo, get, orderByChild, push, query, ref, update } from 'firebase/database';
import { db } from '../firebase-config';

export const addFitnessExercise = (username, fitnessExerciseName, formInputs) => {
    const sets = formInputs.map((input) => ({
        reps: input.reps,
        exercisesUnits: input.exercisesUnits,
        weight: input.weight,
        weightUnit: input.weightUnit,
    }));

    const newFitnessExerciseRef = push(ref(db, 'fitnessExercises'), {
        username,
        fitnessExerciseName,
        sets,
        createdOn: Date.now(),
    });

    const id = newFitnessExerciseRef.key;

    const updateFitnessExercise = {};
    updateFitnessExercise[`/fitnessExercises/${id}/id`] = id;
    updateFitnessExercise[`/users/${username}/fitnessExercises/${id}`] = true;

    return update(ref(db), updateFitnessExercise)
        .then(() => id);
};


export const getFitnessExerciseById = (id) => {
    return get(ref(db, `fitnessExercises/${id}`)).then((result) => {
        if (!result.exists()) {
            throw new Error(`Fitness exercise with id ${id} does not exist!`);
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
            fitnessExercise.activityType = 'fitness';
        });

        return fitnessExercises;
    });
};

export const editFitnessExercise = (exerciseId, newSets) => {
    const updateFitnessExercise = {};
    updateFitnessExercise[`/fitnessExercises/${exerciseId}/sets`] = newSets;

    return update(ref(db), updateFitnessExercise);
};

export const deleteFitnessExercise = (exerciseId, username) => {
    const deleteFitnessExercise = {};
    deleteFitnessExercise[`/fitnessExercises/${exerciseId}`] = null;
    deleteFitnessExercise[`/users/${username}/fitnessExercises/${exerciseId}`] = null;

    return update(ref(db), deleteFitnessExercise);
};