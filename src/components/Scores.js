import React from 'react';
import '../styles/Scores.css';

const Scores = ( props ) => (
    <div id="scores-container">
        <div id="scores-panel">
            <div id="points">
                {props.points}
            </div>
            <div id="points-label">
                Your Score
            </div>
        </div>
    </div>
);
export default Scores
