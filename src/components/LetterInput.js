import React from 'react';

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
        this.refreshLetterBoxes = this.refreshLetterBoxes.bind(this);
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
        this.refreshLetterBoxes();

        queueMicrotask(() => console.log(this.state.lettersProvided)); //DEV
    }

    isLetterActualInArray( newLetter ){
        newLetter = newLetter.toLowerCase(); //force!

        if( this.state.lettersProvided.includes(newLetter) ) {
            return false;
        }

        return newLetter;
    }

    refreshLetterBoxes(){
        const that = this;

        function Letter(props){
            if( that.state.properLetters.includes(props.value) || that.state.properLetters.includes( props.value.toUpperCase() ) ){
                return <span> {props.value} </span>
            } else {
                return <span></span>
            }
        }

        return (Array.from(this.state.wordToGuess).map((item, key) => 
            <Letter key={key} value={item} />
        ))
    }

    render(){
        return (
            <div>
                <h3>Provided letters are:</h3>
                
                <div className="letter_boxes">
                    { this.refreshLetterBoxes() }
                </div>

                <form onSubmit={this.submitForm}>
                    <input type="text" value={this.state.value} onChange={this.inputChange} maxLength="1"/>
                </form>
            </div>
        );
    }
}

export default LetterInput;