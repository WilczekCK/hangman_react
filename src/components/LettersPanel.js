import React from 'react';
import LettersDisplay from './LettersDisplay';
import LetterInput from './LetterInput';
import LetterTips  from './LetterTips';
import EndRound  from './EndRound';


class LettersPanel extends React.Component{
    constructor(props){
        super(props);

        this.state = { wrongLetters: '', properLetters: '', repeatedLetter: '', isLastGuessOkay: null }
        this.onLetterChange = this.onLetterChange.bind(this);
        this.onLetterExists = this.onLetterExists.bind(this);
        this.onWrongLetter = this.onWrongLetter.bind(this);
        this.repeatedLetterEffectReset = this.repeatedLetterEffectReset.bind(this);
        this.clearLetterPanel = this.clearLetterPanel.bind(this);

        this.isRepeatedEffectOn = false;
    }

    repeatedLetterEffectReset(){
        if( this.isRepeatedEffectOn !== false ) {
            clearTimeout(this.isRepeatedEffectOn);
            this.isRepeatedEffectOn = false;
        }
        
        this.setState({repeatedLetter: ''})
    }

    onLetterChange(e){
        this.repeatedLetterEffectReset();

        this.setState({
            wrongLetters: e.wrongLetters,
            properLetters: e.properLetters,
            isLastGuessOkay: e.isLastGuessOkay,
        })
    }

    onWrongLetter(){
        this.repeatedLetterEffectReset();
        this.props.onWrongLetter();

        this.setState({isLastGuessOkay: false})
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

    componentDidUpdate(prevProps, prevState){
        // Clear letters on lose! wip
        if( !this.props.isHangmanAlive && this.state.properLetters.length > 0 ){
            this.setState({
                wrongLetters: '', properLetters: '', repeatedLetter: '', isLastGuessOkay: null
            })
        }

        return true;
    }

    clearLetterPanel(e){
        console.log('dafuq');
        this.setState({
            wrongLetters: '', properLetters: '', repeatedLetter: '', isLastGuessOkay: null
        })
    }

    render(){
        return (
            <div className="letters__container">
                <LettersDisplay 
                    properLetters={this.state.properLetters} 
                    wrongLetters={this.state.wrongLetters}
                    repeatedLetter={this.state.repeatedLetter}
                    wordToGuess={this.props.wordToGuess}
                />
                
                <LetterTips
                    isLastGuessOkay={this.state.isLastGuessOkay}
                    repeatedLetter={this.state.repeatedLetter}
                />
                
                <div className={!this.props.isHangmanAlive || this.props.isWordGuessed ? 'letters__container__input hide' : 'letters__container__input'}>
                    <LetterInput 
                        onLetterChange={this.onLetterChange}
                        onLetterExists={this.onLetterExists}
                        onWrongLetter={this.onWrongLetter}
                        wordToGuess={this.props.wordToGuess.toLowerCase()}
                        isHangmanAlive={this.props.isHangmanAlive}
                        changeRoundStatus={this.props.changeRoundStatus}
                    />
                </div>

                <EndRound 
                    isWordGuessed={this.props.isWordGuessed}
                    isHangmanAlive={this.props.isHangmanAlive} 
                    changeScreen={this.props.changeScreen} 
                    clearLetterPanel={this.clearLetterPanel} 
                />
            </div>
        )
    }
}

export default LettersPanel;