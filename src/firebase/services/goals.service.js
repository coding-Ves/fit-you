import { get, push, ref, update } from 'firebase/database';
import { db } from '../firebase-config';

export const addGoal = (userHandle, goalName, targetValue, targetDate) => {
    return push(ref(db, 'goals'), {
        userHandle,
        goalName,
        targetValue,
        targetDate,
        createdOn: Date.now(),
    }).then((result) => {
        // add the goal id to the goal and user goals objects
        const goalId = result.key;
        const updateGoal = {};
        updateGoal[`/goals/${goalId}/goalId`] = goalId;
        updateGoal[`/users/${userHandle}/goals/${goalId}`] = true;
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
