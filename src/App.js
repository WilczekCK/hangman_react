import logo from './logo.svg';
import LettersPanel from './layouts/LettersPanel';
import Hangman  from './components/Hangman';
import './App.css';
import React from 'react';

class App extends React.Component{
  constructor(){
    super();
    const maxAttempts = 7;
    this.state = {healthAmount: maxAttempts, maxMistakes: maxAttempts};
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
        <LettersPanel onWrongLetter={this.dropHealth} wordToGuess='Gumy Orbit'/>
      </div>
    );
  }
}

export default App;