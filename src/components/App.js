import React from 'react';
import logo from '../images/logo.svg';
import Game from '../containers/Game';

const App = ( props ) => (
    <div className="App"
         onKeyDown={props.onKeyPressed}
         tabIndex="0">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title" >Tetris made with React/Redux/Konva</h1>
        </header>
        <Game />
    </div>
);
export default App
