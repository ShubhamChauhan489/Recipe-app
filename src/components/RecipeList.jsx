import React from 'react'
import RecipeCard from './RecipeCard';

const RecipeList = ({ recipes, delRecipe, toggleFav, fav }) => {
    return (
      <div>
        <h2 className='text-xl font-bold mb-4'>Recipes</h2>
        {recipes.length === 0 && <p>No recipes found!</p>}
        <ul className='flex gap-4 flex-wrap'>
          {recipes.map((recipe) => (
            <li key={recipe.name}>
              <RecipeCard
                recipe={recipe}
                onDel={delRecipe}
                onToggleFav={toggleFav}
                isFav={fav.includes(recipe)}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default RecipeList;