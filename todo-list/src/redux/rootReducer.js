import { combineReducers } from 'redux';
import todoItems from './TodoItem/reducers';
import todoFilter from './TodoFilter/reducers'

export default combineReducers({
    todoItems,
    todoFilter
});