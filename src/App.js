import logo from './logo.svg';

import GamePage from './layouts/GamePage';
import HomePage from './layouts/HomePage';
import WordselectPage from './layouts/WordselectPage';

import './App.css';
import React from 'react';

class App extends React.Component{
  constructor(){
    super();
    this.state = {playerGuessing: 1, playerOneScore: 0, playerTwoScore: 0, healthAmount: 10, maxMistakes: 10, isWordGuessed: false, actualScreen: 'start', previousScreen: 'start', wordToGuess: ''};
    this.dropHealth = this.dropHealth.bind(this);
    this.changeScreen = this.changeScreen.bind(this);
    this.changeRoundStatus = this.changeRoundStatus.bind(this);
  }
  
  dropHealth(e){
    this.setState((state, props) => ({
      healthAmount: state.healthAmount - 1
    }));
  }

  changeRoundStatus( gameStatus ){
    this.setState({
      isWordGuessed: gameStatus === 'win' ? true : false
    })
  }

  changeScreen(e){
    e.preventDefault();

    // only at beginning, after setting the mistakes counter
    if ( this.state.actualScreen === 'start' ){
      const maxMistakes =  e.target.attributes['data-mistakesallowed'] ? e.target.attributes['data-mistakesallowed'].value : 10;

      this.setState({
        healthAmount: maxMistakes,
        maxMistakes: maxMistakes
      })
    }

    // only at select password screen
    if ( this.state.actualScreen === 'word_select' ){
      const wordToGuess =  e.target.attributes['data-wordtoguess'] ? e.target.attributes['data-wordtoguess'].value : 'Madagascar';

      this.setState({
        wordToGuess: wordToGuess
      })
    }

    // end of round
    if ( this.state.actualScreen === 'game' ) {
      this.setState((state, props) => ({
        [state.playerGuessing === 1 ? 'playerOneScore' : 'playerTwoScore' ]: state.healthAmount,
        healthAmount: state.maxMistakes,
        wordToGuess: '',
        isWordGuessed: '',
        playerGuessing: state.playerGuessing === 1 ? 2 : 1,
      }));
    }

    // after every screen change
    this.setState((state, props) => ({
      previousScreen: state.actualScreen,
      actualScreen: e.target.attributes['data-goto'].value
    }));
  }

  render(){
    return (
      <div className={ this.state.actualScreen === 'start' ? 'App single' : 'App' }>
        <HomePage 
          changeScreen={this.changeScreen}
          classList={ this.state.actualScreen === 'start' ? 'start visible' : 'start' }
        />

        <GamePage 
          classList={ this.state.actualScreen === 'game' ? 'game visible' : 'game' }
          isWordGuessed={this.state.isWordGuessed}
          healthLeft={this.state.healthAmount} 
          maxMistakes={this.state.maxMistakes} 
          onWrongLetter={this.dropHealth} 
          wordToGuess={this.state.wordToGuess}
          changeScreen={this.changeScreen}
          changeRoundStatus={this.changeRoundStatus}
          scores={ {playerOne: this.state.playerOneScore, playerTwo: this.state.playerTwoScore} }
        />

        <WordselectPage 
          changeScreen={this.changeScreen}
          previousScreen={this.state.previousScreen}
          classList={ this.state.actualScreen === 'word_select' ? 'word_select visible' : 'word_select' }
        />
      </div>
    );
  }
}

export default App;