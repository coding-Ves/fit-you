import { useEffect, useState } from 'react';

import { auth } from './firebase/firebase-config';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import AuthContext from './contexts/AuthContext';
import { getUserData } from './firebase/services/users.service';
import { useAuthState } from 'react-firebase-hooks/auth';
import AppRouter from './components/AppRouter/AppRouter';

function App() {
  const [user, isLoading] = useAuthState(auth);

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
      <AuthContext.Provider value={{ ...appState, setContext: setAppState }}>
        <AppRouter />
      </AuthContext.Provider>
    </>
  );
}

export default App;
