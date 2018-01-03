import React  from 'react';
import GameComponent from '../components/Game';
import '../styles/Game.css';
import { goDownAction } from '../actions';
import { connect } from 'react-redux';

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
    // const randomNumber = 6;
    this.state.currentShape = this.state.shapes[randomNumber];
  }

  componentDidMount() {
    var self = this;
    this.timerID = setInterval(function() {
      self.props.goDown();
    }, 1000);
  }

  render() {
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
    goDown: () => {
      dispatch(goDownAction());
    }
  }
};

export default connect(mapStatesToProps, mapDispatchToProps)(Game);
