import React from 'react';
import RecipeCard from './RecipeCard';

const FavoriteList = ({ fav, toggleFav }) => {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4">Favourite Recipes💖</h2>
      {fav.length === 0 && <p>No favourite recipes found..</p>}
      <ul className='flex flex-wrap gap-4'>
        {fav.map((recipe) => (
          <li key={recipe.name}>
            <RecipeCard
              recipe={recipe}
              onDel={() => {}}
              onToggleFav={toggleFav}
              isFav={true}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteList;
