import { get, orderByChild, push, query, ref, update, equalTo } from 'firebase/database';
import { db } from '../firebase-config';

export const addGoal = (
    username,
    goalName,
    goalDescription,
    targetValue,
    targetDate
) => {
    return push(ref(db, 'goals'), {
        username: username,
        goalName,
        goalDescription,
        targetValue,
        targetDate,
        createdOn: Date.now(),
    }).then((result) => {
        // add the goal id to the goal and user goals objects
        const goalId = result.key;
        const updateGoal = {};
        updateGoal[`/goals/${goalId}/goalId`] = goalId;
        updateGoal[`/users/${username}/goals/${goalId}`] = true;
        return update(ref(db), updateGoal);
    });
};

export const getGoalById = (goalId) => {
    return get(ref(db, `goals/${goalId}`)).then((result) => {
        if (!result.exists()) {
            throw new Error(`Goal with id ${goalId} does not exist!`);
        }

        const goal = result.val();
        goal.createdOn = new Date(goal.createdOn).toLocaleString();
        !goal.activities
            ? (goal.activities = [])
            : (goal.activities = Object.keys(goal.activities));
        return goal;
    });
};

export const getGoalsByUsername = (username) => {
    return get(ref(db, 'goals'))
        .then((result) => {
            if (!result.exists()) return [];

            const goals = Object.values(result.val());

            const filteredGoals = goals.filter((goal) => goal.username === username);

            filteredGoals.forEach((goal) => {
                goal.createdOn = new Date(goal.createdOn).toLocaleString();
            });

            return filteredGoals;
        });
};

export const addActivityToGoal = (goalId, activityId, category) => {
    const updateData = {};
    updateData[`/goals/${goalId}/activities/${activityId}`] = true;

    if (category === 'fitness') {
        updateData[`/fitnessExercises/${activityId}/goals/${goalId}`] = true;
    } else if (category === 'sports') {
        updateData[`/sportSessions/${activityId}/goals/${goalId}`] = true;
    } else if (category === 'cardio') {
        updateData[`/cardioSessions/${activityId}/goals/${goalId}`] = true;
    }

    return update(ref(db), updateData);
};