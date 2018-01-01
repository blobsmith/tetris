import React from 'react';
import ShapeComponent from '../components/ShapeComponent';

class StandardShape extends React.Component {

    getColour() {
        return '#000000';
    }

    getCoordinates() {
        return [];
    }

    isRotatable() {
        return true;
    }

    render() {
        return (
            <ShapeComponent
                xPosition={this.props.xPosition}
                yPosition={this.props.yPosition}
                color={this.getColour()}
                coordinates={this.getCoordinates()}
            />
        );
    }
}

export default StandardShape;