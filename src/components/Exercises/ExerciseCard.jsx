/* eslint-disable react/prop-types */
import { Button, Stack, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ExerciseCard = ({ exercise }) => {

    return (
        <>
            <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
                <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
                <Stack direction="row">
                    <Button sx={{ color: '#fff', background: '#6d95b9', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
                        {exercise.bodyPart}
                    </Button>
                    <Button sx={{ ml: '21px', color: '#fff', background: '#398aa0', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
                        {exercise.target}
                    </Button>
                </Stack>
                <Typography
                    ml="21px"
                    color="#000"
                    fontWeight="bold"
                    sx={{
                        fontSize: { lg: '24px', xs: '20px' },
                        mt: '11px',
                        pb: '10px',
                        textTransform: 'capitalize',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        maxWidth: '100%',
                    }}
                >
                    {exercise.name}
                </Typography>
            </Link>
        </>
    );
};

ExerciseCard.propTypes = {
    exercise: PropTypes.shape({
        bodyPart: PropTypes.string.isRequired,
        equipment: PropTypes.string.isRequired,
        gifUrl: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        target: PropTypes.string.isRequired,
    }).isRequired,
};

export default ExerciseCard;

{/* <Typography ml="21px" color="#000" fontWeight="bold" sx={{ fontSize: { lg: '24px', xs: '20px' } }} mt="11px" pb="10px" textTransform="capitalize" >
{exercise.name}
</Typography> */}