import * as Types from './../constants/ActionTypes';
var initialState = [];

const categorys = (state = initialState, action) => {
    var { categorys, category } = action;
    switch (action.type) {
        case Types.GET_CATEGORYS:
            state = categorys;
            return [...state];
        case Types.POST_CATEGORY:
            state.push(action.category);
            return [...state];
        case Types.DELETE_CATEGORY:
            let indexDel = findIndex(state, category.id);
            state.splice(indexDel, 1);
            return [...state];
        case Types.UPDATE_CATEGORY:
            let indexUp = findIndex(state, category.id);
            state[indexUp] = {
                ...state[indexUp],
                name: category.name,
                code: category.code,
                description: category.description,
                order: category.order,
                isPublic: category.isPublic,
                titleSeo: category.titleSeo,
                keywordsSeo: category.keywordsSeo,
                descriptionSeo: category.descriptionSeo,
                updatedDate: category.updatedDate
            };
            return [...state];
        case Types.UPDATE_STATUS:
            let indexUpStatus = findIndex(state, category.id);
            state[indexUpStatus] = {
                ...state[indexUpStatus],
                isPublic: state[indexUpStatus].isPublic
            }
            return [...state];
        default: return [...state];
    }
};
var findIndex = (categorys, id) => {
    var result = -1;
    categorys.forEach((categogy, index) => {
        if (categogy.id === id) {
            result = index;
        }
    });
    return result;
}

export default categorys;