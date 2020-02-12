import * as Types from './../constants/typeCategory';
var initialState = [];

// var findIndex = (products, id) => {
//     var result = -1;
//     products.forEach((product, index) => {
//         if (product.id === id) {
//             result = index;
//         }
//     });
//     return result;
// }

const categorys = (state = initialState, action) => {
    var { categorys } = action;
    switch (action.type) {
        case Types.GET_CATEGORYS:
            state = categorys;
            return [...state];
        case Types.POST_CATEGORY:
            state.push(action.category);
            return [...state];
        default: return [...state];
    }
};

export default categorys;