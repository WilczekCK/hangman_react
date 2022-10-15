import logo from './logo.svg';
import LettersPanel from './layouts/LettersPanel';
import Hangman  from './components/Hangman';
import './App.css';
import React from 'react';

class App extends React.Component{
  constructor(){
    super();
    this.state = {healthAmount: 10, maxMistakes: 10};
    this.dropHealth = this.dropHealth.bind(this);
  }
  
  dropHealth(e){
    this.setState((state, props) => ({
      healthAmount: state.healthAmount - 1
    }));
  }

  render(){
    return (
      <div className="App">
        <Hangman healthLeft={this.state.healthAmount} maxMistakes={this.state.maxMistakes}/>
        <LettersPanel onWrongLetter={this.dropHealth} wordToGuess='Kolorowe Korale Królowej Karoliny'/>
      </div>
    );
  }
}

export default App;