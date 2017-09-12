function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

// painter's algorithm
function draw() {
  background(255);
  
  fill(255, 0, 255); // magenta
  rectMode(RADIUS);
  rect(mouseX, mouseY, 50, 50);
  
  fill(0); // black
  rectMode(CORNER);
  rect(mouseX, mouseY, 50, 50);

  fill(255, 255, 0); // yellow
  rectMode(CENTER);
  rect(mouseX, mouseY, 50, 50);

}