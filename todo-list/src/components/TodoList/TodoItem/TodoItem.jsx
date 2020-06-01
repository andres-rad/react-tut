import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({
    description,
    completed,
    onClick
}) => {
    return (
        <li onClick={onClick}
            style={{textDecoration: completed ? 'line-through' : 'none'}}
        >
            {description}
        </li>
    )
};

TodoItem.propTypes = {
    description: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    onClick: PropTypes.func,
}

export default TodoItem;