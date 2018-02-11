import React  from 'react';
import ReactDOM  from 'react-dom';
import ControllerComponent from '../components/Controller';
import '../styles/Controller.css';
import { rotateAction, goLeftAction, goRightAction, fallDownAction } from '../actions';
import { connect } from 'react-redux';

class Controller extends React.Component  {

  componentDidMount() {
    this.focusDiv();
  }

  componentDidUpdate() {
    this.focusDiv();
  }

  focusDiv() {
    ReactDOM.findDOMNode(this.refs.controlevent).focus();
  }

  onButtonCick (e) {
    switch (e.target.id) {
      case 'button-rotate':
        this.props.rotate(this.props.gameArea, this.props.coordinates, this.props.shape);
        break;

      case 'button-left':
        this.props.goLeft(this.props.gameArea, this.props.shapeCoordinate);
        break;

      case 'button-right':
        this.props.goRight(this.props.gameArea, this.props.shapeCoordinate);
        break;
    }
  }

  onKeyEvent (e){
    let key_used = true;

    switch (e.keyCode) {

        // Left
      case 37:
        this.props.goLeft(this.props.gameArea, this.props.shapeCoordinate);
        break;

        // Up
      case 38:
        this.props.rotate(this.props.gameArea, this.props.coordinates, this.props.shape);
        break;

        // Right
      case 39:
        this.props.goRight(this.props.gameArea, this.props.shapeCoordinate);
        break;

        // Fall down
      case 40:
        this.props.fallDown(this.props.gameArea, this.props.coordinates, this.props.shape);
        break;

      default:
        key_used = false;
    }

    if (key_used) {
      e.preventDefault();
    }
  }

  render() {
    return (
        <div>
          <ControllerComponent buttonclick={(e) => this.onButtonCick.apply(this, [e])}/>
          <div
            ref="controlevent"
            className="control-event"
            onKeyDown={(e) => this.onKeyEvent.apply(this, [e])}
            tabIndex="0">
          </div>
        </div>
    );
  }
}

const mapStatesToProps = (state) => {
  return {
    shapeCoordinate: state.shapeCoordinate,
    gameArea: state.area,
    coordinates: state.coordinate,
    shape: state.shape
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    rotate: (gameArea, coordinate, shape) => {
      dispatch(rotateAction(gameArea, coordinate, shape));
    },
    goLeft: (gameArea, shapeCoordinate) => {
      dispatch(goLeftAction(gameArea, shapeCoordinate));
    },
    goRight: (gameArea, shapeCoordinate) => {
      dispatch(goRightAction(gameArea, shapeCoordinate));
    },
    fallDown: (ameArea, coordinate, shape) => {
      dispatch(fallDownAction(ameArea, coordinate, shape));
    }
  }
};

export default connect(mapStatesToProps, mapDispatchToProps)(Controller);
