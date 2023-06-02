/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

export const ActivitiesContext = createContext();

export const ActivitiesProvider = ({ children }) => {
    const [exercises, setExercises] = useState([]);
    const [bodyPart, setBodyPart] = useState('all');
    const [category, setCategory] = useState('');
    const [sports, setSports] = useState([]);

    return (
        <ActivitiesContext.Provider value={{ exercises, setExercises, bodyPart, setBodyPart, category, setCategory, sports, setSports }}>
            {children}
        </ActivitiesContext.Provider>
    );
};
