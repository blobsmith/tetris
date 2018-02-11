import React from 'react';
import {Layer, Stage} from 'react-konva';
import Controller from '../containers/Controller';
import Blocks from '../containers/Blocks';
import RemainingBlocks from '../containers/RemainingBlocks';

const Game = ( props ) => (
    <div >
        <Stage width={200} height={500} className="Game"  >
            <Layer >
                <Blocks />
                <RemainingBlocks />
            </Layer>
        </Stage>
        <Controller />
    </div>
);
export default Game;
