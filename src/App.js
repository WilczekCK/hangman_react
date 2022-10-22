import logo from './logo.svg';
import LettersPanel from './layouts/LettersPanel';
import Hangman  from './components/Hangman';
import './App.css';
import React from 'react';

class App extends React.Component{
  constructor(){
    super();
    const maxAttempts = 5;
    this.state = {healthAmount: maxAttempts, maxMistakes: maxAttempts, actualScreen: 'start'};
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
        <div className={ this.state.actualScreen === 'start' ? 'start visible' : 'start' }></div>

        <div className={ this.state.actualScreen === 'game' ? 'game visible' : 'game' }>
          <Hangman healthLeft={this.state.healthAmount} maxMistakes={this.state.maxMistakes}/>
          <LettersPanel onWrongLetter={this.dropHealth} wordToGuess='Madagaskar'/>
        </div>

        <div className={ this.state.actualScreen === 'word_select_first' ? 'word_select_start visible' : 'start' }></div>
        <div className={ this.state.actualScreen === 'word_select' ? 'word_select visible' : 'word_select' } ></div>
      </div>
    );
  }
}

export default App;