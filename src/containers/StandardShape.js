import React from 'react';
import ShapeComponent from '../components/ShapeComponent';
import { connect } from 'react-redux';
import { getShapeRealCoordinate } from '../utils/Utils';

class StandardShape extends React.Component {

    render() {
        const coordinates = getShapeRealCoordinate(this.props.shapeCoordinate, [this.props.coordinate.x, this.props.coordinate.y]);
        return (
            <ShapeComponent
                color={this.props.shape.color}
                coordinates={coordinates}
            />
        );
    }
}

const mapStatesToProps = (state) => {
    return {
        shapeCoordinate: state.shapeCoordinate,
        coordinate: state.coordinate,
        shape: state.shape
    }
};

export default connect(mapStatesToProps)(StandardShape);