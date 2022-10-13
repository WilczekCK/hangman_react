import React from 'react';

class LetterInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: '',
            attempts: 0,
            wordToGuess: props.wordToGuess.toLowerCase(),
            isLastGuessOkay: null,
            properLetters:   [],
            wrongLetters:    [],
        };

        this.submitForm = this.submitForm.bind(this);
        this.inputChange = this.inputChange.bind(this);
        this.assignLetterToArray = this.assignLetterToArray.bind(this);
        this.isLetterInWordToGuess = this.isLetterInWordToGuess.bind(this);
    }

    isLetterInWordToGuess(){
        return Array.from( this.state.wordToGuess.toLowerCase() ).includes(this.state.value)
    }

    assignLetterToArray(){
        if( this.isLetterInWordToGuess() ){
            this.setState({ properLetters: [...this.state.properLetters, this.state.value], isLastGuessOkay: true })            
        } else {
            this.setState({ wrongLetters: [...this.state.wrongLetters, this.state.value], isLastGuessOkay: false })
        }
    }

    inputChange(e){
        this.setState({ value: e.target.value.toLowerCase() })
    }

    submitForm(e){
        e.preventDefault();
        if(this.state.value === ' ') return this.setState({value: ''}); //prevent spaces!

        if( this.wasLetterProvidedEarlier() && this.isLetterInWordToGuess() ) { //repeated letter
            this.props.onLetterExists( this.state );
            this.setState({value: ''});
        } else if( !this.isLetterInWordToGuess()) { //wrong letter
            this.props.onWrongLetter();

            if ( !this.wasLetterProvidedEarlier() ) {
                this.setState({value: '', isLastGuessOkay: false, wrongLetters: [...this.state.wrongLetters, this.state.value]});
            } else {
                this.setState({value: '',  isLastGuessOkay: false});
            }
        } else { //all k
            this.setState({
                properLetters: [...this.state.properLetters, this.state.value],
                value: '',
                isLastGuessOkay: true
            })
            
            queueMicrotask(() => this.props.onLetterChange( this.state ));
        }

    }

    wasLetterProvidedEarlier(){
        if( this.state.properLetters.includes(this.state.value) || this.state.wrongLetters.includes(this.state.value) ) {  
            return true;
        }

        return false;
    }

    render(){
        return (
            <form onSubmit={this.submitForm}>
                <input type="text" value={this.state.value} onChange={this.inputChange} maxLength="1" placeholder="Type a letter to ask"/>

                <button>Click here</button> or hit enter to guess a letter.
            </form>
        );
    }
}

export default LetterInput;