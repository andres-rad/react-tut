import constants from '../../constants'

let nextTodoId = 10;

export const addTodo = description => {
    return {
        type: constants.actionNames.ADD_TODO,
        id: nextTodoId++,
        description
    }
}

export const toggleTodo = id => ({
    type: constants.actionNames.TOGGLE_TODO,
    id
})