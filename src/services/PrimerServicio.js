import axios from 'axios'

export function getData() {

    return axios.get("https://rickandmortyapi.com/api/character")
    .then(response => {
        return response.data;
    })
    .catch(err => {
        console.warn(err);
        return null;
    })

}

