import { combineReducers } from 'redux';
import categorys from './categorys';
import itemEditing from './itemEditing';
import articles from './articles';
import categorysParam from './categorysParam';


const appReducers = combineReducers({
    categorys,
    itemEditing,
    articles,
    categorysParam
});

export default appReducers;