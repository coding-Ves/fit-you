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

    const fitnessExerciseId = newFitnessExerciseRef.key;

    const updateFitnessExercise = {};
    updateFitnessExercise[`/fitnessExercises/${fitnessExerciseId}/fitnessExerciseId`] = fitnessExerciseId;
    updateFitnessExercise[`/users/${username}/fitnessExercises/${fitnessExerciseId}`] = true;

    return update(ref(db), updateFitnessExercise)
        .then(() => fitnessExerciseId);
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

export const addFitnessExerciseToGoal = (goalId, fitnessExerciseId) => {
    const updateData = {};

    // Adds the fitnessExerciseId to the goal's activities
    updateData[`/goals/${goalId}/activities/${fitnessExerciseId}`] = true;

    // Adds the goalId to the fitness exercise's goals
    updateData[`/fitnessExercises/${fitnessExerciseId}/goals/${goalId}`] = true;

    return update(ref(db), updateData);
};

