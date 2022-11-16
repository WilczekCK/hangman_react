import React from 'react';

class WordselectPage extends React.Component{
    constructor(props){
        super(props);

        this.state = { wordToGuess: '', isWordProvided: false, wordTip:'' }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e){
        const wordProvided = e.target.value;

        if( wordProvided.length > 25 ) {
            this.setState({ wordTip: 'The letters limit has been crossed' })
        } else {
            if ( wordProvided.length <= 5 ) {
                this.setState({ wordTip: 'The word to guess must have minimum 5 letters' })
                this.setState({ isWordProvided: false })
            } else {
                this.setState({ wordTip: 'All okay, you can start the game' })
                this.setState({ isWordProvided: true })
            }

            this.setState({ wordToGuess: wordProvided })
        }
    }

    render(){
        return (
            <div className={this.props.classList}>
                <div data-firstPage={this.props.previousScreen === 'start'} className="page__container page__container--left"></div>
                <div className="page__container page__container--right">
                    <h2> Type the word to guess: </h2>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <input type="password" name="maxMistakes" onChange={this.handleInputChange} value={this.state.wordToGuess} placeholder="Madagascar"/>
                    </form>

                    <h3>{this.state.wordTip}</h3>

                    <div className={this.state.isWordProvided ? "page__container__triangle" : "page__container__triangle disabled"}  data-goto="game" data-wordtoguess={this.state.wordToGuess} onClick={ this.props.changeScreen }>PLAY</div>
                </div>
            </div>
        );
    }
}

export default WordselectPage;