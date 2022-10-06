import React from 'react';

class LetterBox extends React.Component{
    constructor(props){
        super(props);

        this.createSingleLetter = this.createSingleLetter.bind(this);
    }

    createSingleLetter(){
        const properLetters = this.props.properLetters;
        const inputLetter = this.props.value;

        if( properLetters.includes( inputLetter ) ){
            return <span data-letter={inputLetter}> {inputLetter} </span>
        } else if( inputLetter === ' ' ){
            return <span className="blank_space"></span>
        } else {
            return <span></span>
        }
    }

    render(){
        return this.createSingleLetter();
    }
}

export default LetterBox;