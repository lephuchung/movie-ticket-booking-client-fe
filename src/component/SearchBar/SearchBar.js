import React from 'react';
import './SearchBar.scss';
import { IoSearch } from "react-icons/io5";

const SearchBar = ({ placeholder, onSearch }) => {
    const handleInputChange = (event) => {
        if (onSearch) {
            onSearch(event.target.value);
        }
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                className="search-input"
                placeholder={placeholder || "Nhập tên phim..."}
                onChange={handleInputChange}
            />
            <div className="search-icon-area">
                <IoSearch className='icon' />
            </div>
        </div>
    );
};

export default SearchBar;