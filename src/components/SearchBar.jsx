import React from 'react'
const SearchBar = ({ searchTerm, onSearch }) => {
    return (
      <div className="my-6">
        <input
          type="text"
          placeholder="Search recipes..."
          value={searchTerm}
          onChange={(e) => onSearch(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>
    );
  };
  
 export default SearchBar;
  