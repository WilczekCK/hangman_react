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
                    <td></td>
                    <td class="hangman__line--horizontal"></td>
                    <td class="hangman__line--head"></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td class="hangman--head"></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        )
    }

    render(){
        return this.createTable();
    }
}

export default Hangman;