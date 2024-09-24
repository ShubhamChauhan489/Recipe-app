import React, { useState, useRef } from 'react';

const RecipeCard = ({recipe}) => {
    const [showDetail, setShowDetail] = useState(false);
    const detailRef = useRef(null);

    const toggleDetails =()=>{
        setShowDetail(!showDetail);
        if(!showDetail){
            detailRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
  return (
    <div className="bg-white shadow-lg p-4 rounded-lg">
         <h2 className="text-xl font-bold text-red-600">{recipe.name}</h2>
         <p className='font-semibold'>Category: {recipe.category}</p>
         <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded" onClick={toggleDetails}>{showDetail ? 'Hide Details' : 'Show More'}</button>
            {showDetail && (
            <div ref={detailRef} className="mt-2">
            <p>Details about the recipe</p>
            </div>
          )}
    </div>

  )
}

export default RecipeCard