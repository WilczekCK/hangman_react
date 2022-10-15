import React from 'react';

class Hangman extends React.Component{
    constructor(props){
        super(props);
    }


    createHealths(){
        if( this.props.health === 0 ) {
            return <p>You lose, the answer was: XYZ</p>
        } else {
            let healthAmount = Array(this.props.healthLeft).fill(0);
            const healthArray = healthAmount.map((health, index) => 
                <span key={index}> &#9829; </span>
            );

            return (
                <div className="hangman__container__counter">
                    Healths left: 
                    <div className="hangman__container__counter--healths">{healthArray}</div>
                </div>
            );
        }
    }

    createTable(){
        return (
            <table>
                <thead></thead>
                <tbody>
                    <tr>
                        <td className={(this.props.healthLeft < 6 ? 'hangman__line__vertical__right' : '')}></td>
                        <td className={(this.props.healthLeft < 5 ? 'hangman__line__horizontal__top' : '')}></td>
                        <td className={(this.props.healthLeft < 4 ? 'hangman__line--head' : '')}></td>
                        <td className="hangman__line__transparent"></td>
                    </tr>
                    <tr>
                        <td className={(this.props.healthLeft < 7 ? 'hangman__line__vertical__right' : '')}></td>
                        <td className="hangman__line__transparent"></td>
                        <td className={(this.props.healthLeft < 3 ? 'hangman--head' : '')}></td>
                        <td className="hangman__line__transparent"></td>
                    </tr>
                    <tr>
                        <td className={(this.props.healthLeft < 8 ? 'hangman__line__vertical__right' : '')}></td>
                        <td className="hangman__line__transparent"></td>
                        <td className={(this.props.healthLeft < 2 ? 'hangman--body--top' : '')}></td>
                        <td className="hangman__line__transparent"></td>
                    </tr>
                    <tr>
                        <td className={(this.props.healthLeft < 9 ? 'hangman__line__vertical__right' : '')}></td>
                        <td className="hangman__line__transparent"></td>
                        <td className={(this.props.healthLeft < 1 ? 'hangman--body--bottom' : '')}></td>
                        <td className="hangman__line__transparent"></td>
                    </tr>
                    <tr>
                        <td className={(this.props.healthLeft < 10 ? 'hangman__box' : '')}></td>
                        <td className={(this.props.healthLeft < 10 ? 'hangman__box' : '')}></td>
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
                { this.createTable() }
                { this.createHealths() }
            </div>
        )

    }
}

export default Hangman;