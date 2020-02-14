import * as Types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller';
import { toastSuccess, toastDeleteSuccess } from './../commons/toastify';

export const actFetchArticlesRequest = () => {
    return dispatch => {
        return callApi('articles', 'GET', null).then(res => {
            dispatch(actFetchArticles(res.data));
        });
    }
}
export const actFetchArticles = (articles) => {
    return {
        type: Types.GET_ARTICLES,
        articles
    }
}