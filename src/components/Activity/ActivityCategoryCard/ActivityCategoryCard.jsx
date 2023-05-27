/* eslint-disable react/prop-types */
import { Card, CardMedia, CardContent, Typography, Box, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { unsplashRandomUrl } from '../../../common/constants';

const ActivityCategoryCard = ({ categoryName }) => {
    return (
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant='h6'>
                    {categoryName.toUpperCase()}
                </Typography>
            </CardContent>

            <Box sx={{ position: 'relative', height: 0, paddingTop: '150%', '@media (max-width: 600px)': { paddingTop: '100%' } }}>
                <CardMedia
                    component="img"
                    src={unsplashRandomUrl + categoryName}
                    alt={`${categoryName} image`}
                    loading="lazy"
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                />
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 'auto' }}>
                <Fab
                    href={`/search/${categoryName}`}
                    variant="contained"
                    size="sm"
                    backgroundColor="secondary"
                    sx={{ fontWeight: 600 }}
                    color="primary"
                    aria-label="add"
                >
                    <AddIcon />
                </Fab>
            </Box>
        </Card>
    );
};

export default ActivityCategoryCard;
