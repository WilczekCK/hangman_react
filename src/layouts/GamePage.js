import React from 'react';
import LettersPanel from '../components/LettersPanel';
import PointsPanel from '../components/PointsPanel';
import Hangman  from '../components/Hangman';

class GamePage extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className={this.props.classList}>
                <div className="page__container page__container--left">
                    <PointsPanel scores={this.props.scores} />
                </div>

                <div className="page__container page__container--right">
                    <h2> Player {this.props.playerGuessing} guessing... </h2>
                    
                    <Hangman healthLeft={this.props.healthLeft} maxMistakes={this.props.maxMistakes}/>
                    <LettersPanel healthLeft={this.props.healthLeft} isWordGuessed={this.props.isWordGuessed} changeScreen={this.props.changeScreen} changeRoundStatus={this.props.changeRoundStatus} isHangmanAlive={ this.props.healthLeft !== 0 } onWrongLetter={this.props.onWrongLetter} wordToGuess={this.props.wordToGuess}/>

                    <PointsPanel scores={this.props.scores} />
                </div>
            </div>
        );
    }
}

export default GamePage;