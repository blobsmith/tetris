import React from 'react';
import {Shape} from 'react-konva';

const ShapeComponent = ( props ) => (
    <Shape
        fill={props.color}
    sceneFunc={function (ctx) {
    ctx.beginPath();
    let first = true;
    for (const key in props.coordinates) {
        let points = props.coordinates[key];
        if (first) {
            ctx.moveTo(parseInt(props.xPosition) + parseInt(points[0]), parseInt(props.yPosition) + parseInt(points[1]));
            first = false;
        }
        else {
            ctx.lineTo(parseInt(props.xPosition) + parseInt(points[0]), parseInt(props.yPosition) + parseInt(points[1]));
        }
    }
    ctx.shadowColor = 'white';
    ctx.shadowBlur = 10;
    ctx.closePath();
    // Konva specific method
    ctx.fillStrokeShape(this);
    }}
    />
)

export default ShapeComponent
