import React from 'react';
import LetterBox from './LetterBox';

class LetterInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: '',
            attempts: 0,
            wordToGuess: props.wordToGuess.toLowerCase(),
            lettersProvided: [],
            properLetters:   [],
            wrongLetters:    []
        };

        this.submitForm = this.submitForm.bind(this);
        this.inputChange = this.inputChange.bind(this);
        this.assignLetterToArray = this.assignLetterToArray.bind(this);
    }

    assignLetterToArray(){
        const valueToLower = this.state.value.toLowerCase();
        if( Array.from( this.state.wordToGuess.toLowerCase() ).includes(valueToLower) ){
            this.setState({ properLetters: [...this.state.properLetters, valueToLower] })            
        } else {
            this.setState({ wrongLetters: [...this.state.wrongLetters, valueToLower] })
        }
    }

    inputChange(e){
        this.setState({ value: e.target.value })
    }

    submitForm(e){
        e.preventDefault();
        if( !this.isLetterActualInArray(this.state.value) ) {
            alert('This letter was provided earlier, type another one.');
            return false;
        }

        this.setState({
            lettersProvided: [...this.state.lettersProvided, this.state.value.toLowerCase()],
            value: ''
        })

        this.assignLetterToArray();
        this.props.onLetterChange( this.state );
        
        queueMicrotask(() => console.log(this.state.lettersProvided)); //DEV
    }

    isLetterActualInArray( newLetter ){
        newLetter = newLetter.toLowerCase(); //force!

        if( this.state.lettersProvided.includes(newLetter) ) {
            return false;
        }

        return newLetter;
    }

    render(){
        return (
            <form onSubmit={this.submitForm}>
                <input type="text" value={this.state.value} onChange={this.inputChange} maxLength="1"/>
            </form>
        );
    }
}

export default LetterInput;