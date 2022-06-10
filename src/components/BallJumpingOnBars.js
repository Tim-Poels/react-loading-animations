import React from "react";
import "./BallJumpingOnBars.css";

const BallJumpingOnBars = (props) => {
  let containerStyle = {}
  let bar1Style = {}
  let bar2Style = {}
  let bar3Style = {}
  let bar4Style = {}
  let bar5Style = {};
  let ballStyle = {}
  if (props.size) {
    containerStyle.height = props.size;
    containerStyle.width = props.size
  }
  if (props.primColor) {
    bar1Style.backgroundColor = props.primColor;
    bar2Style.backgroundColor = props.primColor;
    bar3Style.backgroundColor = props.primColor;
    bar4Style.backgroundColor = props.primColor;
    bar5Style.backgroundColor = props.primColor;
  }
  if (props.secondColor) {
    ballStyle.backgroundColor = props.secondColor;
  }
  if (props.speed) {
    ballStyle.animation = `ball ${props.speed} linear infinite`;
    bar1Style.animation = `bar1 ${props.speed} linear infinite`;
    bar2Style.animation = `bar2 ${props.speed} linear infinite`;
    bar4Style.animation = `bar4 ${props.speed} linear infinite`;
    bar5Style.animation = `bar5 ${props.speed} linear infinite`;
  }
  return (
		<div className="BallJumpingOnBars-container" style={containerStyle}>
			<div className="BallJumpingOnBars-ball" style={ballStyle}></div>
			<div className="BallJumpingOnBars-bars-container">
				<div
					className="BallJumpingOnBars-bars"
					style={bar1Style}
					id="BallJumpingOnBars-bar1"
          ></div>
				<div
					className="BallJumpingOnBars-bars"
					style={bar2Style}
					id="BallJumpingOnBars-bar2"
          ></div>
				<div
					className="BallJumpingOnBars-bars"
					style={bar3Style}
					id="BallJumpingOnBars-bar3"
          ></div>
				<div
					className="BallJumpingOnBars-bars"
					style={bar4Style}
					id="BallJumpingOnBars-bar4"
          ></div>
				<div
					className="BallJumpingOnBars-bars"
					style={bar5Style}
					id="BallJumpingOnBars-bar5"
          ></div>
			</div>
		</div>
	);
}

export default BallJumpingOnBars;