function setup() {
  createCanvas(windowWidth, windowHeight);
  // background - 0 is black, 255 is white, everything else in between
  background(0);

}

function draw() {
	//background(0);
  fill(random(255), random(255), 0, 50); // this changes the filling color of what you're drawing
  ellipse(mouseX, mouseY, random(50), random(50));
}

function keyPressed() {
  background(0);
}
