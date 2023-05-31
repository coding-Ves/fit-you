/* eslint-disable react/prop-types */
import { Button, Card, CardActions, CardContent, CardMedia, Divider, Typography } from '@mui/material';
import { useContext, useState } from 'react';
import { EXERCISE_NAME_MAX_LENGTH } from '../../common/constants';
import { ExercisesContext } from '../../contexts/ExercisesContext';
import CreateActivityDialog from '../Activity/CreateActivity/CreateActivityDialog';

const SearchResultCard = ({ exercise }) => {

    const { category } = useContext(ExercisesContext);
    const [open, setOpen] = useState(false);


    const handleClose = () => {
        setOpen(false);
    };

    const shortenedExerciseName =
        exercise.name.length > EXERCISE_NAME_MAX_LENGTH
            ? exercise.name.substring(0, EXERCISE_NAME_MAX_LENGTH) + '...'
            : exercise.name;

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component='img'
                alt={exercise.name}
                height='140'
                image={exercise.gifUrl}
                loading='lazy'
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {shortenedExerciseName}
                </Typography>
                <Typography level="body3" sx={{ fontWeight: 'md', color: 'text.secondary' }}>
                    Body part: {exercise.bodyPart}
                </Typography>
                <Divider orientation="vertical" />
                <Typography level="body3" sx={{ fontWeight: 'md', color: 'text.secondary' }}>
                    Target: {exercise.target}
                </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'space-between' }}>
                <div>
                    <Button size='medium' onClick={() => setOpen(true)}>
                        Add!
                    </Button>
                </div>

                <div>
                    <Button href={`/search/${category}/${exercise.id}`}>
                        Details
                    </Button>
                </div>

                <CreateActivityDialog open={open} handleClose={handleClose} exercise={exercise} />
            </CardActions>
        </Card>
    );
};

export default SearchResultCard;
