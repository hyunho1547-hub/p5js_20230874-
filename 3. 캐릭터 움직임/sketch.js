function setup() {
  createCanvas(400, 600);
  clothesColor = color(60, 120, 210);
  noStroke();
}

let glassesBig = false;
let clothesColor;

function draw() {
  background(245, 240, 230);

  fill(clothesColor);
  quad(0, 420, 400, 420, 400, 600, 0, 600);
  quad(0, 390, 150, 370, 150, 600, 0, 600);
  quad(250, 370, 400, 390, 400, 600, 250, 600);
  rect(150, 370, 100, 230);

  fill(235, 200, 175);
  rect(172, 332, 56, 62);

  fill(240, 205, 180);
  ellipse(200, 250, 180, 170);

  noFill();
  stroke(130, 95, 75);
  strokeWeight(2);
  arc(200, 235, 190, 210, radians(180), radians(360));

  noStroke();
  fill(240, 205, 180);
  ellipse(112, 240, 26, 38);
  ellipse(288, 240, 26, 38);

  fill(35, 28, 22);
  stroke(35, 28, 22);
  arc(200, 205, 200, 170, radians(180), radians(360));
  rect(100, 205, 200, 24);

  noStroke();
  fill(35, 28, 22);
  rect(128, 148, 144, 34);
  ellipse(146, 182, 30, 16);
  ellipse(184, 184, 36, 16);
  ellipse(220, 184, 36, 16);
  ellipse(254, 182, 30, 16);

  stroke(80, 55, 40);
  strokeWeight(4);
  line(145, 220, 175, 220);
  line(225, 220, 255, 220);

  noStroke();
  fill(255);
  ellipse(160, 245, 34, 20);
  ellipse(240, 245, 34, 20);

  let moveX = mouseX / 100;
  let moveY = mouseY / 100;

  fill(55, 40, 30);
  ellipse(156 + moveX, 242 + moveY, 12, 12);
  ellipse(236 + moveX, 242 + moveY, 12, 12);

  fill(255);
  ellipse(153 + moveX, 239 + moveY, 4, 4);
  ellipse(233 + moveX, 239 + moveY, 4, 4);

  noFill();
  stroke(40);
  strokeWeight(3);

  if (glassesBig === true) {
    ellipse(160, 245, 50, 50);
    ellipse(240, 245, 50, 50);
  } else {
    ellipse(160, 245, 42, 42);
    ellipse(240, 245, 42, 42);
  }

  line(181, 245, 219, 245);
  line(139, 243, 122, 238);
  line(261, 243, 278, 238);

  stroke(145, 105, 82);
  strokeWeight(2);
  line(200, 252, 195, 283);
  line(195, 283, 206, 288);

  noFill();
  stroke(170, 85, 95);
  strokeWeight(3);
  arc(200, 308, 42, 18, radians(0), radians(180));

  noStroke();
  fill(245, 170, 175, 110);
  ellipse(145, 290, 26, 14);
  ellipse(255, 290, 26, 14);
}

function mousePressed() {
  if (glassesBig === false) {
    glassesBig = true;
  } else {
    glassesBig = false;
  }
}

function keyPressed() {
  if (key === 'r' || key === 'R') {
    clothesColor = color(255, 0, 0);
  } else if (key === ' ') {
    clothesColor = color(60, 120, 210);
  } else if (key === 's' || key === 'S') {
    saveGif('mySketch', 10);
  }
}