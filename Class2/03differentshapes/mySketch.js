var x; // GLOBAL VARIABLE (everyone can get at it)
var y; // GLOBAL VARIABLE (everyone can get at it)

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  background(21, 23, 25); // donald trump's suit
  strokeWeight(10); // pixels
  fill(183, 155, 121); // donald trump's hair
  stroke(166, 30, 44); // donald trump's tie

}

function draw() {
  background(0, 20);
	ellipse(mouseX, 50, 100, 100); // x, y, width, height
  	rect(150, mouseY, 100, 100); // x, y, width, heigh
  	line(400, 0, mouseX, mouseY); // x1, y1, x2, y2
  	point(450, 450); // x, y
}