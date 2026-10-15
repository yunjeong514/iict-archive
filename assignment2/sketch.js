let rows = 12;
let dnaWidth;

function setup() {
  createCanvas(500, 700);
  strokeCap(SQUARE);

  makeDNA();
}

function draw() {
}

function mousePressed() {
  makeDNA();
}


// 전체 DNA 그리기
function makeDNA() {

  // 짙은 남색 배경
  background(18, 25, 38);

  // 클릭할 때마다 DNA 폭 변화
  dnaWidth = random(80, 115);

  let centerX = width / 2;
  let startY = 55;
  let gapY = 52;


  for (let i = 0; i < rows; i++) {

    let y = startY + i * gapY;

    // DNA의 꼬인 형태
    let wave = sin(i * 0.8);

    let leftX = centerX - wave * dnaWidth;
    let rightX = centerX + wave * dnaWidth;


    // ==============================
    // DNA 바깥 선
    // 자유전공 = 파랑
    // ==============================

    stroke(90, 160, 235);
    strokeWeight(random(2, 3));


    // 왼쪽 DNA 선
    push();

    translate(leftX, y);
    rotate(wave * 0.4);

    line(
      0,
      -10,
      0,
      10
    );

    pop();


    // 오른쪽 DNA 선
    push();

    translate(rightX, y);
    rotate(-wave * 0.4);

    line(
      0,
      -10,
      0,
      10
    );

    pop();


    // ==============================
    // 일부 마디에만 연결선 + 조각
    // ==============================

    if (random(1) < 0.65) {

      stroke(90, 160, 235);
      strokeWeight(1.5);

      line(
        leftX,
        y,
        rightX,
        y
      );


      // 왼쪽 조각 종류
      let leftType = int(random(3));

      if (leftType == 0) {

        businessShape(leftX, y);

      } else if (leftType == 1) {

        mediaShape(leftX, y);

      } else {

        mixedShape(leftX, y);

      }


      // 오른쪽 조각 종류
      let rightType = int(random(3));

      if (rightType == 0) {

        businessShape(rightX, y);

      } else if (rightType == 1) {

        mediaShape(rightX, y);

      } else {

        mixedShape(rightX, y);

      }
    }
  }
}



// ==================================
// 경영학
// 빨간색 + 사각형
// ==================================

function businessShape(x, y) {

  let type = int(random(4));
  let size = random(8, 21);

  stroke(240, 90, 95);
  strokeWeight(2);
  noFill();

  rectMode(CENTER);


  // 1. 사각형
  if (type == 0) {

    rect(
      x,
      y,
      size,
      size
    );
  }


  // 2. 마름모
  else if (type == 1) {

    push();

    translate(x, y);
    rotate(PI / 4);

    rect(
      0,
      0,
      size,
      size
    );

    pop();
  }


  // 3. 이중 사각형
  else if (type == 2) {

    rect(
      x,
      y,
      size,
      size
    );

    rect(
      x,
      y,
      size * 0.5,
      size * 0.5
    );
  }


  // 4. 격자
  else {

    rect(
      x,
      y,
      size,
      size
    );

    line(
      x - size / 6,
      y - size / 2,
      x - size / 6,
      y + size / 2
    );

    line(
      x + size / 6,
      y - size / 2,
      x + size / 6,
      y + size / 2
    );

    line(
      x - size / 2,
      y - size / 6,
      x + size / 2,
      y - size / 6
    );

    line(
      x - size / 2,
      y + size / 6,
      x + size / 2,
      y + size / 6
    );
  }
}



// ==================================
// 언론정보학
// 밝은 회색 + 원
// ==================================

function mediaShape(x, y) {

  let type = int(random(4));
  let size = random(8, 21);

  // 이전보다 밝게
  stroke(210, 215, 225);

  // 다른 조각보다 살짝 굵게
  strokeWeight(2.4);

  noFill();


  // 1. 원
  if (type == 0) {

    circle(
      x,
      y,
      size
    );
  }


  // 2. 이중 원
  else if (type == 1) {

    circle(
      x,
      y,
      size
    );

    circle(
      x,
      y,
      size * 0.45
    );
  }


  // 3. 점
  else if (type == 2) {

    noStroke();

    fill(210, 215, 225);

    circle(
      x,
      y,
      size * 0.55
    );
  }


  // 4. 원 + 중심점
  else {

    circle(
      x,
      y,
      size
    );

    noStroke();

    fill(210, 215, 225);

    circle(
      x,
      y,
      4
    );
  }
}



// ==================================
// 경영 + 언론정보 융합
// 보라색
// ==================================

function mixedShape(x, y) {

  let type = int(random(3));
  let size = random(9, 21);

  stroke(180, 135, 225);
  strokeWeight(2);
  noFill();

  rectMode(CENTER);


  // 1. 원 안의 사각형
  if (type == 0) {

    circle(
      x,
      y,
      size
    );

    rect(
      x,
      y,
      size * 0.45,
      size * 0.45
    );
  }


  // 2. 사각형 + 원 겹치기
  else if (type == 1) {

    rect(
      x - 3,
      y,
      size * 0.7,
      size * 0.7
    );

    circle(
      x + 3,
      y,
      size * 0.65
    );
  }


  // 3. 마름모 + 점
  else {

    push();

    translate(x, y);
    rotate(PI / 4);

    rect(
      0,
      0,
      size * 0.7,
      size * 0.7
    );

    pop();


    noStroke();

    fill(180, 135, 225);

    circle(
      x,
      y,
      4
    );
  }
}