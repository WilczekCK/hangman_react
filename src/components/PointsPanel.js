import React from 'react';

class PointsPanel extends React.Component{
    constructor(props){
        super(props);
    }


    render(){ 
        const {playerOne, playerTwo} = this.props.scores;
        return (
            <>
                <h2> Player points </h2>

                <div className="page__container__points">
                    <div className="page__container__points__heading">
                        <ul>
                            <li>Player 1</li>
                            <li>Player 2</li>
                        </ul>
                    </div>
                    
                    <div className="page__container__points__players">
                        <div className="page__container__points__players--a">
                            {playerOne}
                        </div>
                        <div className="page__container__points__players--b">
                            {playerTwo}
                        </div>
                    </div>

                </div>
            </>
        )
    }
}

export default PointsPanel;