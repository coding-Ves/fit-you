import { get, push, ref, update } from 'firebase/database';
import { db } from '../firebase-config';
import { GOAL_STATUS, GOAL_TARGET_TYPES } from '../../common/constants';
import dayjs from 'dayjs';

export const addGoal = (username, goalName, goalType, goalTargetType, targetValue, targetDate) => {
    return push(ref(db, 'goals'), {
        username,
        goalName,
        goalType,
        goalTargetType,
        targetValue,
        targetDate,
        createdOn: Date.now(),
        goalProgress: 0,
        goalStatus: GOAL_STATUS.ACTIVE,
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
        !goal.activities
            ? (goal.activities = [])
            : (goal.activities = Object.keys(goal.activities));
        return goal;
    });
};

export const getGoalsByUsername = (username) => {
    return get(ref(db, 'goals')).then((result) => {
        if (!result.exists()) return [];

        const goals = Object.values(result.val());
        const filteredGoals = goals.filter((goal) => goal.username === username);
        return filteredGoals;
    });
};

export const addActivityToGoal = (
    goalId,
    activityId,
    category,
    goalProgress,
    goalTargetType,
    addedProgress
) => {
    const updateData = {};
    updateData[`/goals/${goalId}/activities/${activityId}`] = true;

    if (category === 'fitness') {
        updateData[`/fitnessExercises/${activityId}/goals/${goalId}`] = true;
    } else if (category === 'sports') {
        updateData[`/sportSessions/${activityId}/goals/${goalId}`] = true;
    } else if (category === 'cardio') {
        updateData[`/cardioSessions/${activityId}/goals/${goalId}`] = true;
    }

    switch (goalTargetType) {
    case GOAL_TARGET_TYPES.TOTAL_SESSIONS:
        updateData[`/goals/${goalId}/goalProgress`] = goalProgress + 1;
        break;
    case GOAL_TARGET_TYPES.TOTAL_REPETITIONS:
        updateData[`/goals/${goalId}/goalProgress`] = goalProgress + addedProgress;
        break;
    case GOAL_TARGET_TYPES.TOTAL_DISTANCE:
        updateData[`/goals/${goalId}/goalProgress`] = goalProgress + addedProgress;
        break;
    case GOAL_TARGET_TYPES.TOTAL_MINUTES:
        updateData[`/goals/${goalId}/goalProgress`] = goalProgress + addedProgress;
        break;
    case GOAL_TARGET_TYPES.TOTAL_SECONDS:
        updateData[`/goals/${goalId}/goalProgress`] = goalProgress + addedProgress;
        break;
    }

    return update(ref(db), updateData);
};

export const deleteGoal = (goalId, username) => {
    const deleteGoal = {};
    deleteGoal[`/goals/${goalId}`] = null;
    deleteGoal[`/users/${username}/goals/${goalId}`] = null;

    return update(ref(db), deleteGoal);
};

export const editGoal = (goalId, newGoalName, newGoalTargetValue, newGoalDateTarget) => {
    const updateGoal = {};
    updateGoal[`/goals/${goalId}/goalName`] = newGoalName;
    updateGoal[`/goals/${goalId}/targetValue`] = newGoalTargetValue;
    updateGoal[`/goals/${goalId}/targetDate`] = newGoalDateTarget;

    return update(ref(db), updateGoal);
};

export const checkGoalProgress = (goalId, goalProgress, goalTargetValue) => {
    if (goalProgress >= goalTargetValue) {
        return updateGoalStatus(goalId, GOAL_STATUS.COMPLETED);
    } else {
        return updateGoalStatus(goalId, GOAL_STATUS.ACTIVE);
    }
};

export const checkGoalExpired = (goalId, goalDateTarget) => {
    if (dayjs().valueOf() > goalDateTarget) {
        return updateGoalStatus(goalId, GOAL_STATUS.EXPIRED);
    }
};

export const updateGoalStatus = (goalId, newGoalStatus) => {
    const updateGoal = {};
    updateGoal[`/goals/${goalId}/goalStatus`] = newGoalStatus;

    return update(ref(db), updateGoal);
};
