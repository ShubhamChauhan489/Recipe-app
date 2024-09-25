import React,{useState} from 'react'


const RecipeForm = ({addRecipe}) => {
    const [recipeName, setRecipeName] = useState('');
    const [recipeCategory, setRecipeCategory] = useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();

        if(recipeName && recipeCategory){
            addRecipe({name: recipeName, category: recipeCategory })
            setRecipeName('');
            setRecipeCategory('')
        }
        
    };

  return (
    <div>
        <form onSubmit={handleSubmit} className='mb-6'>
            <input type="text" placeholder='Recipe NAme' value={recipeName} 
            onChange={(e)=>setRecipeName(e.target.value)} className='p-2 border border-gray-300 rounded-lg w-full mb-2' />
            <input type="text" placeholder='Category' value={recipeCategory} 
            onChange={(e)=>setRecipeCategory(e.target.value)} className='p-2 border border-gray-300 rounded-lg w-full mb-4'/>
            <button className='bg-green-500 text-white py-2 px-4 rounded'>Add Recipe</button>
        </form>
    </div>
  )
}

export default RecipeForm