import React from 'react';
import LettersDisplay from '../components/LettersDisplay';
import LetterInput from '../components/LetterInput';
import LetterTips from '../components/LetterTips';

class LettersPanel extends React.Component{
    constructor(props){
        super(props);

        this.state = { wrongLetters: '', properLetters: '', repeatedLetter: '', isLastGuessOkay: null }
        this.onLetterChange = this.onLetterChange.bind(this);
        this.onLetterExists = this.onLetterExists.bind(this);
        this.onWrongLetter = this.onWrongLetter.bind(this);
        
        this.isRepeatedEffectOn = false;
    }

    onLetterChange(e){
        let additionalSettings;
        if ( this.isRepeatedEffectOn ) { 
            clearTimeout(this.isRepeatedEffectOn) 
            additionalSettings = {
                repeatedLetter: '',
                isRepeatedEffectOn: false
            }
        };

        this.setState({
            wrongLetters: e.wrongLetters,
            properLetters: e.properLetters,
            isLastGuessOkay: e.isLastGuessOkay,
            ...additionalSettings
        })
    }

    onWrongLetter(){
        let additionalSettings;
        if ( this.isRepeatedEffectOn ) { 
            clearTimeout(this.isRepeatedEffectOn) 
            additionalSettings = {
                repeatedLetter: '',
                isRepeatedEffectOn: false
            }
        };

        this.setState({isLastGuessOkay: false, ...additionalSettings})
    }

    onLetterExists(e){
        this.setState({ repeatedLetter: e.value, isLastGuessOkay:true });
        
        if( this.isRepeatedEffectOn !== false ) {
          clearTimeout(this.isRepeatedEffectOn);
          this.isRepeatedEffectOn = false;
        }

        // That effect is just for a moment, to inform an user.
        this.isRepeatedEffectOn = setTimeout(() => {
            this.setState({ repeatedLetter: '' });
        }, 3000)
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

                <LetterTips
                    isLastGuessOkay={this.state.isLastGuessOkay}
                    repeatedLetter={this.state.repeatedLetter}
                />
                
                <LetterInput 
                    onLetterChange={this.onLetterChange}
                    onLetterExists={this.onLetterExists}
                    onWrongLetter={this.onWrongLetter}
                    wordToGuess={this.props.wordToGuess.toLowerCase()} 
                />
            </div>
        )
    }
}

export default LettersPanel;