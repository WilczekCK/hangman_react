import React from 'react';

class PointsPanel extends React.Component{
    constructor(props){
        super();
    }


    render(){ 
        //TODO - JUST A PLACEHOLDER NOW
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
                            4
                        </div>
                        <div className="page__container__points__players--b">
                            2
                        </div>
                    </div>

                </div>
            </>
        )
    }
}

export default PointsPanel;