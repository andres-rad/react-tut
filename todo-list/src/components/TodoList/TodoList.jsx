import React from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';

import TodoItem from './TodoItem/TodoItem';
import { toggleTodo } from '../../redux/TodoItem/actions';
import constants from '../../constants';

const TodoList = ({
    todoItems,
    onClick
}) => {
    return (
        <ul>
            {todoItems.map(todo => {
                return (
                    <TodoItem
                        key={todo.id}
                        {...todo}
                        onClick={() => onClick(todo.id)}
                    />
                );
            })}
        </ul>
    )
}

TodoList.propTypes = {
    todoItems: Proptypes.arrayOf(Proptypes.shape({
        id: Proptypes.number.isRequired,
        completed: Proptypes.bool.isRequired,
        description: Proptypes.string.isRequired,
    }))
    ,
    onClick: Proptypes.func 
};

const mapStateToProps = state => {
    switch(state.todoFilter) {
        case constants.filterOptions.VIEW_COMPLETED:
            return {
                todoItems: state.todoItems.filter(item => item.completed)
            };
        case constants.filterOptions.VIEW_PENDING:
            return {
                todoItems: state.todoItems.filter(item => !item.completed)
            };
        default:
            return {
                todoItems: state.todoItems
            };
    };
};

const mapDispatchToProps = dispatch => { 
    return {
        onClick: id => dispatch(toggleTodo(id)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);