import { YOGA_DB_URL } from '../common/constants.js';

export const fetchDataFromYogaDB = () => {
    return fetch(YOGA_DB_URL).then((response) => response.json());
};

export const fetchYogaPoseByID = (id) => {
    return fetch(`${YOGA_DB_URL}/?id=${id}`).then((response) =>
        response.json()
    );
};
// All available paths here: https://github.com/alexcumplido/yoga-api

// fetchDataFromYogaDB().then((data) => console.log(data[0]));
