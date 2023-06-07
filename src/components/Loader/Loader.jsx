import { Backdrop } from '@mui/material';
import { CircularProgress } from '@mui/material';

export const Loader = () => {
    return (
        <Backdrop>
            <CircularProgress size='50' />
        </Backdrop>
    );
};

export default Loader;
