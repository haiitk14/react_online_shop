import * as Types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller';
import { toastSuccess, toastDeleteSuccess } from './../commons/toastify';

// Action get all
export const actFetchCategorysRequest = () => {
    return dispatch => {
        return callApi('categorys', 'GET', null).then(res => {
            dispatch(actFetchCategorys(res.data));
        });
    }
}
export const actFetchCategorys = (categorys) => {
    return {
        type: Types.GET_CATEGORYS,
        categorys
    }
}

// Action add new
export const actAddCategoryRequest = (category) => {
    return dispatch => {
        return callApi('categorys', 'POST', category).then(res => {
            toastSuccess();
            dispatch(actAddCategory(res.data));
        });
    }
}
export const actAddCategory = (category) => {
    return {
        type: Types.POST_CATEGORY,
        category
    }
}

// Action delete 
export const actDeleteCategoryRequest = (id) => {
    return dispatch => {
        return callApi(`categorys/${id}`, 'DELETE', null).then(res => {
            toastDeleteSuccess();
            dispatch(actDeleteCategory(res.data));
        });
    }
}
export const actDeleteCategory = (id) => {
    return {
        type: Types.DELETE_CATEGORY,
        id
    }
}

// Action edit
export const actEditCategoryRequest = (id) => {
    return dispatch => {
        return callApi(`categorys/${id}`, 'GET', null).then(res => {
            dispatch(actEditCategory(res.data));
        });
    }
}
export const actEditCategory = (category) => {
    return {
        type : Types.EDIT_CATEGORY,
        category
    }
}
export const actResetItemEditing = () => {
    return {
        type : Types.RESET_ITEM_EDITING,
    }
}
export const actUpdateCategoryRequest = (category) => {
    return dispatch => {
        return callApi(`categorys/${category.id}`, 'PUT', category).then(res => {
            toastSuccess();
            dispatch(actUpdateCategory(res.data));
        });
    }
}
export const actUpdateCategory = (category) => {
    return {
        type: Types.UPDATE_CATEGORY,
        category
    }
}
export const actUpdateStatusRequest = (category) => {
    return dispatch => {
        return callApi(`categorys/${category.id}`, 'PUT', category).then(res => {
            toastSuccess();
            dispatch(actUpdateStatus(res.data));
        });
    }
}
export const actUpdateStatus = (category) => {
    return {
        type: Types.UPDATE_STATUS,
        category
    }
}