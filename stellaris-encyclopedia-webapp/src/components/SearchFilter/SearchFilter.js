import React from 'react';
import SearchFilterDropdown from './SearchFilterDropdown';

function SearchFilter() {

    return (
        <React.Fragment>
            <SearchFilterDropdown />      

            <label name="search-bar">Search event</label>
            <input name="search-bar" />
        </React.Fragment>

    )
}

export default SearchFilter;