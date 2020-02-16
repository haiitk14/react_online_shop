import * as Types from './../constants/ActionTypes';

var initialState = [];

const articles = (state = initialState, action) => {
    var { articles, article, id } = action;
    switch (action.type) {
        case Types.GET_ARTICLES:
            state = articles;
            return [...state];
        case Types.ADD_ARTICLE:
            state.push(article);
            return [...state];
        case Types.DELETE_ARTICLE:
            let indexDel = findIndex(state, id);
            state.splice(indexDel, 1);
            return [...state];
        case Types.UPDATE_ARTICLE:
            let indexUp = findIndex(state, article.id);
            state[indexUp] = {
                ...state[indexUp],
                categoryid: article.categoryid,
                name: article.name,
                slug: article.slug,
                description: article.description,
                image: article.image,
                order: article.order,
                ispublic: article.ispublic,
                titleseo: article.titleseo,
                keywordsseo: article.keywordsseo,
                descriptionseo: article.descriptionseo,
                updateddate: article.updateddate
            };
            return [...state];
        case Types.UPDATE_STATUS_ARTICLE:
            let indexUpStatus = findIndex(state, article.id);
            state[indexUpStatus] = {
                ...state[indexUpStatus],
                ispublic: state[indexUpStatus].ispublic
            }
            return [...state];
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