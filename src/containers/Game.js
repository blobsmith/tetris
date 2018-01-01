import React  from 'react';
import GameComponent from '../components/Game';
import '../styles/Game.css';
import { newShapeAction, fallDownAction } from '../actions';
import { connect } from 'react-redux';

import {Layer, Stage} from 'react-konva';
import Controller from '../containers/Controller';

class Game extends React.Component  {

  constructor(props) {
    super(props);

    this.state = {
      shapes: ['LShape', 'InverseLShape', 'SquareShape', 'ZShape', 'InverseZShape', 'TriangleShape', 'BarShape'],
      currentShape: null
    };
    this.getNextShape();
  }

  getNextShape() {
    const randomNumber = Math.floor((Math.random() * 6));
    this.state.currentShape = this.state.shapes[randomNumber];
    // this.newShape(this.state.currentShape.getCoordinates());
  }

  componentDidMount() {
    var self = this;
    this.timerID = setInterval(function() {
      self.props.fallDown();
    }, 1000);
  }

  render() {
    const ShapeName = this.state.currentShape;

    return (
        <GameComponent currentShape={this.state.currentShape} xPosition={this.props.coordinate.x} yPosition={this.props.coordinate.y} />
    );
  }
}

const mapStatesToProps = (state) => {
  return {
    coordinate: state.coordinate,
    shapeCoordinate: state.shapeCoordinate
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fallDown: () => {
      dispatch(fallDownAction());
    },
    newShape: (shapeCoordinate) => {
      dispatch(newShapeAction(shapeCoordinate));
    }
  }
};

export default connect(mapStatesToProps, mapDispatchToProps)(Game);
