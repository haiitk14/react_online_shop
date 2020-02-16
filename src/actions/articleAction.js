import * as Types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller';
import { toastSuccess, toastDeleteSuccess } from './../commons/toastify';

// GET ARTICLES
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

// ADD ARTICLE
export const actAddArticleRequest = (article) => {
    return dispatch => {
        return callApi('articles', 'POST', article).then(res => {
            toastSuccess();
            dispatch(atcAddArticle(res.data));
        });
    }
}
export const atcAddArticle = (article) => {
    return {
        type: Types.ADD_ARTICLE,
        article
    }
}

// DELETE ARTICLE
export const atcDeleteArticleRequest = (id) => {
    return dispatch => {
        return callApi(`articles/${id}`, 'DELETE', null).then(res => {
            toastDeleteSuccess();
            dispatch(atcDeleteArticle(id));
        });
    }
}
export const atcDeleteArticle = (id) => {
    return {
        type: Types.DELETE_ARTICLE,
        id
    }
}

// EDIT ARTICLE
export const atcEditArticleRequest = (id) => {
    return dispatch => {
        return callApi(`articles/${id}`, 'GET', null).then(res => {
            dispatch(actEditArticle(res.data));
        });
    }
}
export const actEditArticle = (itemEditing) => {
    return {
        type: Types.EDITING_ITEM,
        itemEditing
    }
}

// UPDATE ARTICLE
export const actUpdateArticleRequest = (article) => {
    return dispatch => {
        return callApi(`articles/${article.id}`, 'PUT', article).then(res => {
            toastSuccess();
            dispatch(actUpdateArticle(res.data));
        });
    }
}
export const actUpdateArticle = (article) => {
    return {
        type: Types.UPDATE_ARTICLE,
        article
    }
}
export const actUpdateStatusArticleRequest = (article) => {
    return dispatch => {
        return callApi(`articles/${article.id}`, 'PUT', article).then(res => {
            toastSuccess();
            dispatch(actUpdateStatusArticle(res.data));
        });
    }
}
export const actUpdateStatusArticle = (article) => {
    return {
        type: Types.UPDATE_STATUS_ARTICLE,
        article
    }
}

