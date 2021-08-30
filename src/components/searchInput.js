import React from 'react';

function SearchInput(props) {

    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                onChange={(event => {
                    props.updateSearch(event.target.value);
                })}
            />
        </div>
    );
}

export default SearchInput;