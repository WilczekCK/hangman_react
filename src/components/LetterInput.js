import React from 'react';

class LetterInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: '',
            attempts: 0,
            lettersProvided: [],
            properLetters:   [], //TBD
            wrongLetters:    []  //TBD
        };

        this.submitForm = this.submitForm.bind(this);
        this.inputChange = this.inputChange.bind(this);
    }

    inputChange(e){
        this.setState({ value: e.target.value })
    }

    submitForm(e){
        e.preventDefault();
        this.setState({
            lettersProvided: [...this.state.lettersProvided, this.state.value],
            value: ''
        })

        queueMicrotask(() => console.log(this.state.lettersProvided)); //DEV
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