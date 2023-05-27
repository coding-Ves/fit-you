import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { darkTheme, lightTheme } from '../theme/theme';
import AppRouter from './components/AppRouter/AppRouter';
import NavBar from './components/NavBar/NavBar';
import AuthContext from './contexts/AuthContext';
import { auth } from './firebase/firebase-config';
import { getUserData } from './firebase/services/users.service';
import ScrollToTop from './components/NavBar/ScrollToTop';
const App = () => {
    const [user, isLoading] = useAuthState(auth);
    const [theme, setTheme] = useState(lightTheme);

    const handleThemeChange = () => {
        setTheme((prevTheme) =>
            prevTheme === lightTheme ? darkTheme : lightTheme
        );
    };

    const [appState, setAppState] = useState({
        user,
        userData: null,
    });

    if (appState.user !== user) {
        setAppState({ user });
    }

    useEffect(() => {
        if (user === null) return;

        getUserData(user.uid)
            .then((snapshot) => {
                if (!snapshot.exists()) {
                    throw new Error('Something went wrong!');
                }
                setAppState({
                    ...appState,
                    userData: snapshot.val()[Object.keys(snapshot.val())[0]],
                });
            })
            .catch((e) => alert(e.message));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    return (
        <>
            <AuthContext.Provider
                value={{ ...appState, setContext: setAppState }}
            >
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <NavBar onThemeChange={handleThemeChange} />
                    <AppRouter />
                    <ScrollToTop />
                </ThemeProvider>
            </AuthContext.Provider>
        </>
    );
};

export default App;
