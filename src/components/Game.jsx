import React from 'react';
import {Layer, Stage} from 'react-konva';

import LShape from '../containers/shapes/LShape';
import InverseLShape from '../containers/shapes/InverseLShape';
import SquareShape from '../containers/shapes/SquareShape';
import ZShape from '../containers/shapes/ZShape';
import InverseZShape from '../containers/shapes/InverseZShape';
import TriangleShape from '../containers/shapes/TriangleShape';
import BarShape from '../containers/shapes/BarShape';
import Controller from '../containers/Controller';

const Game = ( props ) => (
    <div >
        <Stage width={200} height={500} className="Game"  >
            <Layer >
                <BarShape
                    xPosition={props.xPosition}
                    yPosition={props.yPosition}
                />
            </Layer>
        </Stage>
        <Controller
            onMove={props.onMove}
            game={props.game}
        />
    </div>
)
export default Game
