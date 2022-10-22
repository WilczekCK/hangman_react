import React from 'react';

class HomePage extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className={this.props.classList}>
                <div className="page__container page__container--left"></div>
                <div className="page__container page__container--right"></div>
            </div>
        );
    }
}

export default HomePage;