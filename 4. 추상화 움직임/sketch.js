function setup() {
  createCanvas(600, 400);
  background(220);
}
function draw() {
  fill(255, 0, 0);
  stroke(0);
  arc(150, 0, 300, 300, 0, PI);
  arc(450, 0, 300, 300, 0, PI);
  arc(150, 400, 300, 300, PI, 0);
  arc(450, 400, 300, 300, PI, 0);
  
  fill(0, 255, 0);
  stroke(100);
  quad(200, 0, 100, 200, 200, 400, 300, 200);
  quad(400, 0, 300, 200, 400, 400, 500, 200);
  
  fill(0, 0, 255);
  stroke(220);
  rect(125, 150, 150, 100);
  rect(325, 150, 150, 100);
  
  fill(255, 0, 255);
  stroke(160);
  circle(93, 50, 100);
  circle(507, 50, 100);
  circle(93, 350, 100);
  circle(507, 350, 100);
  
  fill(255, 255, 0);
  stroke(70);
  triangle(50, 75, 90, 0, 135, 75);
  triangle(550, 75, 510, 0, 465, 75);
  triangle(50, 325, 90, 400, 135, 325);
  triangle(550, 325, 510, 400, 465, 325);
}
