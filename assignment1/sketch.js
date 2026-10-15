function setup() {
  createCanvas(600, 800);
}

function draw() {
  // 전체 배경 - 건물 벽
  background(180,145,130);
  //나무
  fill(100, 75, 55);
  rect(50, 500, 25, 220);
  fill(80, 125, 70);
  circle(60, 470, 100);
  circle(35, 500, 80);
  circle(90, 500, 80);
  // 카페 외관
  fill(80,170,165);
  noStroke();
  rect(150,200,350,500);
  fill(190);
  rect(0, 720, 600, 80);
  // 위쪽 간판 영역
  fill(50,130,125);
  rect(150,200,350,100);
  fill(220, 235, 220);
  fill(220, 235, 220);
  circle(230, 250, 75);
  circle(210, 215, 25);
  circle(250, 215, 25);
  fill(30);
  circle(210, 217, 10);
  circle(250, 217, 10);
  fill(255);
  circle(208, 215, 3);
  circle(248, 215, 3);
  // 창문 영역
  fill(55,85,80);
  rect(170,320,215,370);
  fill(45,75,70);
  rect(400,320,80,370);
  // 문 손잡이
  fill(240);
  rect(410, 485, 6, 35, 2);
  // 창문 안쪽 조명
  stroke(245, 225, 160);
  strokeWeight(3);
  line(200, 350, 280, 350);
  line(280, 350, 320, 365);
  noStroke();
  fill(255);
  textSize(35);
  text("청계구리",390,260);
  fill(255);
  textSize(15);
  text("COFFEE & GOODS",390,290);
  fill(120,125,120);
  ellipse(150,550,100,300);
  fill(235, 220, 180);
  rect(330, 400, 35, 30, 5);
  noFill();
  stroke(235, 220, 180);
  strokeWeight(4);
  circle(367, 415, 18);
  noStroke();
  fill(90, 60, 40);
  ellipse(347, 402, 28, 6);
  stroke(220);
  strokeWeight(2);
  //조명
  line(340, 390, 337, 380);
  line(355, 390, 358, 380);
  noStroke();
  //개구리 얼굴
  fill(180,210,35);
  circle(300,570,130);
  circle(270,505,32);
  circle(330,505,32);
  fill(20,30,20);
  circle(273,507,14);
  circle(327,507,14);
  fill(255);
  circle(276,504,5);
  circle(330,504,5);
  fill(255,100,100);
  circle(260,580,14);
  circle(340,580,14);
  fill(190,55,65);
  ellipse(300,600,25,35);
  //매봉
  fill(40);
  textSize(25);
  textAlign(CENTER)
  text("매",150,500);
  text("봉",150,600);
  fill(225,150,35);
  rect(235,635,130,80);
  stroke(245);
  strokeWeight(3);
  line(300,645,300,705);
  stroke(185,210,35);
  strokeWeight(18);
  line(230,650,210,625);
  line(360,650,385,670);
  noStroke();
  fill(185,210,35);
  ellipse(250,715,45,25);
  ellipse(350,715,45,25);
}