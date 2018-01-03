import React from 'react';
import ShapeComponent from '../components/ShapeComponent';
import { newShapeAction } from '../actions';
import { connect } from 'react-redux';

// Shapes definitions
const Shapes = {
    BarShape: require('../shapes/BarShape'),
    InverseLShape: require('../shapes/InverseLShape'),
    InverseZShape: require('../shapes/InverseZShape'),
    LShape: require('../shapes/LShape'),
    SquareShape: require('../shapes/SquareShape'),
    TriangleShape: require('../shapes/TriangleShape'),
    ZShape: require('../shapes/ZShape')
};

class StandardShape extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
          shape: Shapes[this.props.shape].default
        };
        this.props.newShape(this.state.shape.coordinates);
    }

    render() {
        return (
            <ShapeComponent
                xPosition={this.props.xPosition}
                yPosition={this.props.yPosition}
                color={this.state.shape.color}
                coordinates={this.props.shapeCoordinate}
            />
        );
    }
}

const mapStatesToProps = (state) => {
    return {
        shapeCoordinate: state.shapeCoordinate
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        newShape: (shapeCoordinate) => {
            dispatch(newShapeAction(shapeCoordinate));
        }
    }
};

export default connect(mapStatesToProps, mapDispatchToProps)(StandardShape);