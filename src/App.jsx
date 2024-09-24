import React from 'react'
import react,{useState, useEffect} from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';

const App = () => {

  const [recipe, setRecipe] = useState([]);
  const [fav, setFav] = useState([]);

  useEffect(()=>{
    const initialRecipe =[
      {id: 1, name: "Prantha", category: "Breakfast"},
      {id: 2, name: "Salad", category: "Lunch"},
    ];
    setRecipe(initialRecipe);

  },[]);
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      
      < Header  />
      < SearchBar />
      <RecipeList recipes={recipe} />
      </div>
  )
}

export default App