// 
// Multiple Frames. 
// 
// Saves one PDF document of many frames drawn to the screen.
// Starts the file when the mouse is pressed and end the file
// when the mouse is released.
//


import processing.pdf.*; // bring in an external library in java

// functions in java have a return value in their declaration (e.g. 'void')
void setup() {
  size(864, 864); // this is the same as p5 but windowWidth/Height won't work
  frameRate(24); // this is the same
  background(255); // this is the same
}

void draw() {
  stroke(0, 20); // this is the same
  strokeWeight(20.0); // this is the same
  line(mouseX, 0, width-mouseY, height); // this is the same
}

void mousePressed() {
  beginRecord(PDF, "stuff.pdf"); // start making a PDF
  background(255);
}

void mouseReleased() {
  endRecord(); // stop making the PDF
  background(255);
}