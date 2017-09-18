var dSunToEarth = 200;
var dEarthToMoon = 100;
var angleSun = 0;
var angleEarth = 0;
var angleMoon = 0;
var speedEarth = 0.01;
var speedMoon = -0.03;
var speedSun = 0.001; // for a good time, set to 1.
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
  background(100); // for a REALLY GOOD TIME, comment this out
  
  // drawing stack:
  
  translate(width/2, height/2);
  rotate(angleSun);
  image(sunImage, -sizeSun/2, -sizeSun/2, sizeSun, sizeSun); // THE SUN
  angleSun = angleSun + speedSun;
  
  rotate(angleEarth);
  translate(dSunToEarth, 0);
  image(earthImage, -sizeEarth/2, -sizeEarth/2, sizeEarth, sizeEarth); // THE EARTH  
  angleEarth = angleEarth + speedEarth;

  rotate(angleMoon);
  translate(dEarthToMoon, 0);
  image(moonImage, -sizeMoon/2, -sizeMoon/2, sizeMoon, sizeMoon); // THE MOON  
  angleMoon = angleMoon + speedMoon;


}