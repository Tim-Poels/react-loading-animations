import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ThreeSlidingSquares from './components/ThreeSlidingSquares.js';
import TurningFillingSquare from './components/TurningFillingSquare.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<TurningFillingSquare 
    size="9vmin"
    primColor="lightblue"
    speed="5s"
    borderWidth="1vmin"
  />
);

