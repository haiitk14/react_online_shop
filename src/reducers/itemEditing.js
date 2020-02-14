import * as Types from './../constants/ActionTypes';

var initialState = {};

const itemEditingReducer = (state = initialState, action) => {
    var { category } = action;
    switch (action.type) {
        case Types.EDIT_CATEGORY:
            return category;
        case Types.RESET_ITEM_EDITING:
            state = {};
            return state;
        default:
            return state;
    }
}

export default itemEditingReducer;
