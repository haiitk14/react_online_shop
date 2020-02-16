import * as Types from './../constants/ActionTypes';
var initialState = [];

const categorysParam = (state = initialState, action) => {
    var { categorys } = action;
    switch (action.type) {
        case Types.GET_CATEGORYS_IS_PUBLIC:
            state = categorys;
            return [...state];
        default: return [...state];
    }
};

export default categorysParam;