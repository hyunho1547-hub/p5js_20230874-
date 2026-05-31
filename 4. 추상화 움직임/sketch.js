let color1, color2;

function setup() {
  createCanvas(600, 400);
  
  colorMode(RGB); 
  
  color1 = color(0, 0, 255);
  color2 = color(255, 100, 0);
}

function draw() {
  background(220);
  
  fill(255, 0, 0);
  stroke(0);
  arc(150, 0, 300, 300, 0, PI);
  arc(450, 0, 300, 300, 0, PI);
  arc(150, 400, 300, 300, PI, 0);
  arc(450, 400, 300, 300, PI, 0);
  
  let moveY = cos(frameCount * 0.05) * 10;
  
  fill(0, 255, 0);
  stroke(100);
  quad(200, 0 + moveY, 100, 200 + moveY, 200, 400 + moveY, 300, 200 + moveY);
  quad(400, 0 + moveY, 300, 200 + moveY, 400, 400 + moveY, 500, 200 + moveY);
  
  let colorAmount = (sin(millis() * 0.002) + 1) / 2; 
  let rectColor = lerpColor(color1, color2, colorAmount);
  
  fill(rectColor);
  stroke(220);
  rect(125, 150, 150, 100);
  rect(325, 150, 150, 100);
  
  let sizeChange = sin(frameCount * 0.05) * 20; 
  
  fill(255, 0, 255);
  stroke(160);
  circle(93, 50, 100 + sizeChange);
  circle(507, 50, 100 + sizeChange);
  circle(93, 350, 100 + sizeChange);
  circle(507, 350, 100 + sizeChange);
  
  fill(255, 255, 0, random(200, 255));
  stroke(70);
  triangle(50, 75, 90, 0, 135, 75);
  triangle(550, 75, 510, 0, 465, 75);
  triangle(50, 325, 90, 400, 135, 325);
  triangle(550, 325, 510, 400, 465, 325);
}

  function keyPressed() {
  if (key === 's') {
    saveGif('mySketch', 5);
  }
}
