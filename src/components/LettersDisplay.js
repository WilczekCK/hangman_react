import React from 'react';
import LetterInput from './LetterInput';
import LetterBox from './LetterBox';

class LettersDisplay extends React.Component{
    constructor(props){
        super(props);

        this.renderLetterBoxes = this.renderLetterBoxes.bind(this);
        this.handleLettersChange = this.handleLettersChange.bind(this);

        this.state = {
            wrongLetters: '',
            properLetters: ''
        }
    }

    handleLettersChange(e){
        const { wrongLetters, properLetters } = e;

        console.log(properLetters);

        this.setState({
            wrongLetters,
            properLetters
        })

        queueMicrotask(() => this.renderLetterBoxes(wrongLetters, properLetters));
    }

    renderLetterBoxes() { 
        return (Array.from(this.props.wordToGuess).map((item, key) => 
           <LetterBox key={key} value={item} properLetters={this.state.properLetters} wrongLetters={this.state.wrongLetters} />
        ))
    }

    render(){
        return (<div>
                <div className="letter_boxes">
                    { this.renderLetterBoxes() }
                </div>

                <LetterInput onLetterChange={this.handleLettersChange} wordToGuess={this.props.wordToGuess} />
        </div>)
        
    }
}

export default LettersDisplay;