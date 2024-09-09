import React, { useState } from 'react';
import '../styles/SearchInput.css';

interface SearchInputProps {
    placeholder?: string;
    onSearch: (query: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ placeholder = 'Search Student....', onSearch }) => {

    const [query, setQuery] = useState('');

    const handleInputChange = (e: any) => {
        setQuery(e.target.value);
        onSearch(query);

    };

    const handleSearchClick = () => {
        onSearch(query);
    };

    return (
        <div className="search-container">
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder={placeholder}
                className="search-input"
            />
            <button onClick={handleSearchClick} className="search-button">Search</button>
        </div>
    );
};

export default SearchInput;
