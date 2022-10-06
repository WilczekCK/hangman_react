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

export default LetterBox;