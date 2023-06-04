/* eslint-disable react/prop-types */
import { Avatar, Stack, Typography } from '@mui/material';
import BodyPartIcon from '../../../assets/icons/body-part.png';
import EquipmentIcon from '../../../assets/icons/equipment.png';
import TargetIcon from '../../../assets/icons/target.png';

const Detail = ({ activityDetail }) => {

    const { bodyPart, gifUrl, name, target, equipment } = activityDetail;

    const extraDetail = [
        {
            icon: BodyPartIcon,
            name: `Body part: ${bodyPart}`,
        },
        {
            icon: TargetIcon,
            name: `Muscle group: ${target}`,
        },
        {
            icon: EquipmentIcon,
            name: `Equipment: ${equipment}`,
        },
    ];

    return (
        <Stack gap='60px' sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
            <img src={gifUrl} alt={name} loading='lazy' />
            <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
                <Typography sx={{ fontSize: { lg: '45px', xs: '20px' } }} fontWeight={600} textTransform='capitalize'>
                    {name}
                </Typography>
                <Typography sx={{ fontSize: { lg: '20px', xs: '15px' } }} color="#4F4C4C">
                    Wanna feel like an idiot idol on the beach? This is an exercise that will help you get the {target} everybody wants! Rawr!
                </Typography>
                {extraDetail?.map((item, index) => (
                    <Stack key={index} direction="row" gap="24px" alignItems="center">
                        <Avatar src={item.icon} alt={bodyPart} sx={{ width: '50px', height: '50px' }} />
                        <Typography textTransform="capitalize" sx={{ fontSize: { lg: '30px', xs: '20px' } }}>
                            {item.name}
                        </Typography>
                    </Stack>
                ))}
            </Stack>
        </Stack>
    );
};

export default Detail;


// return (
//     <Stack gap='60px' sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
//         <img src={gifUrl} alt={name} loading='lazy'/>
//         <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
//             <Typography sx={{ fontSize: { lg: '45px', xs: '20px' } }} fontWeight={600} textTransform='capitalize'>
//                 {name}
//             </Typography>
//             <Typography sx={{ fontSize: { lg: '20px', xs: '15px' } }} color="#4F4C4C">
//                 Wanna feel like an idiot idol on the beach? This is an exercise that will help you get the {target} everybody wants!
//             </Typography>
//             {extraDetail?.map((item, index) => (
//                 <Stack key={index} direction="row" gap="24px" alignItems="center">
//                     <Button sx={{ background: '#FFF2DB', borderRadius: '50%', width: '100px', height: '100px' }}>
//                         <img src={item.icon} alt={bodyPart} style={{ width: '50px', height: '50px' }} />
//                     </Button>
//                     <Typography textTransform="capitalize" sx={{ fontSize: { lg: '30px', xs: '20px' } }}>
//                         {item.name}
//                     </Typography>
//                 </Stack>
//             ))}
//         </Stack>
//     </Stack>
// );