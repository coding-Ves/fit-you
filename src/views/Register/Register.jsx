import RegistrationForm from './../../components/Authentication/Registration/RegistrationForms/RegistrationForm';
import { Box } from '@mui/material';

import PuzzlePattern from '../../assets/images/Puzzle-Pattern-Hero.png';

const Register = () => {
    return (
        <Box
            sx={{
                backgroundImage: `url(${PuzzlePattern})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'fit',
                backgroundPosition: 'center',
                backgroundBlendMode: 'multiply',
                boxSizing: 'border-box',
                height: '93vh',
            }}
        >
            <RegistrationForm />
        </Box>
    );
};

export default Register;
