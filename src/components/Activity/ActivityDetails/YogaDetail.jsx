import { Avatar, Stack, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const YogaDetail = ({ activityDetail }) => {

    const {
        english_name,
        sanskrit_name,
        translation_name,
        pose_description,
        pose_benefits,
        url_svg,
    } = activityDetail;

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
                src={url_svg}
                alt={url_svg}
                loading='lazy'
                sx={{
                    width: { lg: '400px', xs: '200px' },
                    height: { lg: '400px', xs: '200px' },
                }}
            />
            <Stack sx={{ gap: { lg: '15px', xs: '10px' } }}>
                <Typography variant='h4' textTransform='capitalize'>
                    Pose Name: {english_name}
                </Typography>
                <Typography variant='h6' textTransform='capitalize'>
                    Sanskrit Name: {sanskrit_name}
                </Typography>
                <Typography variant='h6' textTransform='capitalize'>
                    Translation: {translation_name}
                </Typography>
                <Typography>Description: {pose_description}</Typography>
                <Typography>Pose Benefits: {pose_benefits}</Typography>
            </Stack>
        </Stack>
    );
};

YogaDetail.propTypes = {
    activityDetail: PropTypes.object.isRequired,
};

export default YogaDetail;
