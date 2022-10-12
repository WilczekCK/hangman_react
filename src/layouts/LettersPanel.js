import React from 'react';
import LettersDisplay from '../components/LettersDisplay';
import LetterInput from '../components/LetterInput';

class LettersPanel extends React.Component{
    constructor(props){
        super(props);

        this.state = { wrongLetters: '', properLetters: '', repeatedLetter: '' }
        this.onLetterChange = this.onLetterChange.bind(this);
        this.onLetterExists = this.onLetterExists.bind(this);
    }

    onLetterChange(e){
        this.setState({ wrongLetters: e.wrongLetters, properLetters: e.properLetters })
    }

    onLetterExists(letter){
        this.setState({ repeatedLetter: letter });
    }

    render(){
        return (
            <div className="letters__container">
                <LettersDisplay 
                    properLetters={this.state.properLetters} 
                    wrongLetters={this.state.wrongLetters}
                    repeatedLetter={this.state.repeatedLetter}
                    wordToGuess='Kolorowe Korale Królowej Karoliny'
                />
                
                <LetterInput 
                    onLetterChange={this.onLetterChange}
                    onLetterExists={this.onLetterExists}
                    wordToGuess={this.props.wordToGuess.toLowerCase()} 
                />
            </div>
        )
    }
}

export default LettersPanel;