import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import ActivityVideos from '../../components/Activity/ActivityDetails/ActivityVideos';
import FitnessExerciseDetail from '../../components/Activity/ActivityDetails/FitnessExerciseDetail';
// import SimilarActivities from '../../components/Activity/ActivityDetails/SimilarActivities';
import { fitnessExerciseDetailData } from '../../components/Activity/ActivityDetails/helpers/activityDetailsHelpers';
import SideBarDrawer from '../../components/SideBarDrawer/SideBarDrawer';
import YogaDetail from '../../components/Activity/ActivityDetails/YogaDetail';
import { fetchYogaPoseByID } from '../../services/yoga.service';

const ActivityDetails = () => {
    const [activityDetail, setActivityDetail] = useState({});
    // const [targetMuscleFitnessExercises, setTargetMuscleFitnessExercises] = useState([]);
    // const [equipmentFitnessExercises, setEquipmentFitnessExercises] = useState([]);
    const { category, id } = useParams();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });

        if (category === 'fitness') {
            fitnessExerciseDetailData(id).then((detailData) => {
                setActivityDetail(detailData);
                // targetMuscleFitnessExercisesData(detailData)
                //     .then((targetData) => setTargetMuscleFitnessExercises(targetData));
                // equipmentFitnessExercisesData(detailData)
                //     .then((equipmentData) => setEquipmentFitnessExercises(equipmentData));
            });
        }

        if (category === 'yoga') {
            fetchYogaPoseByID(id).then((detailData) => {
                setActivityDetail(detailData);

                // targetMuscleFitnessExercisesData(detailData)
                //     .then((targetData) => setTargetMuscleFitnessExercises(targetData));
                // equipmentFitnessExercisesData(detailData)
                //     .then((equipmentData) => setEquipmentFitnessExercises(equipmentData));
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
                component='main'
                sx={{
                    flex: '1',
                    display: 'flex',
                }}
            >
                <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
                    {category === 'fitness' && (
                        <>
                            <FitnessExerciseDetail
                                activityDetail={activityDetail}
                            />
                            {/* <ActivityVideos /> */}
                        </>
                    )}
                    {category === 'yoga' && (
                        <>
                            {console.log(activityDetail)}
                            <YogaDetail activityDetail={activityDetail} />
                            {/* <ActivityVideos /> */}
                        </>
                    )}
                </Box>
            </Box>
        </Box>
    );
};

export default ActivityDetails;

{
    /* <SimilarActivities targetMuscleFitnessExercises={targetMuscleFitnessExercises} equipmentFitnessExercises={equipmentFitnessExercises} /> */
}
// не работи ако navigate-неш от сърч резултс към това вю. ако обаче се откоментира докато вече е на това вю, работи...
