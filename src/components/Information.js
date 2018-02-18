import React from 'react';
import qrcode from '../images/qrcode.png';
import '../styles/Information.css';

const Information = ( props ) => (
    <div id="information-container" className={props.class} >
        <div id="information">

            <div id="information-text">
                Hi, this is my "Hello world" application. It has been build with React.<br />
                I already developed with jQuery, Backbone or Angular but React is (in my point of view) the best way to develop a JavaScript web app.<br /><br />
                You can <a target="_blank" href="https://www.linkedin.com/in/gilbertolivier/">stay in touch</a>
                &nbsp;or you can play a <br /><br />
                <a class="button-start btn" onClick={props.playOnClick}>New Game</a>
            </div>
            <div id="information-img">
                <img src={qrcode} alt="qrcode" />
            </div>
        </div>
    </div>
);
export default Information;
