import React from 'react';

class LetterInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: '',
            attempts: 0,
            wordToGuess: props.wordToGuess.toLowerCase(),
            isLastGuessOkay: null,
            lettersProvided: [],
            properLetters:   [],
            wrongLetters:    [],
        };

        this.submitForm = this.submitForm.bind(this);
        this.inputChange = this.inputChange.bind(this);
        this.assignLetterToArray = this.assignLetterToArray.bind(this);
    }

    assignLetterToArray(){
        if( Array.from( this.state.wordToGuess.toLowerCase() ).includes(this.state.value) ){
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
        if( !this.isLetterActualInArray(this.state.value) ) {
            this.props.onLetterExists( this.state );
            return false;
        }

        this.setState({
            lettersProvided: [...this.state.lettersProvided, this.state.value],
            value: ''
        })

        this.assignLetterToArray();
        
        queueMicrotask(() => this.props.onLetterChange( this.state ));
    }

    isLetterActualInArray( newLetter ){
        if( this.state.lettersProvided.includes(newLetter) ) {
            this.setState({value: ''});
            return false;
        }

        return newLetter;
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