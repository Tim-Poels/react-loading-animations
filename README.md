# Docs
All animations have a standard template that can be manipulated through props, you can use as many or as few as you want

--3 squares that slide around in a satisfying way
  -any color possible
  -size can be in pretty much any mesurement 
  -border width can't be in %
  -speed in s (seconds)
```
<ThreeSlidingSquares
	primColor="pink"
	size="10vmin"
	borderWidth="1.25vmin"
	speed="1s"
/>
```
--A square that fills then turns then empties and fills again
  -any color possible
  -size can be in pretty much any mesurement and is aplied to both demensions
  -border width can't be in %
  -speed in s (seconds)
```
<TurningFillingSquare
  primColor="lightblue"
  size="9vmin"
  borderWidth="1vmin"
  speed="5s"
/>
```
--A piece of text with a shadowy circle going around it in diffrent colors
  -the text that will be displayed in the circle above the dots
  -any text color possible
  -size of the container only important for positioning because the element is done with position absolute
  -diameter of the rotating circle (has to be in vmin, vh or vw)
  -size of the textm
  -margin above the text to uncenter it
  -speed of the shadow circle animation
  -speed of the disapearing dots animation
```
<CirclingShadows1 
  text="RENDERING"
  textColor="orange"
  containerSize="40vmin"
  circleSize="25vmin"
  textSize="20px"
  textTopMargin="25px"
  circleSpeed="1.5s"
  dotSpeed="1s"
/>
```
--A piece of text with 2 bars jumping over/under it
  -what text needs to be there
  -color of the moving bars and the text
  -width of the loading animation
  -height duh-doy
  -font-size of the text
  -animation speed
```
<BarsJumpingAroundText
  text="Please Wait" 
  primColor="orange"
  width="40vmin"
  height="15vmin"
  textSize="4vmin"
  speed="1.5s"
/>
```
--4 boxes that pass around another box
  -color of the 4 boxes
  -color of the box that is being passed
  -size of the container
  -animation speed
```
<BoxesPassingABox
	primColor="rgb(128, 255, 128)"
	secndColor="rgb(230, 255, 128)"
	size="15%"
	speed=".3s"
/>
```