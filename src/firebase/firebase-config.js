import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {

    apiKey: 'AIzaSyCWe4LqyUMysQ7U5jNExnyO8LSIgSoeSfk',
    authDomain: 'fit-you-49487.firebaseapp.com',
    databaseURL: 'https://fit-you-49487-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'fit-you-49487',
    storageBucket: 'fit-you-49487.appspot.com',
    messagingSenderId: '585570833921',
    appId: '1:585570833921:web:e97fe22b05c94ecd1f9200',
};

export const app = initializeApp(firebaseConfig);
// the Firebase authentication handler
export const auth = getAuth(app);
// the Realtime Database handler
export const db = getDatabase(app);