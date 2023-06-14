import SearchIcon from '@mui/icons-material/Search';
import {
    Box,
    Button,
    InputAdornment,
    Stack,
    TextField,
    Typography,
} from '@mui/material';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import searchFriends from './helpers/FriendSearchHelpers';
import { UsersContext } from '../../contexts/UsersContext';

const UserSearchBar = () => {
    const { handleSubmit, register, reset } = useForm();
    const navigate = useNavigate();
    const { setUsers } = useContext(UsersContext);

    const handleSearch = (data) => {
        searchFriends(data.search.toLowerCase()).then((result) => {
            setUsers(result);
            navigate('/social');
        });
        window.scrollTo({ top: 2500, left: 100, behavior: 'smooth' });
        reset();
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(handleSearch);
        }
    };

    return (
        <Stack alignItems='center' justifyContent='center' p='20px'>
            <Typography
                fontWeight={700}
                sx={{
                    fontSize: '44px',
                    '@media (max-width: 600px)': { fontSize: '30px' },
                }}
                mb='49px'
                textAlign='center'
            >
                Find Friends
            </Typography>
            <Box
                position='relative'
                sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Box
                    component='form'
                    onSubmit={handleSubmit(handleSearch)}
                    style={{
                        maxWidth: '600px',
                    }}
                >
                    <TextField
                        {...register('search')}
                        onKeyDown={handleKeyDown}
                        placeholder='Search for new friends'
                        type='text'
                        sx={{
                            backgroundColor: 'background.paper',
                        }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position='end'>
                                    <Button type='submit'>
                                        <SearchIcon />
                                    </Button>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>
            </Box>
        </Stack>
    );
};

export default UserSearchBar;
