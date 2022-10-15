import React from 'react';

class Hangman extends React.Component{
    constructor(props){
        super();   

        this.state = { stage: 0 };
        this.nextStage = this.nextStage.bind(this);
    }

    nextStage(){
        this.setState((state, props) => ({
            stage: state.stage + 1
        }));
    }

    createAttemptsCounter(){
        if( this.state.stage === 10 ) {
            return <p>You lose, the answer was: XYZ</p>
        } else {
            let amountOfHealth = 10 - this.state.stage;
            let x = 0;
            let htmlText = 'Healths left: ';

            for(x; x<amountOfHealth; x++){
                htmlText += 'x';
            }

            return <div className="hangman__container">{htmlText}</div>;
        }
    }

    createTable(){
        return (
            <table>
                <thead></thead>
                <tbody>
                    <tr>
                        <td className={(this.state.stage > 4 ? 'hangman__line__vertical__right' : '')}></td>
                        <td className={(this.state.stage > 5 ? 'hangman__line__horizontal__top' : '')}></td>
                        <td className={(this.state.stage > 6 ? 'hangman__line--head' : '')}></td>
                        <td className="hangman__line__transparent"></td>
                    </tr>
                    <tr>
                        <td className={(this.state.stage > 3 ? 'hangman__line__vertical__right' : '')}></td>
                        <td className="hangman__line__transparent"></td>
                        <td className={(this.state.stage > 7 ? 'hangman--head' : '')}></td>
                        <td className="hangman__line__transparent"></td>
                    </tr>
                    <tr>
                        <td className={(this.state.stage > 2 ? 'hangman__line__vertical__right' : '')}></td>
                        <td className="hangman__line__transparent"></td>
                        <td className={(this.state.stage > 8 ? 'hangman--body--top' : '')}></td>
                        <td className="hangman__line__transparent"></td>
                    </tr>
                    <tr>
                        <td className={(this.state.stage > 1 ? 'hangman__line__vertical__right' : '')}></td>
                        <td className="hangman__line__transparent"></td>
                        <td className={(this.state.stage > 9 ? 'hangman--body--bottom' : '')}></td>
                        <td className="hangman__line__transparent"></td>
                    </tr>
                    <tr>
                        <td className={(this.state.stage > 0 ? 'hangman__box' : '')}></td>
                        <td className={(this.state.stage > 0 ? 'hangman__box' : '')}></td>
                        <td className="hangman__line__transparent"></td>
                        <td className="hangman__line__transparent"></td>
                    </tr>
                </tbody>
            </table>
        )
    }

    render(){
        return (
            <div className="hangman__container">
                <button onClick={this.nextStage}> go for next stage </button>
                { this.createAttemptsCounter() }
                { this.createTable() }
            </div>
        )

    }
}

export default Hangman;