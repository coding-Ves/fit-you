import {
    EmojiEvents,
    Flag,
    SportsHandball,
    CheckCircle,
    ImportContacts,
    Face2,
    DirectionsRun,
    FollowTheSigns,
    WavingHand,
    AutoFixHigh,
    AutoAwesome,
    DonutLargeTwoTone,
} from '@mui/icons-material';
import { RANDOM_AVATAR_STYLE } from '../../../../common/constants';

// const cardsData = [
//     {
//         title: 'Start Your Journey',
//         description: 'You created your account!',
//         icon: <Flag size={50} sx={{ color: 'green', fontSize: '50px' }} />,
//         status: 'earned',
//         color: 'primary.main',
//     },
//     {
//         title: 'The First Year',
//         description: '...you made it!',
//         icon: (
//             <EmojiEvents
//                 size={50}
//                 sx={{ color: 'lightGray', fontSize: '50px' }}
//             />
//         ),
//         status: 'locked',
//         color: 'lightGray',
//     },
//     {
//         title: 'GOOOOOAAAAL!!!',
//         description: 'You created your first goal!',
//         icon: (
//             <SportsHandball
//                 size={50}
//                 sx={{ color: 'lightGray', fontSize: '50px' }}
//             />
//         ),
//         status: 'locked',
//         color: 'lightGray',
//     },
//     {
//         title: 'Activity Log: Day 1',
//         description: 'You logged an activity!',
//         icon: (
//             <ImportContacts
//                 size={50}
//                 sx={{ color: 'lightGray', fontSize: '50px' }}
//             />
//         ),
//         status: 'locked',
//         color: 'lightGray',
//     },
//     {
//         title: 'SWAG',
//         description: 'You changed your profile avatar!',
//         icon: <Face2 size={50} sx={{ color: 'lightGray', fontSize: '50px' }} />,
//         status: 'locked',
//         color: 'lightGray',
//     },
//     {
//         title: 'Find Inspiration',
//         description: 'Followed a user!',
//         icon: (
//             <FollowTheSigns
//                 size={50}
//                 sx={{ color: 'lightGray', fontSize: '50px' }}
//             />
//         ),
//         status: 'locked',
//         color: 'lightGray',
//     },
//     {
//         title: 'Follow the wizard',
//         description: 'You found an easter egg, good job!',
//         icon: (
//             <AutoFixHigh
//                 size={50}
//                 sx={{ color: 'lightGray', fontSize: '50px' }}
//             />
//         ),
//         status: 'locked',
//         color: 'lightGray',
//     },
//     {
//         title: 'Achievement',
//         description: 'Achievement description',
//         icon: (
//             <DonutLargeTwoTone
//                 size={50}
//                 sx={{ color: 'lightGray', fontSize: '50px' }}
//             />
//         ),
//         status: 'locked',
//         color: 'lightGray',
//     },
//     {
//         title: 'Achievement',
//         description: 'Achievement description',
//         icon: (
//             <DonutLargeTwoTone
//                 size={50}
//                 sx={{ color: 'lightGray', fontSize: '50px' }}
//             />
//         ),
//         status: 'locked',
//         color: 'lightGray',
//     },
//     {
//         title: 'Achievement',
//         description: 'Achievement description',
//         icon: (
//             <DonutLargeTwoTone
//                 size={50}
//                 sx={{ color: 'lightGray', fontSize: '50px' }}
//             />
//         ),
//         status: 'locked',
//         color: 'lightGray',
//     },
//     {
//         title: 'Invited us to an Interview',
//         description: 'Thank you!',
//         icon: (
//             <AutoAwesome
//                 size={50}
//                 sx={{ color: 'lightGray', fontSize: '50px' }}
//             />
//         ),
//         status: 'locked',
//         color: 'lightGray',
//     },
// ];

