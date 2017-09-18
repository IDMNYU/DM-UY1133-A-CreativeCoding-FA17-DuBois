var dSunToEarth = 200;
var dEarthToMoon = 100;
var angleEarth = 0;
var angleMoon = 0;
var speedEarth = 0.01;
var speedMoon = -0.03;
var sizeSun = 150;
var sizeEarth = 70;
var sizeMoon = 30;

var sunImage;
var earthImage;
var moonImage;

function preload() {
  sunImage = loadImage('bannon.jpg');
  earthImage = loadImage('trump.jpg');
  moonImage = loadImage('kushner.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);

}

function draw() {
  background(100);
  
  // drawing stack:
  
  translate(width/2, height/2);
  image(sunImage, -sizeSun/2, -sizeSun/2, sizeSun, sizeSun); // THE SUN
  
  var xoffset = dSunToEarth * cos(angleEarth);
  var yoffset = dSunToEarth * sin(angleEarth);  
  translate(xoffset, yoffset);
  image(earthImage, -sizeEarth/2, -sizeEarth/2, sizeEarth, sizeEarth); // THE EARTH  
  angleEarth = angleEarth + speedEarth;

  var xoffset = dEarthToMoon * cos(angleMoon);
  var yoffset = dEarthToMoon * sin(angleMoon);  
  translate(xoffset, yoffset);
  rotate(angleMoon);
  image(moonImage, -sizeMoon/2, -sizeMoon/2, sizeMoon, sizeMoon); // THE MOON  
  angleMoon = angleMoon + speedMoon;


}