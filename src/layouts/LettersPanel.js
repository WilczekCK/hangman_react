import React from 'react';
import LettersDisplay from '../components/LettersDisplay';
import LetterInput from '../components/LetterInput';

class LettersPanel extends React.Component{
    constructor(props){
        super(props);

        this.state = { wrongLetters: '', properLetters: '' }
        this.onLetterChange = this.onLetterChange.bind(this);
    }

    onLetterChange(e){
        this.setState({ wrongLetters: e.wrongLetters, properLetters: e.properLetters })
    }

    render(){
        return (
            <div className="letters__container">
                <LettersDisplay 
                    properLetters={this.state.properLetters} 
                    wrongLetters={this.state.wrongLetters}
                    wordToGuess='Kolorowe Korale Królowej Karoliny'
                />
                
                <LetterInput 
                    onLetterChange={this.onLetterChange}
                    wordToGuess={this.props.wordToGuess.toLowerCase()} 
                />

                <button>Guess</button>
            </div>
        )
    }
}

export default LettersPanel;