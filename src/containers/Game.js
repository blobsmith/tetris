import React  from 'react';
import GameComponent from '../components/Game.jsx';
import '../styles/Game.css';

var game_interval = 20;


class Game extends React.Component  {

  constructor(props) {
    super(props);
    this.state = {
      itemXPosition: 0,
      itemYPosition: 0,
    };
  }

  componentDidMount() {
    this.setInitialPosition();
    var self = this;
    this.timerID = setInterval(function() {
      self.goDown.apply(self)
    }, 1000);
  }


  setInitialPosition() {
    this.setState({
      itemXPosition: 120,
      itemYPosition: 20
    });
  }

  /**
   * Go down the current shape.
   */
  goDown () {
    let yPosition = this.state.itemYPosition;
    yPosition += game_interval;
    this.setState( {
      itemYPosition: yPosition
    });
  }

  onMoveEvent (e){
    let key_used = true;
    let xPosition = this.state.xPosition;
    let yPosition = this.state.yPosition;

    switch (e.keyCode) {

      // Left
      case 37:
        xPosition -= game_interval;
        break;

        // Up : todo -> call the rotate function.
      case 38:
        // xPosition -= this.state.interval;
        break;

      // Right
      case 39:
        xPosition += game_interval;
        break;

      // Down
      case 40:
        yPosition += game_interval;
        break;

      default:
        key_used = false;
    }

    if (key_used) {
      e.preventDefault();
      this.setState({
        itemXPosition: xPosition,
        itemYPosition: yPosition,
      });
    }
  }

  render() {
    return <GameComponent
        game={this}
        onMove={this.callMoveEvent}
        xPosition={this.state.itemXPosition}
        yPosition={this.state.itemYPosition}
    />;
  }
}

export default Game;
