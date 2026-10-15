// 작품의 상태를 기억하는 전역 변수
let stage = 0;          // 0: 대기, 1: 카운트다운, 2: 발사
let rocketY = 280;      // 로켓의 y좌표
let rocketSpeed = 0;    // 로켓의 속도
let countdownStart = 0; // 카운트다운을 시작한 시간

function setup() {
  createCanvas(800, 600);
}

function draw() {
  // 카운트다운이 3초 지나면 발사 단계로 이동
  if (stage === 1 && millis() - countdownStart >= 3000) {
    stage = 2;
    rocketSpeed = 0;
  }

  // 발사 단계에서는 속도가 점점 빨라지고 로켓이 위로 이동
  if (stage === 2) {
    rocketSpeed = rocketSpeed + 0.08;
    rocketY = rocketY - rocketSpeed;
  }

  // 배경
  background(5, 9, 24);

  // 별
  noStroke();
  fill(220, 230, 255);
  circle(70, 80, 3);
  circle(145, 160, 2);
  circle(235, 65, 3);
  circle(310, 130, 2);
  circle(520, 75, 3);
  circle(590, 190, 2);
  circle(735, 75, 3);
  circle(760, 240, 2);
  circle(100, 310, 2);
  circle(245, 230, 2);
  circle(555, 300, 3);
  circle(710, 350, 2);

  // 행성의 고리와 표면
  noFill();
  stroke(215, 143, 137, 130);
  strokeWeight(2);
  ellipse(670, 135, 165, 38);

  noStroke();
  fill(151, 74, 79);
  circle(670, 135, 105);

  fill(221, 124, 103, 100);
  ellipse(652, 117, 28, 10);
  ellipse(690, 155, 36, 12);

  // 산과 언덕
  fill(15, 25, 45);
  beginShape();
  vertex(0, 425);
  vertex(100, 390);
  vertex(190, 425);
  vertex(310, 385);
  vertex(420, 425);
  vertex(565, 390);
  vertex(690, 425);
  vertex(800, 395);
  vertex(800, 600);
  vertex(0, 600);
  endShape(CLOSE);

  // 발사대 다리와 받침대
  fill(47, 61, 86);
  rect(340, 390, 22, 53);
  rect(438, 390, 22, 53);

  fill(87, 105, 135);
  quad(315, 385, 485, 385, 465, 404, 335, 404);

  // 발사대 표시등
  fill(79, 205, 190);
  circle(327, 394, 6);
  circle(473, 394, 6);

  // 마우스가 로켓 위에 있는지 확인
  let hovering =
    stage === 0 &&
    mouseX > 358 &&
    mouseX < 442 &&
    mouseY > rocketY - 55 &&
    mouseY < rocketY + 55;

  // 카운트다운 중 로켓이 살짝 흔들리게 함
  let shake = 0;

  if (stage === 1) {
  let elapsed = millis() - countdownStart;
  shake = map(noise(elapsed * 0.01), 0, 1, -2, 2);
}

  // 로켓을 가운데 기준으로 그리기
  push();
  translate(400 + shake, rocketY);

  // 마우스를 올리면 로켓 주변에 푸른 빛이 생기고 커짐
  if (hovering) {
    noStroke();
    fill(65, 190, 255, 35);
    ellipse(0, 0, 115, 145);
    scale(1.12);
  }

  // 불꽃: 마우스를 올렸거나 카운트다운·발사 중일 때 표시
  if (hovering || stage === 1 || stage === 2) {
    noStroke();

    if (stage === 2) {
      fill(255, 93, 52);
      triangle(-14, 47, 14, 47, 0, 105);

      fill(255, 205, 104);
      triangle(-7, 47, 7, 47, 0, 85);
    } else {
      fill(255, 93, 52);
      triangle(-12, 47, 12, 47, 0, 70);

      fill(255, 205, 104);
      triangle(-6, 47, 6, 47, 0, 62);
    }
  }

  // 로켓 날개
  fill(195, 60, 68);
  triangle(-18, 25, -38, 53, -16, 47);
  triangle(18, 25, 38, 53, 16, 47);

  // 로켓 몸체와 머리
  fill(220, 228, 238);
  rect(-18, -20, 36, 68, 16);

  fill(197, 65, 72);
  triangle(-18, -10, 18, -10, 0, -49);

  // 로켓 창문
  fill(80, 191, 218);
  circle(0, 7, 16);

  // 카운트다운 표시등 개수 정하기
  let lightsOn = 0;

  if (hovering) {
    lightsOn = 3;
  }

  if (stage === 1) {
    let elapsed = millis() - countdownStart;

    if (elapsed < 1000) {
      lightsOn = 3;
    } else if (elapsed < 2000) {
      lightsOn = 2;
    } else {
      lightsOn = 1;
    }
  }

  // 표시등 세 개를 차례로 그림
  if (lightsOn >= 1) {
    fill(110, 235, 255);
  } else {
    fill(75, 86, 105);
  }
  circle(-10, 30, 4);

  if (lightsOn >= 2) {
    fill(110, 235, 255);
  } else {
    fill(75, 86, 105);
  }
  circle(0, 30, 4);

  if (lightsOn >= 3) {
    fill(110, 235, 255);
  } else {
    fill(75, 86, 105);
  }
  circle(10, 30, 4);

  pop();
}

// 로켓을 클릭하면 카운트다운 시작
function mousePressed() {
  if (
    stage === 0 &&
    mouseX > 358 &&
    mouseX < 442 &&
    mouseY > rocketY - 55 &&
    mouseY < rocketY + 55
  ) {
    stage = 1;
    countdownStart = millis();
  }
}

// R 키를 누르면 전역 변수도 처음 상태로 초기화
function keyPressed() {
  if (key === "r" || key === "R") {
    stage = 0;
    rocketY = 280;
    rocketSpeed = 0;
    countdownStart = 0;
  }
}
