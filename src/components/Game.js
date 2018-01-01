import React from 'react';
import {Layer, Stage} from 'react-konva';
import Controller from '../containers/Controller';

// Shapes definitions
import LShape from '../containers/shapes/LShape';
import InverseLShape from '../containers/shapes/InverseLShape';
import SquareShape from '../containers/shapes/SquareShape';
import ZShape from '../containers/shapes/ZShape';
import InverseZShape from '../containers/shapes/InverseZShape';
import TriangleShape from '../containers/shapes/TriangleShape';
import BarShape from '../containers/shapes/BarShape';


const Game = ( props ) => (
    <div >
        <Stage width={200} height={500} className="Game"  >
            <Layer >
                {/* Bad code due to dynamic name generation is incompatible with React-Konva */}
                {
                    props.currentShape === 'LShape' ?
                        <LShape xPosition={props.xPosition}
                                yPosition={props.yPosition}/> :
                        props.currentShape === 'InverseLShape' ?
                            <InverseLShape xPosition={props.xPosition}
                                           yPosition={props.yPosition}/> :
                            props.currentShape === 'SquareShape' ?
                                <SquareShape xPosition={props.xPosition}
                                             yPosition={props.yPosition}/> :

                                props.currentShape === 'ZShape' ?
                                    <ZShape xPosition={props.xPosition}
                                            yPosition={props.yPosition}/> :

                                    props.currentShape === 'InverseZShape' ?
                                        <InverseZShape xPosition={props.xPosition}
                                                       yPosition={props.yPosition}/> :

                                        props.currentShape === 'TriangleShape' ?
                                            <TriangleShape xPosition={props.xPosition}
                                                           yPosition={props.yPosition}/> :

                                            <BarShape xPosition={props.xPosition}
                                                      yPosition={props.yPosition}/>
                }
            </Layer>
        </Stage>
        <Controller />
    </div>
)
export default Game
