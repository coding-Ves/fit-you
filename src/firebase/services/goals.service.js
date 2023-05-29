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

// // Fail 1:
// // Uncaught (in promise) Error: Index not defined, add ".indexOn": "username", for path "/goals", to the rules
// // Edit: it works after changing the rules for goals in Firebase
// export const getGoalsByUsername = (username) => {
//     return get(query(ref(db, 'goals'), orderByChild('username'), equalTo(username)))
//         .then((result) => {
//             if (!result.exists()) return [];
//             const goals = Object.values(result.val());

//             goals.forEach((goal) => {
//                 goal.createdOn = new Date(goal.createdOn).toLocaleString();
//             });

//             return goals;
//         });
// };

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
