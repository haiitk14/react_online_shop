import * as Types from './../constants/ActionTypes';

var initialState = {};

const itemEditingReducer = (state = initialState, action) => {
    var { itemEditing } = action;
    switch (action.type) {
        case Types.EDITING_ITEM:
            return itemEditing;
        case Types.RESET_ITEM_EDITING:
            state = {};
            return state;
        default:
            return state;
    }
}

export default itemEditingReducer;
