import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ThreeSlidingSquares from './components/ThreeSlidingSquares.js';
import TurningFillingSquare from './components/TurningFillingSquare.js';
import CirclingShadows1 from "./components/CirclingShadows1.js"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<CirclingShadows1 
    text="RENDERING"
    textColor="orange"
    containerSize="40vmin"
    circleSize="25vmin"
    textSize="20px"
    textTopMargin="25px"
    circleSpeed="1.5s"
    dotSpeed="1s"
  />
);

