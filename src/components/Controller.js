import React from 'react';

const Controller = ( props ) => (
    <div id="control-container">
        <div id="control-panel">
            <div id="control-panel-container">
                <div>
                    <button id="button-rotate">Rotate</button>
                </div>
                <div>
                    <button className="button-center">Left</button>
                    <button className="button-center">Right</button>
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
