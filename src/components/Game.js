import React from 'react';
import CityMap from './CityMap';
import InfoBar from './InfoBar';
import ToolBar from './ToolBar';
import Map from './Map';
import Hero from './Hero';

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