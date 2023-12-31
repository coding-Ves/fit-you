import { Backdrop, CircularProgress } from '@mui/material';

export const Loader = () => {
    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={true}
        >
            <CircularProgress color='inherit' size='100px' />
        </Backdrop>
    );
};

export default Loader;
