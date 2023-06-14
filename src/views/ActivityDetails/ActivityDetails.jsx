import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FitnessExerciseDetail from '../../components/Activity/ActivityDetails/FitnessExerciseDetail';
import YogaDetail from '../../components/Activity/ActivityDetails/YogaDetail';
import { fitnessExerciseDetailData } from '../../components/Activity/ActivityDetails/helpers/activityDetailsHelpers';
import Loader from '../../components/Loader/Loader';
import SideBarDrawer from '../../components/SideBarDrawer/SideBarDrawer';
import { fetchYogaPoseByID } from '../../services/yoga.service';

const ActivityDetails = () => {
    const [activityDetail, setActivityDetail] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { category, id } = useParams();

    useEffect(() => {
        setIsLoading(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });

        if (category === 'fitness') {
            fitnessExerciseDetailData(id).then((detailData) => {
                setActivityDetail(detailData);
                setIsLoading(false);
            });
        }

        if (category === 'yoga') {
            fetchYogaPoseByID(id).then((detailData) => {
                setActivityDetail(detailData);
                setIsLoading(false);
            });
        }

    }, [category, id]);

    if (!activityDetail) return <Typography>No Data</Typography>;

    return (

        isLoading ? <Loader /> : (
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
                        {category === 'fitness' && <FitnessExerciseDetail activityDetail={activityDetail} />}
                        {category === 'yoga' && <YogaDetail activityDetail={activityDetail} />}
                    </Box>
                </Box>
            </Box>
        )
    );
};

export default ActivityDetails;
