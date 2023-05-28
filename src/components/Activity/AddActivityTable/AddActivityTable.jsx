import { Box, Grid, Typography } from '@mui/material';
import { ACTIVITY_CATEGORIES } from '../../../common/constants';
import ActivityCategoryCard from '../ActivityCategoryCard/ActivityCategoryCard';

const AddActivityTable = () => {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography
                    fontWeight={700}
                    sx={{
                        fontSize: '44px',
                        '@media (max-width: 600px)': { fontSize: '30px' },
                    }}
                    mb='49px'
                    textAlign='center'
                >
                    Add a new activity!
                </Typography>
                <Grid container spacing={4} justifyContent='center'>
                    {ACTIVITY_CATEGORIES.map((category, index) => (
                        <Grid item key={index}>
                            <ActivityCategoryCard
                                key={index}
                                categoryName={category}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    );
};

export default AddActivityTable;

{
    /* <Stack>
{ACTIVITY_CATEGORIES.map((category, index) => {
    return (
        <ActivityCategoryCard key={index} categoryName={category} />
    );
})}
</Stack> */
}
