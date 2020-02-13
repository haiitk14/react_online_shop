import * as Types from './../constants/typeCategory';

var initialState = {};

const itemEditing = (state = initialState, action) => {
    switch(action.type){
        case Types.EDIT_CATEGORY:
            return action.category;
        default:
            return state;
    }
}

export default itemEditing;
