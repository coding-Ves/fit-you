import { UNSPLASH_RANDOM_URL } from './constants';
import { v4 as uuidv4 } from 'uuid';
import { SPORTS_CATEGORIES } from './constants';

// structure
// const sportsData = [
//     {
//         id: uuidv4(),
//         name: '',
//         imgUrl: `${UNSPLASH_RANDOM_URL}name`,
//         category: '',
//     },
// ];

// need to add more at some point
const sportsData = [
    // {
    //     id: uuidv4(),
    //     name: 'Acrobatics',
    //     imgUrl: `${UNSPLASH_RANDOM_URL}Acrobatics`,
    //     category: SPORTS_CATEGORIES.ACROBATIC,
    // },
    {
        id: uuidv4(),
        name: 'Archery',
        imgUrl: 'https://unsplash.com/photos/FoiZoPtxSyA',
        category: SPORTS_CATEGORIES.ARCHERY,
    },
    {
        id: uuidv4(),
        name: 'Baseball',
        imgUrl: 'https://unsplash.com/photos/hKzmPs8Axh8',
        category: SPORTS_CATEGORIES.BALL,
    },
    // {
    //     id: uuidv4(),
    //     name: 'Basketball',
    //     imgUrl: `${UNSPLASH_RANDOM_URL}Basketball`,
    //     category: SPORTS_CATEGORIES.BALL,
    // },
    // {
    //     id: uuidv4(),
    //     name: 'Climbing',
    //     imgUrl: `${UNSPLASH_RANDOM_URL}Climbing`,
    //     category: SPORTS_CATEGORIES.CLIMBING,
    // },
    // {
    //     id: uuidv4(),
    //     name: 'Cycling',
    //     imgUrl: `${UNSPLASH_RANDOM_URL}Cycling`,
    //     category: SPORTS_CATEGORIES.CYCLING,
    // },
    // {
    //     id: uuidv4(),
    //     name: 'Fencing',
    //     imgUrl: `${UNSPLASH_RANDOM_URL}Fencing`,
    //     category: SPORTS_CATEGORIES.COMBAT,
    // },
    // {
    //     id: uuidv4(),
    //     name: 'Gymnastics',
    //     imgUrl: `${UNSPLASH_RANDOM_URL}Gymnastics`,
    //     category: SPORTS_CATEGORIES.GYMNASTICS,
    // },
    // {
    //     id: uuidv4(),
    //     name: 'Ice Hockey',
    //     imgUrl: `${UNSPLASH_RANDOM_URL}${encodeURIComponent('Ice Hockey')}`,
    //     category: SPORTS_CATEGORIES.ICE,
    // },
    // {
    //     id: uuidv4(),
    //     name: 'Kite Surfing',
    //     imgUrl: `${UNSPLASH_RANDOM_URL}${encodeURIComponent('Kite Surfing')}`,
    //     category: SPORTS_CATEGORIES.KITE,
    // },
    // {
    //     id: uuidv4(),
    //     name: 'Mixed Martial Arts',
    //     imgUrl: `${UNSPLASH_RANDOM_URL}${encodeURIComponent('Mixed Martial Arts')}`,
    //     category: SPORTS_CATEGORIES.MIXED_DISCIPLINE,
    // },
    // {
    //     id: uuidv4(),
    //     name: 'Parkour',
    //     imgUrl: `${UNSPLASH_RANDOM_URL}Parkour`,
    //     category: SPORTS_CATEGORIES.PARKOUR,
    // },
    // {
    //     id: uuidv4(),
    //     name: 'Running',
    //     imgUrl: `${UNSPLASH_RANDOM_URL}Running`,
    //     category: SPORTS_CATEGORIES.RUNNING,
    // },
    // {
    //     id: uuidv4(),
    //     name: 'Sailing',
    //     imgUrl: `${UNSPLASH_RANDOM_URL}Sailing`,
    //     category: SPORTS_CATEGORIES.SAILING,
    // },
    // {
    //     id: uuidv4(),
    //     name: 'Snowboarding',
    //     imgUrl: `${UNSPLASH_RANDOM_URL}Snowboarding`,
    //     category: SPORTS_CATEGORIES.SNOW_SPORTS,
    // },
    // {
    //     id: uuidv4(),
    //     name: 'Walking',
    //     imgUrl: `${UNSPLASH_RANDOM_URL}Walking`,
    //     category: SPORTS_CATEGORIES.WALKING,
    // },
    // {
    //     id: uuidv4(),
    //     name: 'Water Polo',
    //     imgUrl: `${UNSPLASH_RANDOM_URL}${encodeURIComponent('Water Polo')}`,
    //     category: SPORTS_CATEGORIES.WATER,
    // },
    // {
    //     id: uuidv4(),
    //     name: 'Weightlifting',
    //     imgUrl: `${UNSPLASH_RANDOM_URL}Weightlifting`,
    //     category: SPORTS_CATEGORIES.WEIGHTLIFTING,
    // },
    // {
    //     id: uuidv4(),
    //     name: 'Motocross',
    //     imgUrl: `${UNSPLASH_RANDOM_URL}Motocross`,
    //     category: SPORTS_CATEGORIES.MOTORSPORTS,
    // },
    // {
    //     id: uuidv4(),
    //     name: 'Other Sport',
    //     imgUrl: `${UNSPLASH_RANDOM_URL}Other Sport`,
    //     category: SPORTS_CATEGORIES.OTHER,
    // },
    // // ACROBATIC
    // {
    //     id: uuidv4(),
    //     name: 'Aerial Silks',
    //     imgUrl: `${UNSPLASH_RANDOM_URL}${encodeURIComponent('Aerial Silks')}`,
    //     category: SPORTS_CATEGORIES.ACROBATIC,
    // },
    // {
    //     id: uuidv4(),
    //     name: 'Trampoline',
    //     imgUrl: `${UNSPLASH_RANDOM_URL}Trampoline`,
    //     category: SPORTS_CATEGORIES.ACROBATIC,
    // },
    // // AIR
    // {
    //     id: uuidv4(),
    //     name: 'Paragliding',
    //     imgUrl: `${UNSPLASH_RANDOM_URL}Paragliding`,
    //     category: SPORTS_CATEGORIES.AIR,
    // },
    // {
    //     id: uuidv4(),
    //     name: 'Skydiving',
    //     imgUrl: `${UNSPLASH_RANDOM_URL}Skydiving`,
    //     category: SPORTS_CATEGORIES.AIR,
    // },
    // // ARCHERY
    // {
    //     id: uuidv4(),
    //     name: 'Target Archery',
    //     imgUrl: `${UNSPLASH_RANDOM_URL}${encodeURIComponent('Target Archery')}`,
    //     category: SPORTS_CATEGORIES.ARCHERY,
    // },
    // {
    //     id: uuidv4(),
    //     name: 'Field Archery',
    //     imgUrl: `${UNSPLASH_RANDOM_URL}Field Archery`,
    //     category: SPORTS_CATEGORIES.ARCHERY,
    // },
    // // BOARD
    // {
    //     id: uuidv4(),
    //     name: 'Skateboarding',
    //     imgUrl: `${UNSPLASH_RANDOM_URL}Skateboarding`,
    //     category: SPORTS_CATEGORIES.BOARD,
    // },
    // {
    //     id: uuidv4(),
    //     name: 'Surfing',
    //     imgUrl: `${UNSPLASH_RANDOM_URL}Surfing`,
    //     category: SPORTS_CATEGORIES.BOARD,
    // },
    // // BALL
    // {
    //     id: uuidv4(),
    //     name: 'Football',
    //     imgUrl: `${UNSPLASH_RANDOM_URL}Football`,
    //     category: SPORTS_CATEGORIES.BALL,
    // },
    // {
    //     id: uuidv4(),
    //     name: 'Volleyball',
    //     imgUrl: `${UNSPLASH_RANDOM_URL}Volleyball`,
    //     category: SPORTS_CATEGORIES.BALL,
    // },
    // // CLIMBING
    // {
    //     id: uuidv4(),
    //     name: 'Rock Climbing',
    //     imgUrl: `${UNSPLASH_RANDOM_URL}Rock Climbing`,
    //     category: SPORTS_CATEGORIES.CLIMBING,
    // },
    // {
    //     id: uuidv4(),
    //     name: 'Bouldering',
    //     imgUrl: `${UNSPLASH_RANDOM_URL}Bouldering`,
    //     category: SPORTS_CATEGORIES.CLIMBING,
    // },
    // // CYCLING
    // {
    //     id: uuidv4(),
    //     name: 'Mountain Biking',
    //     imgUrl: `${UNSPLASH_RANDOM_URL}Mountain Biking`,
    //     category: SPORTS_CATEGORIES.CYCLING,
    // },
    // {
    //     id: uuidv4(),
    //     name: 'Road Cycling',
    //     imgUrl: `${UNSPLASH_RANDOM_URL}Road Cycling`,
    //     category: SPORTS_CATEGORIES.CYCLING,
    // },
    // // COMBAT
    // {
    //     id: uuidv4(),
    //     name: 'Boxing',
    //     imgUrl: `${UNSPLASH_RANDOM_URL}Boxing`,
    //     category: SPORTS_CATEGORIES.COMBAT,
    // },
    // {
    //     id: uuidv4(),
    //     name: 'Karate',
    //     imgUrl: `${UNSPLASH_RANDOM_URL}Karate`,
    //     category: SPORTS_CATEGORIES.COMBAT,
    // },
    // // GYMNASTICS
    // {
    //     id: uuidv4(),
    //     name: 'Artistic Gymnastics',
    //     imgUrl: `${UNSPLASH_RANDOM_URL}Artistic Gymnastics`,
    //     category: SPORTS_CATEGORIES.GYMNASTICS,
    // },
    // {
    //     id: uuidv4(),
    //     name: 'Rhythmic Gymnastics',
    //     imgUrl: `${UNSPLASH_RANDOM_URL}Rhythmic Gymnastics`,
    //     category: SPORTS_CATEGORIES.GYMNASTICS,
    // },
    // // ICE
    // {
    //     id: uuidv4(),
    //     name: 'Figure Skating',
    //     imgUrl: `${UNSPLASH_RANDOM_URL}Figure Skating`,
    //     category: SPORTS_CATEGORIES.ICE,
    // },
    // {
    //     id: uuidv4(),
    //     name: 'Ice Dancing',
    //     imgUrl: `${UNSPLASH_RANDOM_URL}Ice Dancing`,
    //     category: SPORTS_CATEGORIES.ICE,
    // },
    // // KITE
    // {
    //     id: uuidv4(),
    //     name: 'Kiteboarding',
    //     imgUrl: `${UNSPLASH_RANDOM_URL}Kiteboarding`,
    //     category: SPORTS_CATEGORIES.KITE,
    // },
    // {
    //     id: uuidv4(),
    //     name: 'Kitesurfing',
    //     imgUrl: `${UNSPLASH_RANDOM_URL}Kitesurfing`,
    //     category: SPORTS_CATEGORIES.KITE,
    // },
    // // MIXED_DISCIPLINE
    // {
    //     id: uuidv4(),
    //     name: 'Triathlon',
    //     imgUrl: `${UNSPLASH_RANDOM_URL}Triathlon`,
    //     category: SPORTS_CATEGORIES.MIXED_DISCIPLINE,
    // },
    // {
    //     id: uuidv4(),
    //     name: 'Pentathlon',
    //     imgUrl: `${UNSPLASH_RANDOM_URL}Pentathlon`,
    //     category: SPORTS_CATEGORIES.MIXED_DISCIPLINE,
    // },
    // // PARKOUR
    // {
    //     id: uuidv4(),
    //     name: 'Freerunning',
    //     imgUrl: `${UNSPLASH_RANDOM_URL}Freerunning`,
    //     category: SPORTS_CATEGORIES.PARKOUR,
    // },
    // {
    //     id: uuidv4(),
    //     name: 'Obstacle Course',
    //     imgUrl: `${UNSPLASH_RANDOM_URL}Obstacle Course`,
    //     category: SPORTS_CATEGORIES.PARKOUR,
    // },
    // // RUNNING
    // {
    //     id: uuidv4(),
    //     name: 'Marathon',
    //     imgUrl: `${UNSPLASH_RANDOM_URL}Marathon`,
    //     category: SPORTS_CATEGORIES.RUNNING,
    // },
    // {
    //     id: uuidv4(),
    //     name: 'Sprint',
    //     imgUrl: `${UNSPLASH_RANDOM_URL}Sprint`,
    //     category: SPORTS_CATEGORIES.RUNNING,
    // },
    // // SAILING
    // {
    //     id: uuidv4(),
    //     name: 'Yachting',
    //     imgUrl: `${UNSPLASH_RANDOM_URL}Yachting`,
    //     category: SPORTS_CATEGORIES.SAILING,
    // },
    // {
    //     id: uuidv4(),
    //     name: 'Windsurfing',
    //     imgUrl: `${UNSPLASH_RANDOM_URL}Windsurfing`,
    //     category: SPORTS_CATEGORIES.SAILING,
    // },
    // // SNOW_SPORTS
    // {
    //     id: uuidv4(),
    //     name: 'Skiing',
    //     imgUrl: `${UNSPLASH_RANDOM_URL}Skiing`,
    //     category: SPORTS_CATEGORIES.SNOW_SPORTS,
    // },
    // {
    //     id: uuidv4(),
    //     name: 'Snowboarding',
    //     imgUrl: `${UNSPLASH_RANDOM_URL}Snowboarding`,
    //     category: SPORTS_CATEGORIES.SNOW_SPORTS,
    // },
    // // WALKING
    // {
    //     id: uuidv4(),
    //     name: 'Hiking',
    //     imgUrl: `${UNSPLASH_RANDOM_URL}Hiking`,
    //     category: SPORTS_CATEGORIES.WALKING,
    // },
    // {
    //     id: uuidv4(),
    //     name: 'Racewalking',
    //     imgUrl: `${UNSPLASH_RANDOM_URL}Racewalking`,
    //     category: SPORTS_CATEGORIES.WALKING,
    // },
    // // WATER
    // {
    //     id: uuidv4(),
    //     name: 'Swimming',
    //     imgUrl: `${UNSPLASH_RANDOM_URL}Swimming`,
    //     category: SPORTS_CATEGORIES.WATER,
    // },
    // {
    //     id: uuidv4(),
    //     name: 'Water Skiing',
    //     imgUrl: `${UNSPLASH_RANDOM_URL}Water Skiing`,
    //     category: SPORTS_CATEGORIES.WATER,
    // },
    // // WEIGHTLIFTING
    // {
    //     id: uuidv4(),
    //     name: 'Powerlifting',
    //     imgUrl: `${UNSPLASH_RANDOM_URL}Powerlifting`,
    //     category: SPORTS_CATEGORIES.WEIGHTLIFTING,
    // },
    // {
    //     id: uuidv4(),
    //     name: 'Olympic Weightlifting',
    //     imgUrl: `${UNSPLASH_RANDOM_URL}Olympic Weightlifting`,
    //     category: SPORTS_CATEGORIES.WEIGHTLIFTING,
    // },
    // // MOTORSPORTS
    // {
    //     id: uuidv4(),
    //     name: 'Formula 1',
    //     imgUrl: `${UNSPLASH_RANDOM_URL}Formula 1`,
    //     category: SPORTS_CATEGORIES.MOTORSPORTS,
    // },
    // {
    //     id: uuidv4(),
    //     name: 'Motocross',
    //     imgUrl: `${UNSPLASH_RANDOM_URL}Motocross`,
    //     category: SPORTS_CATEGORIES.MOTORSPORTS,
    // },
    // // OTHER
    // {
    //     id: uuidv4(),
    //     name: 'Chess',
    //     imgUrl: `${UNSPLASH_RANDOM_URL}Chess`,
    //     category: SPORTS_CATEGORIES.OTHER,
    // },
    // {
    //     id: uuidv4(),
    //     name: 'Ultimate Frisbee',
    //     imgUrl: `${UNSPLASH_RANDOM_URL}Ultimate Frisbee`,
    //     category: SPORTS_CATEGORIES.OTHER,
    // },
];

export default sportsData;
