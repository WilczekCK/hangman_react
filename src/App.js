import logo from './logo.svg';

import GamePage from './layouts/GamePage';
import HomePage from './layouts/HomePage';
import WordselectPage from './layouts/WordselectPage';

import './App.css';
import React from 'react';

class App extends React.Component{
  constructor(){
    super();
    this.state = {healthAmount: 10, maxMistakes: 10, actualScreen: 'start', previousScreen: 'start'};
    this.dropHealth = this.dropHealth.bind(this);
    this.changeScreen = this.changeScreen.bind(this);
  }
  
  dropHealth(e){
    this.setState((state, props) => ({
      healthAmount: state.healthAmount - 1
    }));

    if( this.state.healthAmount <= 1 ) {
      this.setState({actualScreen: 'word_select'})
    } 
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
          healthLeft={this.state.healthAmount} 
          maxMistakes={this.state.maxMistakes} 
          onWrongLetter={this.dropHealth} 
          wordToGuess='Madagaskar'
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