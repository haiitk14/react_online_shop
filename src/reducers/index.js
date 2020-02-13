import { combineReducers } from 'redux';
import categorys from './categorys';
import itemEditing from './itemEditing';

const appReducers = combineReducers({
    categorys,
    itemEditing
});

export default appReducers;