import React from 'react';

class Hangman extends React.Component{
    constructor(props){
        super(props);

        this.percentageHealthLeft = this.percentageHealthLeft.bind(this);
    }


    createHealths(){
        if( this.props.healthLeft === 0 ) {
            return <p>You lose, the answer was: XYZ</p>
        } else {
            let healthAmount = Array(parseInt(this.props.healthLeft)).fill(0);
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

    percentageHealthLeft(){
        const percetageOfRootNumber = (this.props.healthLeft / this.props.maxMistakes) * 100;
        return percetageOfRootNumber;
    }

    createTable(){
        return (
            <table>
                <thead></thead>
                <tbody>
                    <tr>
                        <td className={(this.percentageHealthLeft() < 60 ? 'hangman__line__vertical__right' : '')}></td>
                        <td className={(this.percentageHealthLeft() < 50 ? 'hangman__line__horizontal__top' : '')}></td>
                        <td className={(this.percentageHealthLeft() < 40 ? 'hangman__line--head' : '')}></td>
                        <td className="hangman__line__transparent"></td>
                    </tr>
                    <tr>
                        <td className={(this.percentageHealthLeft() < 70 ? 'hangman__line__vertical__right' : '')}></td>
                        <td className="hangman__line__transparent"></td>
                        <td className={(this.percentageHealthLeft() < 30 ? 'hangman--head' : '')}></td>
                        <td className="hangman__line__transparent"></td>
                    </tr>
                    <tr>
                        <td className={(this.percentageHealthLeft() < 80 ? 'hangman__line__vertical__right' : '')}></td>
                        <td className="hangman__line__transparent"></td>
                        <td className={(this.percentageHealthLeft() < 20 ? 'hangman--body--top' : '')}></td>
                        <td className="hangman__line__transparent"></td>
                    </tr>
                    <tr>
                        <td className={(this.percentageHealthLeft() < 90 ? 'hangman__line__vertical__right' : '')}></td>
                        <td className="hangman__line__transparent"></td>
                        <td className={(this.percentageHealthLeft() <= 0 ? 'hangman--body--bottom' : '')}></td>
                        <td className="hangman__line__transparent"></td>
                    </tr>
                    <tr>
                        <td className={(this.percentageHealthLeft() < 100 ? 'hangman__box' : '')}></td>
                        <td className={(this.percentageHealthLeft() < 100 ? 'hangman__box' : '')}></td>
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