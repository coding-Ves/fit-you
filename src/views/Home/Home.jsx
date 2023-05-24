import { Button, TextField } from '@mui/material';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/firebase-config';
import { logoutUser } from '../../firebase/services/auth.service';

const Home = () => {
    const [user] = useAuthState(auth);
    return (
        <>
            <Button
                onClick={() => {
                    logoutUser();
                }}
            >
                {' '}
                Log out
            </Button>
            {user ? (
                <TextField label='Logged in' />
            ) : (
                <TextField label='Not logged in' />
            )}
        </>
    );
};

export default Home;
