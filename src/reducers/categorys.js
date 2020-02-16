import * as Types from './../constants/ActionTypes';
var initialState = [];

const categorys = (state = initialState, action) => {
    var { categorys, id, category } = action;
    switch (action.type) {
        case Types.GET_CATEGORYS:
            state = categorys;
            return [...state];
        case Types.POST_CATEGORY:
            state.push(action.category);
            return [...state];
        case Types.DELETE_CATEGORY:
            let indexDel = findIndex(state, id);
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
                ispublic: category.ispublic,
                titleseo: category.titleseo,
                keywordsseo: category.keywordsseo,
                descriptionseo: category.descriptionseo,
                updateddate: category.updateddate
            };
            return [...state];
        case Types.UPDATE_STATUS:
            let indexUpStatus = findIndex(state, category.id);
            state[indexUpStatus] = {
                ...state[indexUpStatus],
                ispublic: state[indexUpStatus].ispublic
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