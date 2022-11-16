import React from 'react';
import LettersPanel from '../components/LettersPanel';
import PointsPanel from '../components/PointsPanel';
import Hangman  from '../components/Hangman';

class GamePage extends React.Component{
    constructor(props){
        super();
    }

    render(){
        return (
            <div className={this.props.classList}>
                <div className="page__container page__container--left">
                    <PointsPanel scores={this.props.scores} />
                </div>

                <div className="page__container page__container--right">
                    <h2> Player guessing... </h2>
                    
                    <Hangman healthLeft={this.props.healthLeft} maxMistakes={this.props.maxMistakes}/>
                    <LettersPanel isWordGuessed={this.props.isWordGuessed} changeScreen={this.props.changeScreen} changeRoundStatus={this.props.changeRoundStatus} isHangmanAlive={ this.props.healthLeft !== 0 } onWrongLetter={this.props.onWrongLetter} wordToGuess={this.props.wordToGuess}/>
                </div>
            </div>
        );
    }
}

export default GamePage;