import React from 'react';

function SearchFilterDropdown() {

    const categories = ["All", "Story", "Leviathans"];

    const categoriesList = categories.map((category) => {
    return <option value={category.toLowerCase}>{category}</option>
    })

    return(
        <select name="categories" id="categories-dropdown">
            <option value="">--Please select a category--</option>
            {categoriesList}

        </select>
    )
}

export default SearchFilterDropdown;