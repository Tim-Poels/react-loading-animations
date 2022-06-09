import React from "react";
import "./SwingingPendulums.css";

const SwingingPendulums = (props) => {
  let containerStyle = {}
  let pendulumLeftStyle = {}
  let pendulumRightStyle = {}
  let barStyle = {}
  let ballStyle = {}
  if (props.primColor) {
    ballStyle.background = `radial-gradient(circle at 33% 33%, ${props.primColor}, black)`
  }
  if (props.secndColor) {
    barStyle.backgroundColor = props.secndColor
  }
  if (props.thirdColor) {
		containerStyle.borderTop = `5px solid ${props.thirdColor}` ;
	}
  if (props.size) {
    containerStyle.height = props.size;
    containerStyle.width = props.size;
  }
  if (props.speed) {
    pendulumLeftStyle.animation = `swing-left ${props.speed} linear infinite`;
    pendulumRightStyle.animation = `swing-right ${props.speed} linear infinite`;
  }
  return (
		<div className="SwingingPendulums-container" style={containerStyle}>
			<div
				className="SwingingPendulums-pendulum SwingingPendulums-swing-left"
				style={pendulumLeftStyle}>
				<div className="SwingingPendulums-ball SwingingPendulums-invisible"></div>
				<div className="SwingingPendulums-bar SwingingPendulums-invisible"></div>
				<div className="SwingingPendulums-bar" style={barStyle}></div>
				<div className="SwingingPendulums-ball" style={ballStyle}></div>
			</div>
			<div className="SwingingPendulums-pendulum">
				<div className="SwingingPendulums-ball SwingingPendulums-invisible"></div>
				<div className="SwingingPendulums-bar SwingingPendulums-invisible"></div>
				<div className="SwingingPendulums-bar" style={barStyle}></div>
				<div className="SwingingPendulums-ball" style={ballStyle}></div>
			</div>
			<div className="SwingingPendulums-pendulum">
				<div className="SwingingPendulums-ball SwingingPendulums-invisible"></div>
				<div className="SwingingPendulums-bar SwingingPendulums-invisible"></div>
				<div className="SwingingPendulums-bar" style={barStyle}></div>
				<div className="SwingingPendulums-ball" style={ballStyle}></div>
			</div>
			<div className="SwingingPendulums-pendulum">
				<div className="SwingingPendulums-ball SwingingPendulums-invisible"></div>
				<div className="SwingingPendulums-bar SwingingPendulums-invisible"></div>
				<div className="SwingingPendulums-bar" style={barStyle}></div>
				<div className="SwingingPendulums-ball" style={ballStyle}></div>
			</div>
			<div
				className="SwingingPendulums-pendulum SwingingPendulums-swing-right"
				style={pendulumRightStyle}>
				<div className="SwingingPendulums-ball SwingingPendulums-invisible"></div>
				<div className="SwingingPendulums-bar SwingingPendulums-invisible"></div>
				<div className="SwingingPendulums-bar" style={barStyle}></div>
				<div className="SwingingPendulums-ball" style={ballStyle}></div>
			</div>
		</div>
	);
} 

export default SwingingPendulums