import React from "react";
import './SearchBox.css';

const SearchBox = ({searchfield , searchChange}) => {
    return (
        <div className="btn">
            <div className="container">
                <input type="search" placeholder="Search robots" onChange={searchChange} />
            </div>
            <span>Search robots</span>
        </div>
       
    );
}
export default SearchBox;