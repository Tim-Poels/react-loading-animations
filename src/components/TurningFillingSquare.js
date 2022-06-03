import React from "react";
import "./TurningFillingSquare.css"

const TurningFillingSquare = (props) => {
  let bigBoxStyle = {};
  let smallBoxStyle = {};
	if (props.size) {
		bigBoxStyle.height = props.size;
		bigBoxStyle.width = props.size;
	}
	if (props.primColor) {
    bigBoxStyle.borderColor = props.primColor;
		smallBoxStyle.backgroundColor = props.primColor;
	}
	if (props.borderWidth) {
		bigBoxStyle.borderWidth = props.borderWidth;
	}
	if (props.speed) {
		bigBoxStyle.animation = `TurningFillingSquare ${props.speed} linear infinite`;
		smallBoxStyle.animation = `TurningFillingSquarebox ${props.speed} linear infinite`;
	}
  return (
		<div id="TurningFillingSquare" style={bigBoxStyle}>
			<div id="TurningFillingSquarebox" style={smallBoxStyle}></div>
		</div>
	);
}

export default TurningFillingSquare;