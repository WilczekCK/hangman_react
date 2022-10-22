import React from 'react';

class HomePage extends React.Component{
    constructor(props){
        super(props);

        this.state = { maxMistakes: 8 };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        let fixedValue = e.target.value; // dont let negative values
        
        if( fixedValue < 0 ) {
            fixedValue = 1;
        } else if( fixedValue > 12)  {
            fixedValue = 12;
        }

        this.setState({ maxMistakes: Math.abs(fixedValue) });
    }

    render(){
        return (
            <div className={this.props.classList}>
                <div className="page__container page__container--left"></div>
                <div className="page__container page__container--right">
                    <h2> Hangman </h2>
                    
                    <form onSubmit={(e) => e.preventDefault()}>
                        <label> Maximal mistakes 
                            <input type="number" min="1" name="maxMistakes" onChange={this.handleInputChange} value={this.state.maxMistakes} />
                        </label>
                    </form>

                    <button data-goto="word_select" data-mistakesallowed={this.state.maxMistakes} onClick={ this.props.changeScreen }>Play</button>
                </div>
            </div>
        );
    }
}

export default HomePage;