import constants from '../../constants';

export const setTodoFilter = filterName => {
    return {
        type: constants.actionNames.CHANGE_FILTER,
        filter: filterName
    }
}