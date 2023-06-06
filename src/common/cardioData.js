import { v4 as uuidv4 } from 'uuid';
import { SPORTS_CATEGORIES, UNSPLASH_RANDOM_URL } from './constants';

const cardioData = [
    // RUNNING
    {
        id: uuidv4(),
        name: 'Running',
        imgUrl: `${UNSPLASH_RANDOM_URL}Running`,
        category: SPORTS_CATEGORIES.RUNNING,
    },
    {
        id: uuidv4(),
        name: 'Jogging',
        imgUrl: `${UNSPLASH_RANDOM_URL}Jogging`,
        category: SPORTS_CATEGORIES.RUNNING,
    },
    {
        id: uuidv4(),
        name: 'Marathon',
        imgUrl: `${UNSPLASH_RANDOM_URL}Marathon`,
        category: SPORTS_CATEGORIES.RUNNING,
    },
    {
        id: uuidv4(),
        name: 'Sprint',
        imgUrl: `${UNSPLASH_RANDOM_URL}Sprint`,
        category: SPORTS_CATEGORIES.RUNNING,
    },
    // WALKING
    {
        id: uuidv4(),
        name: 'Hiking',
        imgUrl: `${UNSPLASH_RANDOM_URL}Hiking`,
        category: SPORTS_CATEGORIES.WALKING,
    },
    {
        id: uuidv4(),
        name: 'Racewalking',
        imgUrl: `${UNSPLASH_RANDOM_URL}Racewalking`,
        category: SPORTS_CATEGORIES.WALKING,
    },
];

export default cardioData;