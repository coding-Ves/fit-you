import {
    fetchDataFromExerciseDB,
    exerciseOptions,
} from '../../../services/exercises.service';
import { EXERCISE_DB_URL } from '../../../common/constants';

export const searchFitness = (searchQuery) => {
    return fetchDataFromExerciseDB(EXERCISE_DB_URL, exerciseOptions)
        .then((exercisesData) => {
            const searchedExercises = exercisesData.filter((exercise) => {
                return (
                    exercise.name.toLowerCase().includes(searchQuery) ||
                    exercise.target.toLowerCase().includes(searchQuery) ||
                    exercise.bodyPart.toLowerCase().includes(searchQuery) ||
                    exercise.equipment.toLowerCase().includes(searchQuery)
                );
            });

            return searchedExercises;
        })
        .catch((error) => {
            console.log(error);
        });
};
