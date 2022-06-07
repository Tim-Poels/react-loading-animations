import React from "react"
import "./BarsJumpingAroundText.css"

const BarsJumpingAroundText = (props) => {
  let text = "LOADING...";
  let containerStyle = {}
  let textStyle = {}
  let swapContainerStyle = {}
  let swapAboveStyle = {}
  let swapUnderStyle = {}
  if (props.text) {
    text = props.text
  }
  if (props.primColor) {
    textStyle.color = props.primColor
    swapAboveStyle.backgroundColor = props.primColor
    swapUnderStyle.backgroundColor = props.primColor;
  }
  if (props.width) {
    containerStyle.width = props.width
    swapContainerStyle.width = props.width;
  }
  if (props.height) {
    swapContainerStyle.height = props.height
    containerStyle.height = props.height
  }
  if (props.textSize) {
    textStyle.fontSize = props.textSize;
  }
  if (props.speed) {
    swapAboveStyle.animation = `loader3above ${props.speed} infinite`;
    swapUnderStyle.animation = `loader3under ${props.speed} infinite`;
  }
	return (
		<div style={containerStyle} className="loader3-container">
			<div id="loader3" style={textStyle} >{text}</div>
			<div className="loader3swap" style={swapContainerStyle}>
				<div id="loader3above" style={swapAboveStyle}></div>
				<div id="loader3under" style={swapUnderStyle}></div>
			</div>
		</div>
	);
}

export default BarsJumpingAroundText