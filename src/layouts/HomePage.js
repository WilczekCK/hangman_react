import React from 'react';

class HomePage extends React.Component{
    constructor(props){
        super(props);

        this.state = { maxMistakes: 10 };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        let fixedValue = e.target.value; // dont let negative values
        
        if ( !fixedValue.length ) {
            fixedValue = "";
        } else if ( fixedValue <= 0 ) {
            fixedValue = 1;
        } else if ( fixedValue > 12)  {
            fixedValue = 12;
        }

        this.setState({ maxMistakes: fixedValue });
    }

    render(){
        return (
            <div className={this.props.classList}>
                <div className="page__container page__container--left">
                    <h2>The hotseat version of very popular game.</h2>
                    <p>It was made as a first project after reading documentation of React (the old one, with class components, unfortunately)</p>
                    <p>Below some informations that you should know to start:</p>
                    <ol>
                        <li> There is no limit of points, end when you want to </li>
                        <li> Points are calculated of remaining healths </li>
                        <li> If letter is already guessed, you wont lose health after typing it again</li>
                    </ol>

                    <b>Design of game made by Natalia Płocka</b>
                </div>
                <div className="page__container page__container--right">
                    <div className="page__container__sticker">
                        <h2> Hangman </h2>
                        tries allowed: 
                        
                        <form onSubmit={(e) => e.preventDefault()}>
                            <label> 
                                <input type="number" name="maxMistakes" onChange={this.handleInputChange} value={this.state.maxMistakes} placeholder={ !this.state.maxMistakes.length ? '10' : '' }/>
                            </label>
                        </form>
                    </div>
                
                    <div data-goto="word_select" data-mistakesallowed={this.state.maxMistakes} onClick={ this.props.changeScreen } className="page__container__triangle">
                        START
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;