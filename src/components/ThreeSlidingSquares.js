import React from "react";
import "./ThreeSlidingSquares.css"

const ThreeSlidingSquares = (props) => {
  let containerStyle = {};
  let boxStyle1 = {};
  let boxStyle2 = {};
  let boxStyle3 = {};

  if (props.size) {
    containerStyle.height = props.size;
    containerStyle.width = props.size;
  }
  if (props.primColor) {
    boxStyle1.borderColor = props.primColor;
    boxStyle2.borderColor = props.primColor;
    boxStyle3.borderColor = props.primColor;
  }
  if (props.borderWidth) {
    boxStyle1.borderWidth = props.borderWidth;
    boxStyle2.borderWidth = props.borderWidth;
    boxStyle3.borderWidth = props.borderWidth;

  }
  if (props.speed) {
    containerStyle.animation = `ThreeSlidingSquares ${props.speed} linear infinite`;
    boxStyle1.animation = `ThreeSlidingSquaresbox1 ${props.speed} linear infinite`;
    boxStyle3.animation = `ThreeSlidingSquaresbox3 ${props.speed} linear infinite`;
  }
	return (
		<div id="ThreeSlidingSquares" style={containerStyle}>
			<div className="ThreeSlidingSquaresbox" style={boxStyle1} id="ThreeSlidingSquaresbox1"></div>
			<div className="ThreeSlidingSquaresbox" style={boxStyle2} id="ThreeSlidingSquaresbox2"></div>
			<div className="ThreeSlidingSquaresbox" style={boxStyle3} id="ThreeSlidingSquaresbox3"></div>
		</div>
	);
};

export default ThreeSlidingSquares;