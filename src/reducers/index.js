import { combineReducers } from 'redux';
import categorys from './categorys';
import itemEditing from './itemEditing';
import articles from './articles';


const appReducers = combineReducers({
    categorys,
    itemEditing,
    articles
});

export default appReducers;