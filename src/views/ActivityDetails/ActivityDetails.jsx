import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import ActivityVideos from '../../components/Activity/ActivityDetails/ActivityVideos';
import FitnessExerciseDetail from '../../components/Activity/ActivityDetails/FitnessExerciseDetail';
import SimilarActivities from '../../components/Activity/ActivityDetails/SimilarActivities';
import { equipmentFitnessExercisesData, fitnessExerciseDetailData, targetMuscleFitnessExercisesData } from '../../components/Activity/ActivityDetails/helpers/activityDetailsHelpers';
import SideBarDrawer from '../../components/SideBarDrawer/SideBarDrawer';

const ActivityDetails = () => {
    const [activityDetail, setActivityDetail] = useState({});
    const [targetMuscleFitnessExercises, setTargetMuscleFitnessExercises] = useState([]);
    const [equipmentFitnessExercises, setEquipmentFitnessExercises] = useState([]);
    const { category, id } = useParams();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });

        if (category === 'fitness') {
            fitnessExerciseDetailData(id)
                .then((detailData) => {
                    setActivityDetail(detailData);
                    targetMuscleFitnessExercisesData(detailData)
                        .then((targetData) => setTargetMuscleFitnessExercises(targetData));
                    equipmentFitnessExercisesData(detailData)
                        .then((equipmentData) => setEquipmentFitnessExercises(equipmentData));
                });
        }

        // sports detail data

        // cardio detail data

    }, [category, id]);

    if (!activityDetail) return <Typography>No Data</Typography>;

    return (
        <Box sx={{ display: 'flex' }}>
            <SideBarDrawer />
            <Box
                component="main"
                sx={{
                    flex: '1',
                    display: 'flex',
                }}
            >
                <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
                    {category === 'fitness' && (
                        <>
                            <FitnessExerciseDetail activityDetail={activityDetail} />
                            {/* ActivityVideo cause I might reuse it for the sports and cardio - if I don't - rename it to FitnessExerciseVideo */}
                            {/* <ActivityVideos /> */}
                            <SimilarActivities targetMuscleFitnessExercises={targetMuscleFitnessExercises} equipmentFitnessExercises={equipmentFitnessExercises} />
                        </>
                    )}

                </Box>
            </Box>
        </Box>
    );
};

export default ActivityDetails;