export const achievementChecker = (userData) => {
    const achievements = [
        {
            title: 'Start Your Journey',
            description: 'You created your account!',
            icon: <Flag size={50} sx={{ color: 'green', fontSize: '50px' }} />,
            status: 'earned',
            color: 'primary.main',
        },
    ];

    // Has a year passed since the user created their account?

    console.log(userData.createdOn, Date.now() - 31556952000);
    if (userData.createdOn < Date.now() - 31556952000) {
        achievements.push({
            title: 'The First Year',
            description: '...you made it!',
            icon: (
                <EmojiEvents
                    size={50}
                    sx={{ color: 'green', fontSize: '50px' }}
                />
            ),
            status: 'locked',
            color: 'primary.main',
        });
    } else {
        achievements.push({
            title: 'The First Year',
            description: '...you made it!',
            icon: (
                <EmojiEvents
                    size={50}
                    sx={{ color: 'lightGray', fontSize: '50px' }}
                />
            ),
            status: 'earned',
            color: 'lightGray',
        });
    }

    // Check if the user has a property called goals
    if (userData.goals) {
        achievements.push({
            title: 'GOOOOOAAAAL!!!',
            description: 'You created your first goal!',
            icon: (
                <SportsHandball
                    size={50}
                    sx={{ color: 'green', fontSize: '50px' }}
                />
            ),
            status: 'earned',
            color: 'primary.main',
        });
    } else {
        achievements.push({
            title: 'GOOOOOAAAAL!!!',
            description: 'You created your first goal!',
            icon: (
                <SportsHandball
                    size={50}
                    sx={{ color: 'lightGray', fontSize: '50px' }}
                />
            ),
            status: 'locked',
            color: 'lightGray',
        });
    }

    // Check if the user has a property called activities (Which means they have logged an activity)
    if (userData.activities) {
        achievements.push({
            title: 'Activity Log: Day 1',
            description: 'You logged an activity!',
            icon: (
                <ImportContacts
                    size={50}
                    sx={{ color: 'green', fontSize: '50px' }}
                />
            ),
            status: 'earned',
            color: 'primary.main',
        });
    } else {
        achievements.push({
            title: 'Activity Log: Day 1',
            description: 'You logged an activity!',
            icon: (
                <ImportContacts
                    size={50}
                    sx={{ color: 'lightGray', fontSize: '50px' }}
                />
            ),
            status: 'locked',
            color: 'lightGray',
        });
    }

    // Check if the user has the default avatar RANDOM_AVATAR_STYLE + userData.username
    if (userData.avatar !== RANDOM_AVATAR_STYLE + userData.username) {
        achievements.push({
            title: 'SWAG',
            description: 'You changed your avatar!',
            icon: <Face2 size={50} sx={{ color: 'green', fontSize: '50px' }} />,
            status: 'earned',
            color: 'primary.main',
        });
    } else {
        achievements.push({
            title: 'SWAG',
            description: 'You changed your avatar!',
            icon: (
                <Face2
                    size={50}
                    sx={{ color: 'lightGray', fontSize: '50px' }}
                />
            ),
            status: 'locked',
            color: 'lightGray',
        });
    }

    // Check if the user has a property called following (Which means they have followed someone)
    if (userData.following) {
        achievements.push({
            title: 'Find Inspiration',
            description: 'You followed someone!',
            icon: (
                <DirectionsRun
                    size={50}
                    sx={{ color: 'green', fontSize: '50px' }}
                />
            ),
            status: 'earned',
            color: 'primary.main',
        });
    } else {
        achievements.push({
            title: 'Find Inspiration',
            description: 'You followed someone!',
            icon: (
                <DirectionsRun
                    size={50}
                    sx={{ color: 'lightGray', fontSize: '50px' }}
                />
            ),
            status: 'locked',
            color: 'lightGray',
        });
    }

    // Check if the user has a user called Gandalf in their following object

    let following = [];
    if (userData.following) {
        following = Object.keys(userData.following);
    }

    if (following.includes('Gandalf')) {
        achievements.push({
            title: 'Follow The Wizard!',
            description: 'You found an easter egg, good job!',
            icon: (
                <EmojiEvents
                    size={50}
                    sx={{ color: 'green', fontSize: '50px' }}
                />
            ),
            status: 'earned',
            color: 'primary.main',
        });
    } else {
        achievements.push({
            title: 'Follow The Wizard!',
            description: 'You found an easter egg, good job!',
            icon: (
                <EmojiEvents
                    size={50}
                    sx={{ color: 'lightGray', fontSize: '50px' }}
                />
            ),
            status: 'locked',
            color: 'lightGray',
        });
    }

    achievements.push({
        title: 'Invited us to an Interview',
        description: 'Thank you!',
        icon: (
            <AutoAwesome
                size={50}
                sx={{ color: 'lightGray', fontSize: '50px' }}
            />
        ),
        status: 'locked',
        color: 'lightGray',
    });

    return achievements;
};

export default achievementChecker;
