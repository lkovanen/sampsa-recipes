import './App.css';
import Recipe from './Recipe'
import recipe from './recipes/recipe_0001.json'

function App() {
  return (
    <div>
      <Recipe data={recipe}></Recipe>
    </div>
  );
}

export default App;
