import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import ThreeSlidingSquares from './components/ThreeSlidingSquares.js';
//import TurningFillingSquare from './components/TurningFillingSquare.js';
//import CirclingShadows1 from "./components/CirclingShadows1.js"
//import BarsJumpingAroundText from "./components/BarsJumpingAroundText.js"
//import BoxesPassingABox from "./components/BoxesPassingABox.js";
//import SwingingPendulums from './components/SwingingPendulums.js';
import BallJumpingOnBars from './components/BallJumpingOnBars.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BallJumpingOnBars 
    size="15vmin"
    primColor="yellow"
    secondColor="yellow"
    speed="2s"
  />
);

