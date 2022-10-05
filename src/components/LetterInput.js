import React from 'react';

class LetterBox extends React.Component{
    constructor(props){
        super(props);

        this.createSingleLetter = this.createSingleLetter.bind(this);
    }

    handleChange

    createSingleLetter(){
        if( this.props.properLetters.includes( this.props.value ) ){
            return <span data-letter={this.props.value}> {this.props.value} </span>
        } else if( this.props.value === ' ' ){
            return <span className="blank_space"></span>
        } else {
            return <span></span>
        }
    }

    render(){
        return this.createSingleLetter();
    }
}

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
        return (Array.from(this.state.wordToGuess).map((item, key) => 
            <LetterBox key={key} value={item} properLetters={this.state.properLetters} wrongLetters={this.state.wrongLetters} />
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