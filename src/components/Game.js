import React from 'react';
import {Layer, Stage} from 'react-konva';
import Controller from '../containers/Controller';
import Blocks from '../containers/Blocks';
import RemainingBlocks from '../containers/RemainingBlocks';
import Scores from '../components/Scores';
import Information from '../components/Information';

const Game = ( props ) => (
    <div >
        <Scores points={props.points} />
        <Information class={props.gameState} playOnClick={props.playOnClick} />
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
