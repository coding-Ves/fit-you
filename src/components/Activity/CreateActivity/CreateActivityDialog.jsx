/* eslint-disable react/prop-types */
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { useParams } from 'react-router-dom';
import CreateFitnessExerciseForm from './CreateFitnessExerciseForm';
import CreateSportsOrCardioSessionForm from './CreateSportsOrCardioSessionForm';

const CreateActivityDialog = ({ open, handleClose, activity }) => {

    const { category } = useParams();
    // console.log(category);

    return (
        <>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{activity.name.toUpperCase()}</DialogTitle>
                <DialogContent>
                    {category === 'fitness' && <CreateFitnessExerciseForm exercise={activity} category={category}/>}
                    {(category === 'sports' || category === 'cardio') && <CreateSportsOrCardioSessionForm activity={activity} category={category} />}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default CreateActivityDialog;


// example from MUI docs
// return (
//     <>
//         <Dialog open={open} onClose={handleClose}>
//             <DialogTitle>Subscribe</DialogTitle>
//             <DialogContent>
//                 <DialogContentText>
//                     To subscribe to this website, please enter your email address here. We
//                     will send updates occasionally.
//                 </DialogContentText>
//                 <TextField
//                     autoFocus
//                     margin="dense"
//                     id="name"
//                     label="Email Address"
//                     type="email"
//                     fullWidth
//                     variant="standard"
//                 />
//             </DialogContent>
//             <DialogActions>
//                 <Button onClick={handleClose}>Cancel</Button>
//                 <Button onClick={handleClose}>Subscribe</Button>
//             </DialogActions>
//         </Dialog>
//     </>
// );