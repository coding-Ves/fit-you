export const EXERCISE_DB_URL = 'https://exercisedb.p.rapidapi.com/exercises/';

// gets all Yoga poses in the DB
export const YOGA_DB_URL = 'https://yoga-api-nzy4.onrender.com/v1/poses';

export const TODAY = new Date().getTime();

export const DATE_OPTIONS = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
};

export const USER_ROLES = {
    user: 1,
    admin: 2,
    banned: 3,
};

export const DAY_TO_MILLISECONDS = 86400000;

export const DRAWER_WIDTH_OPEN = 220;

export const DRAWER_WIDTH_CLOSED = 20;

export const RESULTS_PER_PAGE = 9;

export const UNSPLASH_RANDOM_URL = 'https://source.unsplash.com/random?';

export const LOGIN_IMAGE = 'https://source.unsplash.com/random?fitness';

export const NOT_FOUND_IMAGE =
    'https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7888.jpg';

// <a href="https://www.freepik.com/free-photo/healthy-lunch-go-packed-lunch-box_5009132.htm#query=healthy&position=44&from_view=search&track=sph">Image by valeria_aksakova</a> on Freepik

export const HOME_HERO_IMAGE =
    'https://img.freepik.com/free-photo/healthy-lunch-go-packed-lunch-box_1220-4541.jpg?w=1380';

export const ACTIVITY_NAME_MAX_LENGTH = 25;

export const ACTIVITY_CATEGORIES = ['fitness', 'sports', 'cardio', 'yoga'];

export const REGISTRATION_STEPS = ['Basic Information', 'Health Information'];

export const USER_NAME_MAX_LENGTH = 20;

export const EXERCISES_UNITS = [
    'Minutes',
    'Seconds',
    'Repetitions',
    'Until Failure',
];

export const WEIGHT_UNIT = ['kg', 'lb', 'Body Weight'];

export const ACTIVITIES_PER_PAGE = 5;

export const RANDOM_AVATAR_STYLE =
    'https://api.dicebear.com/6.x/thumbs/svg?seed=';

// no sports involving animals are welcome in our app
export const SPORTS_CATEGORIES = {
    ACROBATIC: 'acrobatic',
    AIR: 'air',
    ARCHERY: 'archery',
    BOARD: 'board',
    BALL: 'ball',
    CLIMBING: 'climbing',
    CYCLING: 'cycling',
    COMBAT: 'combat',
    GYMNASTICS: 'gymnastics',
    ICE: 'ice',
    KITE: 'kite',
    MIXED_DISCIPLINE: 'mixed discipline',
    PARKOUR: 'parkour',
    RUNNING: 'running',
    SAILING: 'sailing',
    SNOW_SPORTS: 'snow sports',
    WALKING: 'walking',
    WATER: 'water',
    WEIGHTLIFTING: 'weightlifting',
    MOTORSPORTS: 'motorsports',
    OTHER: 'other',
};

export const GOAL_TYPES = ['Fitness', 'Cardio', 'Sports', 'Yoga', 'Other'];

export const  GOAL_STATUS = {
    ACTIVE: 'Active',
    COMPLETED: 'Completed',
    EXPIRED: 'Expired',
}

export const GOAL_TARGET_TYPES = {
    TOTAL_SESSIONS: 'Total sessions',
    TOTAL_REPETITIONS: 'Total repetitions',
    TOTAL_DISTANCE: 'Total distance',
    TOTAL_MINUTES: 'Total minutes',
    TOTAL_SECONDS: 'Total seconds',
};

export const GOAL_TYPES_TARGETS = {
    Fitness: [
        GOAL_TARGET_TYPES.TOTAL_SESSIONS,
        GOAL_TARGET_TYPES.TOTAL_REPETITIONS,
        GOAL_TARGET_TYPES.TOTAL_MINUTES,
        GOAL_TARGET_TYPES.TOTAL_SECONDS,
    ],
    Cardio: [
        GOAL_TARGET_TYPES.TOTAL_SESSIONS,
        GOAL_TARGET_TYPES.TOTAL_DISTANCE,
        GOAL_TARGET_TYPES.TOTAL_MINUTES,
    ],
    Sports: [GOAL_TARGET_TYPES.TOTAL_SESSIONS, GOAL_TARGET_TYPES.TOTAL_MINUTES],
    Yoga: [GOAL_TARGET_TYPES.TOTAL_SESSIONS, GOAL_TARGET_TYPES.TOTAL_MINUTES],
};

export const PROGRESS_PIE_COLORS = ['#175075', '#9eb2c3'];
