/* eslint-disable react/prop-types */
import { Button, Card, CardActions, CardContent, CardMedia, Divider, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { ACTIVITY_NAME_MAX_LENGTH } from '../../common/constants';
import { ActivitiesContext } from '../../contexts/ActivitiesContext';
import CreateActivityDialog from '../Activity/CreateActivity/CreateActivityDialog';

const SearchResultCard = ({ activity }) => {

    // when I try to reuse it in the ActivityDetails component, context doesn't work, need to check why
    const { category } = useContext(ActivitiesContext);
    const [open, setOpen] = useState(false);
    const [image, setImage] = useState();

    useEffect(() => {
        if (category === 'fitness') {
            setImage(activity.gifUrl);
        } else if (category === 'sports') {
            setImage(activity.imgUrl);
        }
    }, [activity.gifUrl, activity.imgUrl, category]);

    const handleClose = () => {
        setOpen(false);
    };

    const shortenedActivityName =
        activity.name.length > ACTIVITY_NAME_MAX_LENGTH
            ? activity.name.substring(0, ACTIVITY_NAME_MAX_LENGTH) + '...'
            : activity.name;

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component='img'
                alt={activity.name}
                height='140'
                image={image}
                loading='lazy'
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {shortenedActivityName}
                </Typography>
                {category === 'fitness' && (
                    <Typography level="body3" sx={{ fontWeight: 'md', color: 'text.secondary' }}>
                        Body part: {activity.bodyPart}
                    </Typography>
                )}
                <Divider orientation="vertical" />
                {category === 'fitness' && (
                    <Typography level="body3" sx={{ fontWeight: 'md', color: 'text.secondary' }}>
                        Target: {activity.target}
                    </Typography>
                )}
            </CardContent>
            <CardActions sx={{ justifyContent: 'space-between' }}>
                <div>
                    <Button size='medium' onClick={() => setOpen(true)}>
                        Add!
                    </Button>
                </div>

                <div>
                    <Button href={`/search/${category}/${activity.id}`}>
                        Details
                    </Button>
                </div>

                <CreateActivityDialog open={open} handleClose={handleClose} activity={activity} />
            </CardActions>
        </Card>
    );
};

export default SearchResultCard;
