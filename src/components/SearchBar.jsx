import React from 'react'

const SearchBar = ({serachTerm, onSearch}) => {

  return (
    <div className='my-5'>
        <input type="text" placeholder="Search for Recipe..." value={serachTerm} onChange={(e)=>onSearch(e.target.value)} className="w-full p-2 border border-gray-300 rounded-lg"/>
        </div>
  )
}

export default SearchBar