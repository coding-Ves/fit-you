import AddIcon from '@mui/icons-material/Add';
import { Box, Card, CardContent, CardMedia, Fab, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { UNSPLASH_RANDOM_URL } from '../../../common/constants';

const ActivityCategoryCard = ({ categoryName }) => {
    return (
        <Card
            variant='elevation'
            elevation={5}
            sx={{
                height: '100%',
                minHeight: '290px',
                minWidth: '100px',
                display: 'flex',
                flexDirection: 'column',
                pt: 2,
            }}
        >
            <CardContent>
                <Typography variant='h6'>{categoryName.toUpperCase()}</Typography>
            </CardContent>

            <Box
                sx={{
                    position: 'relative',
                    height: 0,
                    paddingTop: '150%',
                    '@media (max-width: 600px)': { paddingTop: '100%' },
                }}
            >
                <CardMedia
                    component='img'
                    src={UNSPLASH_RANDOM_URL + categoryName}
                    alt={`${categoryName} image`}
                    loading='lazy'
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        minHeight: '198px',
                    }}
                />
            </Box>

            <Box
                variant='elevation'
                elevation={7}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    mt: 'auto',
                }}
            >
                <Link to={`/search/${categoryName}`}>
                    <Fab
                        variant='circular'
                        elevation={4}
                        size='sm'
                        sx={{
                            fontWeight: 600,
                            mb: 1,
                        }}
                        color='primary'
                        aria-label='add'
                    >
                        <AddIcon />
                    </Fab>
                </Link>
            </Box>
        </Card>
    );
};

ActivityCategoryCard.propTypes = {
    categoryName: PropTypes.string.isRequired,
};

export default ActivityCategoryCard;
