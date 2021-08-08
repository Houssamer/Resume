import React from 'react';
import LeftSide from '../components/LeftSide/LeftSide';
import RightSide from '../components/RightSide/RightSide';
import './style.css';

function HomeScreen() {
    return (
        <div className="homeScreen">
            <div className="leftSide">
                <LeftSide />
            </div>
            <div className="rightSide">
                <RightSide />
            </div>
        </div>
    )
}

export default HomeScreen; 