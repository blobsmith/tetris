import React from 'react';
import {Shape} from 'react-konva';

const ShapeComponent = ( props ) => (
    <Shape
        fill={props.color}
        stroke="black"
        opacity="0.7"
    sceneFunc={function (ctx) {
    ctx.beginPath();
    let first = true;
    for (const key in props.coordinates) {
        let point = props.coordinates[key];
        if (first) {
            ctx.moveTo(parseInt(point[0], 10), parseInt(point[1], 10));
            first = false;
        }
        else {
            ctx.lineTo(parseInt(point[0], 10), parseInt(point[1], 10));
        }
    }
    ctx.shadowColor = 'white';
    ctx.shadowBlur = 10;
    ctx.closePath();
    // Konva specific method
    ctx.fillStrokeShape(this);
    }}
    />
);

export default ShapeComponent
