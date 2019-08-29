import axios from 'axios';
const baseURI = "https://reqres.in/";

export const login = (email, password) => {
    return axios.post(baseURI + 'api/login', {
        email: email,
        password: password
    })
    .then((response) => {
        console.log(response.data);
        return response.data;
    })
    .catch((error) => {
        console.log(error);
        return error;
    })
}