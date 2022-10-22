import logo from './logo.svg';
import LettersPanel from './layouts/LettersPanel';
import HomePage from './layouts/HomePage';
import Hangman  from './components/Hangman';
import './App.css';
import React from 'react';

class App extends React.Component{
  constructor(){
    super();
    const maxAttempts = 5;
    this.state = {healthAmount: maxAttempts, maxMistakes: maxAttempts, actualScreen: 'start'};
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
    this.setState({ actualScreen: e.target.attributes['data-goto'].value });
  }

  render(){
    return (
      <div className={ this.state.actualScreen === 'start' ? 'App single' : 'App' }>
        <HomePage changeScreen={this.changeScreen} classList={ this.state.actualScreen === 'start' ? 'start visible' : 'start' }/>

        <div className={ this.state.actualScreen === 'game' ? 'game visible' : 'game' }>
          <Hangman healthLeft={this.state.healthAmount} maxMistakes={this.state.maxMistakes}/>
          <LettersPanel onWrongLetter={this.dropHealth} wordToGuess='Madagaskar'/>
        </div>

        <div className={ this.state.actualScreen === 'word_select_first' ? 'word_select_start visible' : 'start' }> Wpisz hasło, pierwsza osoba. </div>
        <div className={ this.state.actualScreen === 'word_select' ? 'word_select visible' : 'word_select' } > Wpisz hasło, nie pierwsza osoba. </div>
      </div>
    );
  }
}

export default App;