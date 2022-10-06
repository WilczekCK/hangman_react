import React from 'react';
import LetterBox from './LetterBox';

class LettersDisplay extends React.Component{
    constructor(props){
        super(props);

        this.renderLetterBoxes = this.renderLetterBoxes.bind(this);
    }

    renderLetterBoxes() { 
        return (Array.from( this.props.wordToGuess.toLowerCase() ).map((item, key) => 
          <LetterBox key={key} value={item} properLetters={this.props.properLetters} wrongLetters={this.props.wrongLetters} />
        ))
    }

    render(){
        return (
            <div className="letter_boxes"> { this.renderLetterBoxes() } </div>
        )
    }
}

export default LettersDisplay;