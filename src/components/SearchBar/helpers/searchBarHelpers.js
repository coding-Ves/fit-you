import cardioData from '../../../common/cardioData';
import { EXERCISE_DB_URL } from '../../../common/constants';
import sportsData from '../../../common/sportsData';
import {
    exerciseOptions,
    fetchDataFromExerciseDB,
} from '../../../services/exercises.service';
import { fetchDataFromYogaDB } from '../../../services/yoga.service';

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

export const searchSports = (searchQuery) => {
    const searchedSports = sportsData.filter((sport) => {
        return (
            sport.name.toLowerCase().includes(searchQuery) ||
            sport.category.toLowerCase().includes(searchQuery)
        );
    });

    return searchedSports;
};

export const searchCardio = (searchQuery) => {
    const searchedCardio = cardioData.filter((cardio) => {
        return (
            cardio.name.toLowerCase().includes(searchQuery) ||
            cardio.category.toLowerCase().includes(searchQuery)
        );
    });

    return searchedCardio;
};

export const searchYoga = (searchQuery) => {
    return fetchDataFromYogaDB()
        .then((yogaData) => {
            const searchedYogaPoses = yogaData.filter((yogaPose) => {
                return (
                    yogaPose.english_name.toLowerCase().includes(searchQuery) ||
                    yogaPose.sanskrit_name_adapted
                        .toLowerCase()
                        .includes(searchQuery)
                );
            });
            console.log(searchedYogaPoses);
            return searchedYogaPoses;
        })
        .catch((error) => {
            console.log(error);
        });
};
