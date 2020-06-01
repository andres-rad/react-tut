const todoItems = (state = [], action) => {
    return (
        state.map(todo => {
        if(todo.id === action.id) {
            return {...todo, completed: !todo.completed}
        }
            return todo
        })
    );
};

export default todoItems;