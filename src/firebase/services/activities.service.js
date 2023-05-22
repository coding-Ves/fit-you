import { get, push, ref, update } from 'firebase/database';
import { db } from '../firebase-config';

export const addActivity = (userHandle, activityName, value, goalId) => {
    return push(ref(db, 'activities'), {
        userHandle,
        activityName,
        value,
        createdOn: Date.now(),
    }).then((result) => {
        // add the activity id to the activity, the user's activities objects,
        // and the goal it belongs to
        const activityId = result.key;
        const updateActivity = {};
        updateActivity[`/activities/${activityId}/activityId`] = activityId;
        updateActivity[`/users/${userHandle}/activities/${activityId}`] = true;
        updateActivity[`/goals/${goalId}/activities/${activityId}`] = true;
        // Also need to update the goal's progress by the value of the activity
        return update(ref(db), updateActivity);
    });
};

export const getActivityById = (activityId) => {
    return get(ref(db, `activities/${activityId}`)).then((result) => {
        if (!result.exists()) {
            throw new Error(`Activity with id ${activityId} does not exist!`);
        }

        const activity = result.val();
        activity.createdOn = new Date(activity.createdOn).toLocaleString();
        return activity;
    });
};
