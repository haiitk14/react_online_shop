import * as Types from './../constants/typeCategory';
var initialState = [];

const categorys = (state = initialState, action) => {
    var { categorys } = action;
    switch (action.type) {
        case Types.GET_CATEGORYS:
            state = categorys;
            return [...state];
        case Types.POST_CATEGORY:
            state.push(action.category);
            return [...state];
        case Types.DELETE_CATEGORY:
            let { id } = action;
            let index = findIndex(state, id);
            state.splice(index, 1);
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