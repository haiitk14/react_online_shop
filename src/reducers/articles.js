import * as Types from './../constants/ActionTypes';

var initialState = [];

const articles = (state = initialState, action) => {
    var { articles, id } = action;
    switch (action.type) {
        case Types.GET_ARTICLES:
            state = articles;
            return [...state];
        // case Types.POST_CATEGORY:
        //     state.push(action.category);
        //     return [...state];
        // case Types.DELETE_CATEGORY:
        //     let indexDel = findIndex(state, id);
        //     state.splice(indexDel, 1);
        //     return [...state];
        // case Types.UPDATE_CATEGORY:
        //     let { category } = action;
        //     let indexUp = findIndex(state, category.id);
        //     state[indexUp] = {
        //         ...state[indexUp],
        //         name: category.name,
        //         code: category.code,
        //         description: category.description,
        //         order: category.order,
        //         ispublic: category.ispublic,
        //         titleseo: category.titleseo,
        //         keywordsseo: category.keywordsseo,
        //         descriptionseo: category.descriptionseo,
        //     };
        //     return [...state];
        default: return [...state];
    }
};
var findIndex = (articles, id) => {
    var result = -1;
    articles.forEach((article, index) => {
        if (article.id === id) {
            result = index;
        }
    });
    return result;
}

export default articles;