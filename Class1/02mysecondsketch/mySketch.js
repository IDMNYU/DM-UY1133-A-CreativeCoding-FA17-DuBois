function setup() {
  createCanvas(windowWidth, windowHeight);
  // background - 0 is black, 255 is white, everything else is in between
  background(255);

}

function draw() {
  ellipse(mouseX, mouseY, random(2, 40), random(2,40));
}