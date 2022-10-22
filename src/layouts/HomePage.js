import React from 'react';

class HomePage extends React.Component{
    constructor(props){
        super();
    }

    render(){
        return (
            <div>
                <div className="page__left__container"></div>
                <div className="page__right__container"></div>
            </div>
        );
    }
}

export default HomePage;