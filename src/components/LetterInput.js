import React from 'react';

class LetterInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: '',
            isLastGuessOkay: null,
            properLetters:   [],
            wrongLetters:    [],
        };

        this.submitForm = this.submitForm.bind(this);
        this.inputChange = this.inputChange.bind(this);
        this.assignLetterToArray = this.assignLetterToArray.bind(this);
        this.isLetterInWordToGuess = this.isLetterInWordToGuess.bind(this);
    }


    componentDidUpdate(prevProps, prevState){
        // Clear letters on lose
        if( !this.props.isHangmanAlive && this.state.properLetters.length > 0 ){
            this.setState({
                value: '',
                attempts: 0,
                isLastGuessOkay: null,
                properLetters:   [],
                wrongLetters:    []
            })
        }

        return true;
    }

    isLetterInWordToGuess(){
        return Array.from( this.props.wordToGuess.toLowerCase() ).includes(this.state.value)
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
        //prevent spaces and empty values!
        if(this.state.value === ' ' || this.state.value === '') {
            this.setState({value:''});
            return false;
        };

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
                <h3>Type in letter: </h3>
                <input type="text" value={this.state.value} onChange={this.inputChange} maxLength="1" />

                <button>OK</button>
            </form>
        );
    }
}

export default LetterInput;