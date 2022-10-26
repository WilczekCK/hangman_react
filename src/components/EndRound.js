import React from 'react';

class EndRound extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className={this.props.isHangmanAlive ? 'letters__container__input hide' : 'letters__container__input'}>
                <div className="page__container__triangle" data-goto="word_select" data-result="loser" onClick={ this.props.changeScreen }>PLAY</div>
            </div>
        )
    }
}

export default EndRound;