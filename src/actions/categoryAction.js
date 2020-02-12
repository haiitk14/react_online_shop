import * as typeCategory from './../constants/typeCategory';
import callApi from './../utils/apiCaller';

export const actFetchCategorysRequest = () => {
    return dispatch => {
        return callApi('categorys', 'GET', null).then(res => {
            dispatch(actFetchCategorys(res.data));
        });
    }
}
export const actFetchCategorys = (categorys) => {
    return {
        type: typeCategory.GET_CATEGORYS,
        categorys
    }
}

export const actAddCategoryRequest = (category) => {
    return dispatch => {
        return callApi('categorys', 'POST', category).then(res => {
            dispatch(actAddCategory(res.data));
        });
    }
}
export const actAddCategory = (category) => {
    return {
        type: typeCategory.POST_CATEGORY,
        category
    }
}