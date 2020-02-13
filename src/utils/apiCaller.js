import axios from 'axios';
import { API_ENPOINT } from './../constants/index';
import { toastError } from './../commons/toastify';

export default function callApi(endpoint, method = 'GET', body){
    return axios({
        method: method,
        url: `${API_ENPOINT}/${endpoint}`,
        data: body
    }).catch(err => {
        toastError(err);
    });
};