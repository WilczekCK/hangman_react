import React from 'react';
import LetterInput from './LetterInput';
import LetterBox from './LetterBox';

class LettersDisplay extends React.Component{
    constructor(props){
        super(props);

        this.refreshLetterBoxes = this.refreshLetterBoxes.bind(this);
        this.handleLettersChange = this.handleLettersChange.bind(this);
    }

    handleLettersChange(e){
        const { lettersProvided, properLetters, value } = e;
        this.refreshLetterBoxes( lettersProvided, properLetters, value );
    }

    refreshLetterBoxes( lettersProvided = [], properLetters = [], value ){
        return (Array.from(this.props.wordToGuess).map((item, key) => 
           <LetterBox key={key} value={item} properLetters={properLetters } wrongLetters={lettersProvided} />
        ))
    }

    render(){
        return (<div>
                <div className="letter_boxes">
                    { this.refreshLetterBoxes() }
                </div>

                <LetterInput onLetterChange={this.handleLettersChange} wordToGuess={this.props.wordToGuess} />
        </div>)
        
    }
}

export default LettersDisplay;