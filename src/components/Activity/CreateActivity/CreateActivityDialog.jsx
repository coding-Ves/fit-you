/* eslint-disable react/prop-types */
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import CreateFitnessExerciseForm from './CreateFitnessExerciseForm';
import CreateSportsOrCardioSessionForm from './CreateSportsOrCardioSessionOrYogaForm';

const CreateActivityDialog = ({ open, handleClose, activity }) => {
    const { category } = useParams();

    return (
        <>
            <Dialog open={open} onClose={handleClose} fullWidth={true}>
                {(category === 'fitness' ||
                    category === 'sports' ||
                    category === 'cardio') && (
                    <DialogTitle>{activity.name.toUpperCase()}</DialogTitle>
                )}
                {category === 'yoga' && (
                    <DialogTitle>
                        {activity.english_name.toUpperCase()}
                    </DialogTitle>
                )}
                <DialogContent>
                    {category === 'fitness' && (
                        <CreateFitnessExerciseForm
                            exercise={activity}
                            category={category}
                        />
                    )}
                    {(category === 'sports' ||
                        category === 'cardio' ||
                        category === 'yoga') && (
                        <CreateSportsOrCardioSessionForm
                            activity={activity}
                            category={category}
                            handleClose={handleClose}
                        />
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default CreateActivityDialog;
