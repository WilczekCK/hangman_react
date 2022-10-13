import React from 'react';

class LetterTips extends React.Component{
    constructor(props){
        super(props);

    }



    render(){
        if(  this.props.isLastGuessOkay ){
            return 'All okay!';
        } else {
            return 'Wrong!';
        }
    }
}

export default LetterTips;