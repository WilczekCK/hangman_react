import React from 'react';

class Hangman extends React.Component{
    constructor(props){
        super();

        this.createTable = this.createTable.bind(this);
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
        return this.createTable();
    }
}

export default Hangman;