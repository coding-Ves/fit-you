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
