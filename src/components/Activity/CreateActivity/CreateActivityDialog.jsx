/* eslint-disable react/prop-types */
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import CreateActivityForm from './CreateActivityForm';

const CreateActivityDialog = ({ open, handleClose, exercise }) => {

    // conditionally render different forms based on the url?? useParams currently gets undefined... meh, future me problem :D

    // placeholder for now
    return (
        <>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{exercise.name.toUpperCase()}</DialogTitle>
                <DialogContent>
                    <CreateActivityForm exercise={exercise} />
                </DialogContent>
                <DialogActions>
                    {/* <Button onClick={handleClose}>Cancel</Button> */}
                    {/* <Button onClick={handleClose}>Placeholder</Button> */}
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