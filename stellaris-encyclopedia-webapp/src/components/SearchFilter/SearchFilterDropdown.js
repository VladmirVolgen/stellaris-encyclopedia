import React from 'react';

function SearchFilterDropdown() {

    // TODO: componentDidMount will fech categories or it will be passed from the app with a general request
    const categories = ["All", "Story", "Leviathans"];

    const categoriesList = categories.map((category, index) => {
    return <option key={'categoryKey' + index.toString()} value={category.toString().toLowerCase()}>{category}</option>
    })

    return(
        <select name="categories" id="categories-dropdown">
            <option value="">--Please select a category--</option>
            {categoriesList}

        </select>
    )
}

export default SearchFilterDropdown;