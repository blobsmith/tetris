import React  from 'react';
import ReactDOM  from 'react-dom';
import ControllerComponent from '../components/Controller.jsx';
import '../styles/Controller.css';

class Controller extends React.Component  {

  constructor(props) {
    super(props);

    // if (props.onMove) {
      this.state = {
        callbackMove: props.onMove,
        game: props.game
      };
    // }
  }


  componentDidMount() {
    this.focusDiv();
  }

  componentDidUpdate() {
    this.focusDiv();
  }

  focusDiv() {
    ReactDOM.findDOMNode(this.refs.controlevent).focus();
  }

  render() {
    return (
        <div>
          <ControllerComponent />
          <div
            ref="controlevent"
            className="control-event"
            onKeyDown={this.state.game.onMoveEvent}
            tabIndex="0">
          </div>
        </div>
    );
  }
}

export default Controller;
