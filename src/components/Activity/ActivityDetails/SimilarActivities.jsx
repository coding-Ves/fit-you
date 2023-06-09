/* eslint-disable react/prop-types */
import { Box, Stack, Typography } from '@mui/material';
import Carousel from './Carousel';
// equipmentFitnessExercises

const SimilarActivities = ({ targetMuscleFitnessExercises, equipmentFitnessExercises }) => {

    return (
        <Stack direction='row' sx={{ p: 2, position: 'relative' }}>

            <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
                <Typography sx={{ fontSize: { lg: '30px', xs: '25px' }, ml: '20px' }} fontWeight={700} mb='33px'>
                    Similar Target Muscle exercises
                </Typography>
                {targetMuscleFitnessExercises && equipmentFitnessExercises && <Carousel data={targetMuscleFitnessExercises} /> }
            </Box>

            <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
                <Typography sx={{ fontSize: { lg: '30px', xs: '25px' }, ml: '20px' }} fontWeight={700} mb='33px'>
                    Similar Equipment exercises
                </Typography>
                {targetMuscleFitnessExercises && equipmentFitnessExercises && <Carousel data={equipmentFitnessExercises} />}

            </Box>

        </Stack >
    );
};

export default SimilarActivities;

//     <Typography sx={{ fontSize: { lg: '30px', xs: '25px' }, ml: '20px' }} fontWeight={700} mb='33px'>
//         Similar Target Muscle exercises
//     </Typography>
//     <Stack direction='row' sx={{ p: 2, position: 'relative' }}>
//         <Carousel data={targetMuscleFitnessExercises} />
//     </Stack>