import React from 'react';

const Controller = ( props ) => (
    <div id="control-container">
        <div id="control-panel">
            <div id="control-panel-container">
                <div>
                    <button id="button-rotate" onClick={props.buttonclick} >Rotate</button>
                </div>
                <div>
                    <button id="button-left" className="button-center" onClick={props.buttonclick} >Left</button>
                    <button id="button-right" className="button-center" onClick={props.buttonclick} >Right</button>
                </div>
                <div>
                    <button id="button-down">Falling down</button>
                </div>
                <div  className="info-message">
                    To control items, you can use buttons above or arrows on your keyboard.
                </div>
            </div>
        </div>
    </div>
)
export default Controller
