
var r = 0;
var g = 50;
var b = 255;

function setup(){

  createCanvas(1200,400);
}

function draw(){

  r = mouseX;
  b = mouseY;
  g = r + b;
  
  ellipse(mouseX,mouseY,70);
  background(r,g,b);
}