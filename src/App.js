import logo from './logo.svg';
import LettersDisplay from './components/LettersDisplay';
import './App.css';

function App() {
  return (
    <div className="App">
      <LettersDisplay wordToGuess='Kolorowe Korale Królowej Karoliny'/>
    </div>
  );
}

export default App;
