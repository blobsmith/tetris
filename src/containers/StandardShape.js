import React from 'react';
import ShapeComponent from '../components/ShapeComponent.jsx';

class StandardShape extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            xPosition: props.xPosition,
            yPosition: props.yPosition,
            color: this.getColour(),
            coordinates: this.getCoordinates()
        };
    }

    getColour() {
        return '#000000';
    }

    getCoordinates() {
        return [];
    }

    /**
     * Rotate a shape.
     *
     * @param reverse
     *      Rotate in other sens.
     */
    rotate (e, reverse = false) {
        e.preventDefault();
        if (this.isRotatable()) {
            let coordinates = [];
            let rotateMatrix = [
                [0, -1],
                [1, 0]
            ];
            if (reverse) {
                rotateMatrix = [
                    [0, 1],
                    [-1, 0]
                ];
            }

            for (let key in this.state.coordinates) {
                const position = this.state.coordinates[key];

                // Dot product
                coordinates.push([
                    position[0]*rotateMatrix[0][0] + position[1]*rotateMatrix[1][0],
                    position[0]*rotateMatrix[0][1] + position[1]*rotateMatrix[1][1],
                ]);
            }
            this.setState( {
                coordinates: coordinates
            });
        }
    }

    isRotatable() {
        return true;
    }

    test() {
        console.log('njfnda');
    }

    render() {
        return (
            <ShapeComponent
                xPosition={this.state.xPosition}
                yPosition={this.state.yPosition}
                color={this.state.color}
                coordinates={this.state.coordinates}
                onClick={this.test}
            />
        );
    }
}

export default StandardShape;