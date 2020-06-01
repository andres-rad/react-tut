import React from 'react';

import constants from "../../constants";
import FilterListOption from './FilterListOption/FilterListOption';

const TodoListFilter = () => {
    return (
        <React.Fragment>
            <FilterListOption filterName={constants.filterOptions.VIEW_ALL}> All </FilterListOption>
            <FilterListOption filterName={constants.filterOptions.VIEW_PENDING}> Pending </FilterListOption>
            <FilterListOption filterName={constants.filterOptions.VIEW_COMPLETED}> Completed </FilterListOption>
        </React.Fragment>
    );
}

export default TodoListFilter;