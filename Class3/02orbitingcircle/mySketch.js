var distance = 100;
var angle = 0;
var speed = 0.01;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);

}

function draw() {
  background(100);
  
  ellipse(width/2, height/2, 100, 100);
  
  var xoffset = distance * cos(angle);
  var yoffset = distance * sin(angle);
  
  ellipse(width/2 + xoffset, height/2 + yoffset, 20, 20);
  
  angle = angle + speed;
}