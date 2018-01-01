import React  from 'react';
import ReactDOM  from 'react-dom';
import ControllerComponent from '../components/Controller';
import '../styles/Controller.css';
import { rotateAction } from '../actions';
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

  onMoveEvent (e){
    let key_used = true;

    switch (e.keyCode) {

        // Left
      case 37:
        // xPosition -= this.gameInterval;
        console.log('go left');
        break;

        // Up
      case 38:
        console.log('rotate');
        this.props.rotate();
        // xPosition -= this.state.interval;
        break;

        // Right
      case 39:
        // xPosition += this.gameInterval;
        console.log('go right');
        break;

        // Down
      case 40:
        // yPosition += this.gameInterval;
        console.log('fall down');
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
          <ControllerComponent />
          <div
            ref="controlevent"
            className="control-event"
            onKeyDown={this.onMoveEvent}
            tabIndex="0">
          </div>
        </div>
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
    rotate: (shapeCoordinate) => {
      dispatch(rotateAction(shapeCoordinate));
    }
  }
};

export default connect(mapStatesToProps, mapDispatchToProps)(Controller);
