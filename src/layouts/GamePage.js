import React from 'react';
import LettersPanel from '../components/LettersPanel';
import Hangman  from '../components/Hangman';

class GamePage extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className={this.props.classList}>
                <div className="page__container page__container--left"></div>
                <div className="page__container page__container--right">
                    <Hangman healthLeft={this.props.healthLeft} maxMistakes={this.props.maxMistakes}/>
                    <LettersPanel onWrongLetter={this.props.onWrongLetter} wordToGuess={this.props.wordToGuess}/>
                </div>
            </div>
        );
    }
}

export default GamePage;