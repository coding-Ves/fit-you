import { Avatar, Stack, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import BodyPartIcon from '../../../assets/icons/body-part.png';
import EquipmentIcon from '../../../assets/icons/equipment.png';
import TargetIcon from '../../../assets/icons/target.png';

const FitnessExerciseDetail = ({ activityDetail }) => {
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
        <Stack
            gap='60px'
            sx={{
                flexDirection: { lg: 'row' },
                p: '20px',
                alignItems: 'center',
            }}
        >
            <Avatar
                src={gifUrl}
                alt={name}
                loading='lazy'
                sx={{
                    width: { lg: '400px', xs: '200px' },
                    height: { lg: '400px', xs: '200px' },
                }}
            />
            <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
                <Typography variant='h4' textTransform='capitalize'>
                    {name}
                </Typography>

                {extraDetail?.map((item, index) => (
                    <Stack
                        key={index}
                        direction='row'
                        gap='24px'
                        alignItems='center'
                    >
                        <Avatar
                            src={item.icon}
                            alt={bodyPart}
                            sx={{ width: '50px', height: '50px' }}
                        />
                        <Typography variant='h6' textTransform='capitalize'>
                            {item.name}
                        </Typography>
                    </Stack>
                ))}
            </Stack>
        </Stack>
    );
};

FitnessExerciseDetail.propTypes = {
    activityDetail: PropTypes.object.isRequired,
};
export default FitnessExerciseDetail;
