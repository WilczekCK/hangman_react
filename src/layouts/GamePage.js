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
                <div className="page__container page__container--left">
                    <h2> Player points </h2>

                    <div className="page__container__points">
                        <div className="page__container__points__heading">
                            <ul>
                                <li>Player 1</li>
                                <li>Player 2</li>
                            </ul>
                        </div>
                        
                        <div className="page__container__points__players">
                            <div className="page__container__points__players--a">
                                4
                            </div>
                            <div className="page__container__points__players--b">
                                2
                            </div>
                        </div>

                    </div>
                </div>

                <div className="page__container page__container--right">
                    <h2> Player guessing... </h2>
                    
                    <Hangman healthLeft={this.props.healthLeft} maxMistakes={this.props.maxMistakes}/>
                    <LettersPanel changeScreen={this.props.changeScreen} isHangmanAlive={ this.props.healthLeft !== 0 } onWrongLetter={this.props.onWrongLetter} wordToGuess={this.props.wordToGuess}/>
                </div>
            </div>
        );
    }
}

export default GamePage;