import { createContext, useState } from 'react';

export const ExercisesContext = createContext();

export const ExercisesProvider = ({ children }) => {
    const [exercises, setExercises] = useState([]);
    const [bodyPart, setBodyPart] = useState('all');
    // const [singleExercise, setSingleExercise] = useState({});

    return (
        <ExercisesContext.Provider value={{ exercises, setExercises, bodyPart, setBodyPart }}>
            {children}
        </ExercisesContext.Provider>
    );
};
