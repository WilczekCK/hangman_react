import React from 'react';

class WordselectPage extends React.Component{
    constructor(props){
        super(props);

        this.state = { wordToGuess: '' }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e){
        this.setState({ wordToGuess: e.target.value });
    }

    render(){
        return (
            <div className={this.props.classList}>
                <div data-firstPage={this.props.previousScreen === 'start'} className="page__container page__container--left"></div>
                <div className="page__container page__container--right">
                    <h2> Select password </h2>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <input type="text" name="maxMistakes" onChange={this.handleInputChange} value={this.state.wordToGuess} placeholder="Madagascar"/>
                    </form>

                    <br/>
                    <button data-goto="game" data-wordtoguess={this.state.wordToGuess} onClick={ this.props.changeScreen }>Play</button>
                </div>
            </div>
        );
    }
}

export default WordselectPage;