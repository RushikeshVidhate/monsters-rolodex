import React from 'react';

export const Search = ({placeholder, handleOnChange}) => {
    return (
        <input 
        type="search" 
        placeholder={placeholder} 
        onChange={handleOnChange}
        />
    )
}


export default Search;