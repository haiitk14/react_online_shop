import axios from 'axios';
import { API_ENPOINT } from './../constants/index';

export default function callApi(endpoint, method = 'GET', body){
    return axios({
        method: method,
        url: `${API_ENPOINT}/${endpoint}`,
        data: body
    }).catch(err => {
        console.log(err);
    });
};