import logo from './logo.svg';
import LettersPanel from './layouts/LettersPanel';
import './App.css';

function App() {
  return (
    <div className="App">
      <LettersPanel wordToGuess='Kolorowe Korale Królowej Karoliny'/>
    </div>
  );
}

export default App;
