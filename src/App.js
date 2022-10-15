import logo from './logo.svg';
import LettersPanel from './layouts/LettersPanel';
import Hangman  from './components/Hangman';
import './App.css';

function App() {
  return (
    <div className="App">
      <Hangman />
      <LettersPanel wordToGuess='Kolorowe Korale Królowej Karoliny'/>
    </div>
  );
}

export default App;
