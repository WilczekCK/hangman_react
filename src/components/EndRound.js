import React from 'react';

class EndRound extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className={!this.props.isHangmanAlive || this.props.isWordGuessed ? 'letters__container__input' : 'letters__container__input hide'}>
                <div className="page__container__triangle" data-goto="word_select" onClick={(e) => {this.props.changeScreen(e); this.props.clearLetterPanel(e)} }>PLAY</div>
                {this.props.isWordGuessed ? 'You win!': "You lose!"}
            </div>
        )
    }
}

export default EndRound;