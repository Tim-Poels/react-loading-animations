import React from "react";
import "./CirclingShadows1.css";

const CirclingShadows1 = (props) => {
	let text = "LOADING"
	let containerStyle = {}
	let shadowStyle = {}
	let textStyle = {}
	let textDot1Style = {}
	let textDot2Style = {}
	let textDot3Style = {};
	if (props.text) {
		text = props.text
	}
	if (props.textColor) {
		textStyle.color = props.textColor
	}
	if (props.containerSize) {
		containerStyle.height = props.containerSize
		containerStyle.width = props.containerSize;
	}
	if (props.circleSize) {
		shadowStyle.height = props.circleSize
		shadowStyle.width = props.circleSize;
	}
	if (props.textSize) {
		textStyle.fontSize = props.textSize;
	}
	if (props.textTopMargin) {
		textStyle.marginTop = props.textTopMargin
	}
	if (props.circleSpeed) {
		shadowStyle.animation = `CirclingShadows1 ${props.circleSpeed} infinite linear`;
	}
	if (props.dotSpeed) {
		textDot1Style.animation = `CirclingShadows1dot1 ${props.dotSpeed} infinite linear`;
		textDot2Style.animation = `CirclingShadows1dot2 ${props.dotSpeed} infinite linear`;
		textDot3Style.animation = `CirclingShadows1dot3 ${props.dotSpeed} infinite linear`;
	}

  return (
		<div id="CirclingShadows1-container" style={containerStyle}>
			<div id="CirclingShadows1" style={shadowStyle}></div>
			<span id="CirclingShadows1span" style={textStyle}>
				{text}
				<br></br>
				<span
					className="CirclingShadows1dot"
					id="CirclingShadows1dot1"
					style={textDot1Style}>
					.
				</span>{" "}
				<span
					className="CirclingShadows1dot"
					id="CirclingShadows1dot2"
					style={textDot2Style}>
					.
				</span>{" "}
				<span
					className="CirclingShadows1dot"
					id="CirclingShadows1dot3"
					style={textDot3Style}>
					.
				</span>
			</span>
		</div>
	);
}

export default CirclingShadows1