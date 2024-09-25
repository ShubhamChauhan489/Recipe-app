

const RecipeCard = ({recipe, onDel, onToggleFav, isFav}) => {
    return (
    <div className='bg-white shadow-lg p-4 rounded-lg mb-4 '>
          <h2 className='text-xl font-bold text-red-500'>{recipe.name}</h2>
          <p className='font-semibold'>Category: {recipe.category}</p>
        <div className='flex justify-center items-center mt-4 gap-4'>
            <button
              onClick={() => onToggleFav(recipe)}
              className={`py-2 px-4 rounded ${isFav ? 'bg-yellow-500' : 'bg-gray-500'} text-white`}>
              {isFav ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
            <button
              onClick={() => onDel(recipe.name)}
              className='bg-red-500 text-white py-2 px-4 rounded'>
              Delete
            </button>
        </div>
     </div>
      );
    };

export default RecipeCard