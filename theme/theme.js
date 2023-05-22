import { createTheme, ThemeProvider } from '@mui/material';

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#3a6b94',
        },
        secondary: {
            main: '#175075',
        },
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#6d95b9',
        },
        secondary: {
            main: '#398aa0',
        },
    },
});
