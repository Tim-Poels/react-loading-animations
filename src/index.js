import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ThreeSlidingSquares from './components/ThreeSlidingSquares.js';
import TurningFillingSquare from './components/TurningFillingSquare.js';
import CirclingShadows1 from "./components/CirclingShadows1.js"
import BarsJumpingAroundText from "./components/BarsJumpingAroundText.js"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BarsJumpingAroundText
  text="Please Wait" 
  primColor="orange"
  width="40vmin"
  height="15vmin"
  textSize="4vmin"
  speed="1.5s"
  />
);

