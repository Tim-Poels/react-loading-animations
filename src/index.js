import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import ThreeSlidingSquares from './components/ThreeSlidingSquares.js';
//import TurningFillingSquare from './components/TurningFillingSquare.js';
//import CirclingShadows1 from "./components/CirclingShadows1.js"
//import BarsJumpingAroundText from "./components/BarsJumpingAroundText.js"
import BoxesPassingABox from "./components/BoxesPassingABox.js";
//import SwingingPendulums from './components/SwingingPendulums.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BoxesPassingABox
		size="40vmin"
		primColor="rgb(128, 255, 128)"
		secndColor="rgb(230, 255, 128)"
		speed="0.2s"
	/>
);

