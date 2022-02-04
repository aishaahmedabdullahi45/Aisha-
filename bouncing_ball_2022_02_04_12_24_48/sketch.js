var y = 0;
var speed = 12;
function setup() {
  createCanvas(1350, 600);
}

function draw() {
  background(0);
  ellipseMode(CENTER);
  text(" A bouncing ball", 0 , 10);
   fill(0);
  stroke(255);
  strokeWeight(5);
 
  
  y = y + speed;
  if ((y > height ) || (y < 0)) {
    speed = speed * -1;
  }
  
ellipse(110, y, 50, 50);
  
}