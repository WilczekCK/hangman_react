import React from 'react';
import LetterBox from './LetterBox';

class LettersDisplay extends React.Component{
    constructor(props){
        super(props);

        this.renderLetterBoxes = this.renderLetterBoxes.bind(this);
    }

    componentDidUpdate(prevProps, prevState){
        // Clear letters on lose
        if( !this.props.isHangmanAlive ){
            this.renderLetterBoxes()
        }

        return true;
    }

    renderLetterBoxes() { 
        return (Array.from( this.props.wordToGuess.toLowerCase() ).map((item, key) => 
          <LetterBox key={key} value={item} properLetters={this.props.properLetters} wrongLetters={this.props.wrongLetters} repeatedLetter={this.props.repeatedLetter === item}/>
        ))
    }

    render(){
        return (
            <div className="letters__container--letters"> { this.renderLetterBoxes() } </div>
        )
    }
}

export default LettersDisplay;