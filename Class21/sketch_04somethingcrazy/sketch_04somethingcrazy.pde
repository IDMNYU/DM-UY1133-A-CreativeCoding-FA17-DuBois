// here's the plan:
// you can laser cut whatever you want
// as long as it's a PDF
// you can make a PDF out of processing
// MUCH easier than p5.js
// so all you gotta do is take a cool p5.js sketch
// and convert it to java from javascript
// then you use the PDF export library in processing
// to make a PDF

import processing.pdf.*; // bring in an external library in java to make PDF files

// this is us:

float t = 150; // distance
float a = 0; // angle

int NUMWHEELS = 8;
float DIAMETER = 60;


// functions in java have a return value in their declaration (e.g. 'void')
void setup() {
  // 864 is the magic number of 12 (inches) * 72 dpi
  size(864, 864); // this is the same as p5 but windowWidth/Height won't work
  frameRate(24); // this is the same
  background(255); // this is the same
}

void draw() {
  stroke(0, random(0,255)); // this is the same
  fill(255, 128);
  strokeWeight(random(0.1, 3.)); // this is the same
  
  float x = t*cos(a);
  float y = t*sin(a);

  translate(width/2, height/2); // redefining the origin (where is 0, 0)

  rotate(a);
  ellipse(random(-width/3, width/3), random(-height/3, height/3), random(DIAMETER), random(DIAMETER));


  a-=TWO_PI/NUMWHEELS/16;

}

void mousePressed() {
  beginRecord(PDF, "stuff.pdf"); // start making a PDF
  background(255);
}

void mouseReleased() {
  endRecord(); // stop making the PDF
  background(255);
}