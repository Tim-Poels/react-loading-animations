import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import ThreeSlidingSquares from './components/ThreeSlidingSquares.js';
//import TurningFillingSquare from './components/TurningFillingSquare.js';
//import CirclingShadows1 from "./components/CirclingShadows1.js"
//import BarsJumpingAroundText from "./components/BarsJumpingAroundText.js"
import BoxesPassingABox from "./components/BoxesPassingABox.js";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BoxesPassingABox
		primColor="rgb(128, 255, 128)"
		secndColor="rgb(230, 255, 128)"
		size="15%"
		speed=".3s"
	/>
);

