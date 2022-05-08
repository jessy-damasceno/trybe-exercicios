import './App.css';
import { Pokemon } from './Pokemon';
import pokemons from './data';

function App() {
  return (
    <div className='container'>
     { pokemons.map(item => <Pokemon key={item.id} pokemon={item}/>) }
    </div>
  );
}

export default App;
