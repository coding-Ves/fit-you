/* eslint-disable react/prop-types */
import { Typography, Box, Stack } from '@mui/material';
import HorizontalScrollbar from '../../HorizontalScrollbar/HorizontalScrollbar';

const SimilarActivities = ({ targetMuscleFitnessExercises, equipmentFitnessExercises }) => {
    return (
        <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
            <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mb="33px">
                Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Target Muscle</span> exercises
            </Typography>
            <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
                {/* {targetMuscleFitnessExercises.length !== 0 ? <HorizontalScrollbar data={targetMuscleFitnessExercises} /> : <Loader />} */}
                <HorizontalScrollbar data={targetMuscleFitnessExercises} />
            </Stack>
            <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', mt: { lg: '100px', xs: '60px' } }} fontWeight={700} color="#000" mb="33px">
                Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Equipment</span> exercises
            </Typography>
            <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
                {/* {equipmentExercises.length !== 0 ? <HorizontalScrollbar data={equipmentFitnessExercises} /> : <Loader />} */}
                <HorizontalScrollbar data={equipmentFitnessExercises} />
            </Stack>
        </Box>
    );
};

export default SimilarActivities;
