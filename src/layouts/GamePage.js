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
                        <div class="page__container__points__heading">
                            <ul>
                                <li>Player 1</li>
                                <li>Player 2</li>
                            </ul>
                        </div>
                        
                        <div class="page__container__points__players">
                            <div class="page__container__points__players--a">
                                <ul>
                                    <li>4</li>
                                    <li>In progress...</li>
                                </ul>
                            </div>
                            <div class="page__container__points__players--b">
                                <ul>
                                    <li>2</li>
                                    <li>In progress...</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="page__container page__container--right">
                    <Hangman healthLeft={this.props.healthLeft} maxMistakes={this.props.maxMistakes}/>
                    <LettersPanel onWrongLetter={this.props.onWrongLetter} wordToGuess={this.props.wordToGuess}/>
                </div>
            </div>
        );
    }
}

export default GamePage;