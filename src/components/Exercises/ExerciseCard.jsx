/* eslint-disable react/prop-types */
import { Button, Stack, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { exerciseNameMaxLength } from '../../common/constants';
import AddExerciseModal from './AddExerciseModal';

const ExerciseCard = ({ exercise }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const shortenedExerciseName =
        exercise.name.length > exerciseNameMaxLength
            ? exercise.name.substring(0, exerciseNameMaxLength) + '...'
            : exercise.name;

    return (
        <>
            <Link
                className="exercise-card"
                to={`/exercise/${exercise.id}`}
                style={{ textDecoration: 'none', maxWidth: '300px', margin: '0 auto', marginRight: '20px' }} // Adjusted maxWidth and margin properties
            >
                <img
                    src={exercise.gifUrl}
                    alt={exercise.name}
                    loading="lazy"
                    style={{ width: '70%', borderRadius: '50%' }}
                />
            </Link>
            <Stack direction="row">
                <Button
                    sx={{
                        color: '#fff',
                        background: '#6d95b9',
                        fontSize: '1rem',
                        borderRadius: '20px',
                        textTransform: 'capitalize',
                        '@media (max-width: 600px)': {
                            fontSize: '0.8rem',
                        },
                    }}
                >
                    {exercise.bodyPart}
                </Button>
                <Button
                    sx={{
                        ml: '0.8rem',
                        color: '#fff',
                        background: '#398aa0',
                        fontSize: '1rem',
                        borderRadius: '20px',
                        textTransform: 'capitalize',
                        '@media (max-width: 600px)': {
                            fontSize: '0.8rem',
                            ml: '0.5rem',
                        },
                    }}
                >
                    {exercise.target}
                </Button>

                <Button
                    onClick={() => setIsModalOpen(true)}
                    sx={{
                        ml: { xs: '0.5rem', sm: '1rem', lg: '5rem', xl: '7rem' },
                        color: '#fff',
                        background: '#398aa0',
                        fontSize: '1rem',
                        borderRadius: '20px',
                        textTransform: 'capitalize',
                        '@media (max-width: 600px)': {
                            fontSize: '0.8rem',
                            ml: '0.5rem',
                        },
                    }}
                >
                    Add!
                </Button>

            </Stack>
            <Typography
                color="#000"
                fontWeight="bold"
                sx={{
                    fontSize: '1.5rem',
                    '@media (max-width: 600px)': {
                        fontSize: '1.2rem',
                    },
                    mt: '11px',
                    pb: '10px',
                    textTransform: 'capitalize',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    maxWidth: '100%',
                }}
            >
                {shortenedExerciseName}
            </Typography>

            {isModalOpen && (
                <AddExerciseModal
                    isModalOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
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
