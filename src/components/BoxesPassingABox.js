import React from "react";
import "./BoxesPassingABox.css";

const BoxesPassingABox = (props) => {
  let outerBoxStyle = {}
  let middleBoxStyle = {}
  let containerStyle = {}
  let speed = 1;

  if (props.primColor) {
		middleBoxStyle.backgroundColor = props.primColor;
	}
  if (props.secndColor) {
    outerBoxStyle.backgroundColor = props.secndColor
  }
  if (props.size) {
    containerStyle.height = props.size
    containerStyle.width = props.size
  }
  if (props.speed) {
    speed = props.speed.split("s")[0]
  }

  let containers = document.getElementsByClassName(
		"BoxesPassingABox-box-container"
	);
	startAnimations(speed, containers);
	return (
		<div className="BoxesPassingABox" style={containerStyle}>
			<div className="BoxesPassingABox-box-container">
				<div className="BoxesPassingABox-box" style={outerBoxStyle}></div>
				<div className="BoxesPassingABox-box BoxesPassingABox-middle-box" style={middleBoxStyle}></div>
				<div className="BoxesPassingABox-box" style={outerBoxStyle}></div>
			</div>
			<div className="BoxesPassingABox-box-container">
				<div className="BoxesPassingABox-box" style={outerBoxStyle}></div>
				<div className="BoxesPassingABox-box BoxesPassingABox-middle-box" style={middleBoxStyle}></div>
				<div className="BoxesPassingABox-box" style={outerBoxStyle}></div>
			</div>
			<div className="BoxesPassingABox-box-container">
				<div className="BoxesPassingABox-box" style={outerBoxStyle}></div>
				<div className="BoxesPassingABox-box BoxesPassingABox-middle-box" style={middleBoxStyle}></div>
				<div className="BoxesPassingABox-box" style={outerBoxStyle}></div>
			</div>
			<div className="BoxesPassingABox-box-container">
				<div className="BoxesPassingABox-box" style={outerBoxStyle}></div>
				<div className="BoxesPassingABox-box BoxesPassingABox-middle-box" style={middleBoxStyle}></div>
				<div className="BoxesPassingABox-box" style={outerBoxStyle}></div>
			</div>
		</div>
	);
}

const startAnimations = (speed, containers) => {
  setTimeout(() => {
    containers[0].childNodes[0].style.opacity = "0";
		containers[1].childNodes[0].style.opacity = "1";
		containers[1].style.animation = `left-to-right ${speed}s ease-in-out`;
		setTimeout(() => {
      containers[1].style.animation = null;
			containers[1].childNodes[0].style.opacity = "0";
			containers[2].childNodes[0].style.opacity = "1";
			containers[2].style.animation = `left-to-right ${speed}s ease-in-out`;
			setTimeout(() => {
        containers[2].style.animation = null;
				containers[2].childNodes[0].style.opacity = "0";
				containers[3].childNodes[0].style.opacity = "1";
				containers[3].style.animation = `top-to-bottom ${speed * 2}s ease-in-out`;
        setTimeout(() => {
          containers[3].style.animation = null;
					containers[3].childNodes[0].style.opacity = "0";
					containers[2].childNodes[2].style.opacity = "1";
					containers[2].style.animation = `left-to-right ${speed}s ease-in-out`;
          setTimeout(() => {
						containers[2].style.animation = null;
						containers[2].childNodes[2].style.opacity = "0";
						containers[1].childNodes[2].style.opacity = "1";
						containers[1].style.animation = `left-to-right ${speed}s ease-in-out`;
            setTimeout(() => {
							containers[1].style.animation = null;
							containers[1].childNodes[2].style.opacity = "0";
							containers[0].childNodes[2].style.opacity = "1";
							containers[0].style.animation = `top-to-bottom ${speed * 2}s ease-in-out`;
              setTimeout(() => {
                containers[0].style.animation = null;
								containers[0].childNodes[2].style.opacity = "0";
								startAnimations(speed, containers);
							}, speed * 1990);
						}, speed * 1000);
					}, speed * 1000);
				}, speed * 2000);
			}, speed * 1000);
		}, speed * 1000);
	}, speed * 10);
}

export default BoxesPassingABox