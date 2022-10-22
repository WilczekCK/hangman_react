import logo from './logo.svg';
import LettersPanel from './layouts/LettersPanel';
import Hangman  from './components/Hangman';
import './App.css';
import React from 'react';

class App extends React.Component{
  constructor(){
    super();
    const maxAttempts = 5;
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
        <div className="start"></div>

        <div className="game">
          <Hangman healthLeft={this.state.healthAmount} maxMistakes={this.state.maxMistakes}/>
          <LettersPanel onWrongLetter={this.dropHealth} wordToGuess='Madagaskar'/>
        </div>

        <div className="word_select_start"></div>
        <div className="word_select_another"></div>
      </div>
    );
  }
}

export default App;