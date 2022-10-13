import React from 'react';

class LetterTips extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        const {isLastGuessOkay, repeatedLetter} = this.props;

        if ( isLastGuessOkay === null ) { //init
            return '';
        } else if( isLastGuessOkay && repeatedLetter ){ //the same letter
            return 'That letter is already provided'
        } else if( isLastGuessOkay ) { //ok
            return 'Go further...'
        } else { //wrong letter
            return 'Wrong letter!'
        }
    }
}

export default LetterTips;