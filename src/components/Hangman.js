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
                <tr>
                    <td class="hangman__line__vertical__right"></td>
                    <td class="hangman__line__horizontal__top"></td>
                    <td class="hangman__line--head"></td>
                    <td class="hangman__line__transparent"></td>
                </tr>
                <tr>
                    <td class="hangman__line__vertical__right"></td>
                    <td class="hangman__line__transparent"></td>
                    <td class="hangman--head"></td>
                    <td class="hangman__line__transparent"></td>
                </tr>
                <tr>
                    <td class="hangman__line__vertical__right"></td>
                    <td class="hangman__line__transparent"></td>
                    <td class="hangman--body--top"></td>
                    <td class="hangman__line__transparent"></td>
                </tr>
                <tr>
                    <td class="hangman__line__vertical__right"></td>
                    <td class="hangman__line__transparent"></td>
                    <td class="hangman--body--bottom"></td>
                    <td class="hangman__line__transparent"></td>
                </tr>
                <tr>
                    <td class="hangman__box"></td>
                    <td class="hangman__box"></td>
                    <td class="hangman__line__transparent"></td>
                    <td class="hangman__line__transparent"></td>
                </tr>
            </table>
        )
    }

    render(){
        return (
            <div>
                <button onClick={this.nextStage}> go for next stage </button>
                {this.createTable() };
            </div>
        )

    }
}

export default Hangman;