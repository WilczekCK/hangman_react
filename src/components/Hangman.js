import React from 'react';

class Hangman extends React.Component{
    constructor(props){
        super();   

        this.state = { stage: 0 };
        this.createTable = this.createTable.bind(this);
        this.nextStage = this.nextStage.bind(this);
    }

    nextStage(){
        this.setState((state, props) => ({
            stage: state.stage + 1
        }));
    }

    createTable(){
        return (
            <table>
                <thead></thead>
                <tbody>
                    <tr>
                        <td className="hangman__line__vertical__right"></td>
                        <td className="hangman__line__horizontal__top"></td>
                        <td className="hangman__line--head"></td>
                        <td className="hangman__line__transparent"></td>
                    </tr>
                    <tr>
                        <td className="hangman__line__vertical__right"></td>
                        <td className="hangman__line__transparent"></td>
                        <td className="hangman--head"></td>
                        <td className="hangman__line__transparent"></td>
                    </tr>
                    <tr>
                        <td className="hangman__line__vertical__right"></td>
                        <td className="hangman__line__transparent"></td>
                        <td className="hangman--body--top"></td>
                        <td className="hangman__line__transparent"></td>
                    </tr>
                    <tr>
                        <td className="hangman__line__vertical__right"></td>
                        <td className="hangman__line__transparent"></td>
                        <td className="hangman--body--bottom"></td>
                        <td className="hangman__line__transparent"></td>
                    </tr>
                    <tr>
                        <td className="hangman__box"></td>
                        <td className="hangman__box"></td>
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
                {this.createTable() }
            </div>
        )

    }
}

export default Hangman;