function setup() {
  createCanvas(400, 600);
  background(245, 240, 230);

  
  noStroke();
  fill(60, 120, 210);
  quad(0, 420, 400, 420, 400, 600, 0, 600);
  quad(0, 390, 150, 370, 150, 600, 0, 600);
  quad(250, 370, 400, 390, 400, 600, 250, 600);
  rect(150, 370, 100, 230);


  fill(235, 200, 175);
  rect(172, 332, 56, 62);


  noStroke();
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

  fill(55, 40, 30);
  ellipse(160, 245, 12, 12);
  ellipse(240, 245, 12, 12);

  fill(255);
  ellipse(157, 242, 4, 4);
  ellipse(237, 242, 4, 4);


  noFill();
  stroke(40);
  strokeWeight(3);
  ellipse(160, 245, 42, 42);
  ellipse(240, 245, 42, 42);
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