import constants from '../../constants';

const todoFilter = (state = "VIEW_PENDING", action) => {
    if(action.type === constants.actionNames.CHANGE_FILTER){
        return action.filter;
    }
    return state;
}

export default todoFilter;