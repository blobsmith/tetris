import React from 'react';
import {Layer, Stage} from 'react-konva';
import Controller from '../containers/Controller';
import StandardShape from '../containers/StandardShape';
import RemainingShapes from '../containers/RemainingShapes';

const Game = ( props ) => (
    <div >
        <Stage width={200} height={500} className="Game"  >
            <Layer >
                <StandardShape />
                <RemainingShapes />
            </Layer>
        </Stage>
        <Controller />
    </div>
);
export default Game;
