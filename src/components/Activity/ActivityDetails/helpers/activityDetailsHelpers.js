import { EXERCISE_DB_URL } from '../../../../common/constants';
import { exerciseOptions, fetchDataFromExerciseDB } from '../../../../services/exercises.service';

export const fitnessExerciseDetailData = (activityId) => {
    return fetchDataFromExerciseDB(`${EXERCISE_DB_URL}exercise/${activityId}`, exerciseOptions)
        .then((detailData) => {
            return detailData;
        })
        .catch((error) => {
            console.log(error);
        });
};

export const targetMuscleFitnessExercisesData = (fitnessExerciseDetailData) => {
    return fetchDataFromExerciseDB(`${EXERCISE_DB_URL}target/${fitnessExerciseDetailData.target}`, exerciseOptions)
        .then((targetData) => {
            return targetData;
        })
        .catch((error) => {
            console.log(error);
        });
};

export const equipmentFitnessExercisesData = (fitnessExerciseDetailData) => {
    return fetchDataFromExerciseDB(`${EXERCISE_DB_URL}equipment/${fitnessExerciseDetailData.equipment}`, exerciseOptions)
        .then((equipmentData) => {
            return equipmentData;
        })
        .catch((error) => {
            console.log(error);
        });
};
