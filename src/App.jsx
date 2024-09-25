import React from 'react'
import react,{useState} from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar';
import RecipeForm from './components/RecipeForm';
import RecipeList from './components/RecipeList';
import FavoriteRecipes from './components/FavoriteRecipes';


const App = () => {

  const [recipes, setRecipes] = useState([]);
  const [fav, setFav] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addRecipe=(recipe)=>{
    setRecipes([...recipes, recipe]);
  }

  const delRecipe=(recipeName)=>{
    setRecipes(recipes.filter((recipe)=>recipe.name !== recipeName));
    setFav(recipes.filter((recipe)=>recipe.name !== recipeName));

  };

  const toggleFav=(recipe)=>{
    if(fav.includes(recipe)){
      setFav(fav.filter((favorit) => favorit !== recipe));
    } else {
      setFav([...fav, recipe]);
    }
  }
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    
      <div className="p-6">
        <Header />
        <RecipeForm addRecipe={addRecipe} />
        <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
        <RecipeList
          recipes={filteredRecipes}
          delRecipe={delRecipe}
          toggleFav={toggleFav}
          fav={fav}
        />
        <FavoriteRecipes fav={fav} toggleFav={toggleFav} />
      </div>
    );
  };
  

export default App