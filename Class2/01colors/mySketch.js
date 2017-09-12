function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  // color :
  // rules -
  // one number is gonna be 0-255 black to white
  // two numbers is gonna be 0-255 black to white + alpha
  // three numbers is gonna be 0-255 R then G then B
  // four numbers is RGB + alpha
  
  background(21, 23, 25); // donald trump's suit
  
  strokeWeight(20); // pixels
  
  fill(183, 155, 121); // donald trump's hair
  stroke(166, 30, 44); // donald trump's tie
  
  ellipse(mouseX, mouseY, 100, 100);
}