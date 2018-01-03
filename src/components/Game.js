import React from 'react';
import {Layer, Stage} from 'react-konva';
import Controller from '../containers/Controller';
import StandardShape from '../containers/StandardShape';

const Game = ( props ) => (
    <div >
        <Stage width={200} height={500} className="Game"  >
            <Layer >
                {/* Bad code due to dynamic name generation is incompatible with React-Konva */}
                {
                    <StandardShape  xPosition={props.xPosition}
                                    yPosition={props.yPosition}
                                    shape={props.currentShape}
                    />
                }
            </Layer>
        </Stage>
        <Controller />
    </div>
);
export default Game;
