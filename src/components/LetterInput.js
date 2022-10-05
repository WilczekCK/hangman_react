import React from 'react';

class LetterInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: '',
            attempts: 0,
            wordToGuess: props.wordToGuess,
            lettersProvided: [],
            properLetters:   [], //TBD
            wrongLetters:    []  //TBD
        };

        this.submitForm = this.submitForm.bind(this);
        this.inputChange = this.inputChange.bind(this);
        this.assignLetterToArray = this.assignLetterToArray.bind(this);
    }

    assignLetterToArray(){

        //this.state.value
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
            lettersProvided: [...this.state.lettersProvided, this.state.value],
            value: ''
        })

        this.assignLetterToArray();

        queueMicrotask(() => console.log(this.state.lettersProvided)); //DEV
    }

    isLetterActualInArray( newLetter ){
        if( this.state.lettersProvided.includes(newLetter) ) {
            return false;
        }

        return newLetter;
    }

    render(){
        return (
            <div>
                <h3>Provided letters are:</h3>
                
                <div>
                    {this.state.lettersProvided.map((item, key) => 
                        <span>{item}</span>
                    )} 
                </div>

                <form onSubmit={this.submitForm}>
                    <input type="text" value={this.state.value} onChange={this.inputChange} maxLength="1"/>
                </form>
            </div>
        );
    }
}

export default LetterInput;