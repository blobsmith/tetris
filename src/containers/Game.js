import React  from 'react';
import GameComponent from '../components/Game';
import '../styles/Game.css';
import { newShapeAction, goDownAction, newGameAction, initCoordinateAction, insertShapeInAreaAction } from '../actions';
import { connect } from 'react-redux';
import blockManagement from '../utils/BlockManagement';

class Game extends React.Component  {

  constructor(props) {
    super(props);

    // Set a new shape.
    this.props.newShape(blockManagement.getShapeRandomly());

    // Set a new game.
    this.props.newGame();
  }

  prepareNewShape() {
    // Save last shape coordinates to the map
    this.props.saveShapeInMap(this.props.shapeCoordinate, this.props.coordinate);

    // Update user points
    // todo

    // Create a new shape.
    this.props.newShape(blockManagement.getShapeRandomly());
  }

  componentDidMount() {
    var self = this;
    this.timerID = setInterval(function() {
      const coordinate = self.props.coordinate;
      self.props.goDown(self.props.gameArea, self.props.shapeCoordinate);

      // If the shape can't go down, it's time to next shape.
      if (coordinate.y === self.props.coordinate.y) {
        self.prepareNewShape.apply(self);

        // If last coordinates are the same than shape coordinate at the beginning, it's game over.
        // todo
      }
    }, 500);
  }

  render() {
    return (
        <GameComponent />
    );
  }
}

const mapStatesToProps = (state) => {
  return {
    coordinate: state.coordinate,
    shapeCoordinate: state.shapeCoordinate,
    gameArea: state.area,
    shape: state.shape
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    newGame: () => {
      dispatch(newGameAction());
    },
    newShape: (shape) => {
      dispatch(newShapeAction(shape));
    },
    goDown: (gameArea, shapeCoordinate) => {
      dispatch(goDownAction(gameArea, shapeCoordinate));
    },
    saveShapeInMap: (shapeCoordinate, coordinate) => {
      dispatch(insertShapeInAreaAction(shapeCoordinate, coordinate));
    }
  }
};

export default connect(mapStatesToProps, mapDispatchToProps)(Game);
