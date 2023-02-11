import { useState, useEffect } from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {

  const appid = "276aafc4";
  const apikey = "ba160c1447e3e63239b27eafd14a729b";
  const [recipe, setrecipe] = useState([]);
  const [search,setsearch]=useState('');
  const [query,setquery]=useState('chicken');

  useEffect(() => {
    getrecipe();
  }, [query]);


    const getrecipe = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${appid}&app_key=${apikey}`);
    const data = await response.json();

    setrecipe(data.hits);
    
  }


  const updatesearch=e=>{
    setsearch(e.target.value)
  }


const getsearch=e=>{
e.preventDefault();
setquery(search);
setsearch('');
}



  return (
    <div className="App">
      <form onSubmit={getsearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updatesearch} />
        <button class="button-45" role="button" type="submit">Search</button>
      </form>
      <div className="recipe">
      {recipe.map(recipe => (
        <Recipe key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories}
        image={recipe.recipe.image} ingredients={recipe.recipe.ingredients}
         />
      ))}
      </div>
    </div>
  );
};

export default App;
