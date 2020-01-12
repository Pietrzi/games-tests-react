import React from 'react';
import CityMap from './CityMap';
import InfoBar from './InfoBar';
import ToolBar from './ToolBar';

const Game = () => {
   
    return (
        <div className="game-wrapper">
            <InfoBar />
            <CityMap />
            <ToolBar />
        </div>
    )
   
}


export default Game;