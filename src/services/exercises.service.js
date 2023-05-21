const exerciseDB_API_Key = '2fa2c42ed3mshbd49a3c180b1ae9p13f62djsnb4575c19e372';

export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': exerciseDB_API_Key,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

// export const fetchData = async (url, options) => {
//     const response = await fetch(url, options);
//     const data = await response.json();

//     return data;
// };

export const fetchDataFromExerciseDB = (url, options) => {
    return fetch(url, options)
        .then((response) => response.json());
};

// не съм включила url-a в exerciseOptions, защото в зависимост от това какво търсим, ще се променя последната част, напр:
// 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList'
// 'https://exercisedb.p.rapidapi.com/exercises/targetList'

// example usage
// const handleSearch = () => {
//     if (search) {
//         fetchDataFromExerciseDB('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
//             .then((exercisesData) => {
//                 const searchedExercises = exercisesData.filter((exercise) => {
//                     return exercise.name.toLowerCase().includes(search)
//                         || exercise.target.toLowerCase().includes(search)
//                         || exercise.bodyPart.toLowerCase().includes(search)
//                         || exercise.equipment.toLowerCase().includes(search)
//                 });

//                 setSearch('');
//                 setExercises(searchedExercises);
//             });
//     }
// };
