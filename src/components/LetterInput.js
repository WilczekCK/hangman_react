import React from 'react';

class LetterInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {value: ''};

        this.submitForm = this.submitForm.bind(this);
        this.inputChange = this.inputChange.bind(this);
    }

    inputChange(e){
        this.setState({ value: e.target.value })
    }

    submitForm(e){
        e.preventDefault();
        console.log( this.state.value );
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