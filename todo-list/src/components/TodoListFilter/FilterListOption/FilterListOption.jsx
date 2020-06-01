import React from 'react';
import { connect } from "react-redux";

import { setTodoFilter } from '../../../redux/TodoFilter/actions';

const FilterListOption = ({
    activeFilter,
    onClick,
    filterName,
    children
}) => {
    return (
        <button disabled={activeFilter===filterName} onClick={() => onClick(filterName)}>
            {children}
        </button>
    )
};

const mapStateToProps = (state) => {
    return {
        activeFilter: state.todoFilter
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onClick: filterName => {
            dispatch(setTodoFilter(filterName))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterListOption);