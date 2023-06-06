/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

export const ActivitiesContext = createContext();

export const ActivitiesProvider = ({ children }) => {
    const [exercises, setExercises] = useState([]);
    const [bodyPart, setBodyPart] = useState('all');
    const [category, setCategory] = useState('');
    const [sports, setSports] = useState([]);
    const [cardio, setCardio] = useState([]);

    return (
        <ActivitiesContext.Provider
            value={{ exercises, setExercises, bodyPart, setBodyPart, category, setCategory, sports, setSports, cardio, setCardio }}>
            {children}
        </ActivitiesContext.Provider>
    );
};
