import React from 'react';

class LetterTips extends React.Component{
    constructor(props){
        super();
    }

    render(){
        const {isLastGuessOkay, repeatedLetter} = this.props;

        if ( isLastGuessOkay === null ) { //init
            return <span className="letters__container--tips">Guess your first letter</span>;
        } else if( isLastGuessOkay && repeatedLetter ){ //the same letter
            return <span className="letters__container--tips">That letter was provided already</span>;
        } else if( isLastGuessOkay ) { //ok
            return <span className="letters__container--tips">Go further...</span>
        } else { //wrong letter
            return <span className="letters__container--tips">Wrong letter!</span>
        }
    }
}

export default LetterTips;