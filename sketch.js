var comptador = 0;
var shapes = [];

class Ring {

  constructor(_colors, _a) {
    this.colors = _colors;
    this.a = _a;
    this.b = 0;
  }

  display() {
    push();
    noFill();
    stroke(this.colors);
    strokeWeight(7);
    square(this.b, this.b, 30 * this.a);
    pop();
  }
}

class Shape {

  constructor(_x, _y, _color, _rAngle, _rFactor) {
    this.velocity = 1;
    this.x = _x;
    this.y = _y;
    this.color = _color;
    this.angle = 45;
    this.rAngle = _rAngle;
    this.rFactor = _rFactor;
  }

  show() {
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    blendMode(LIGHTEST);
    for (let i = 1; i < 10; i++) {
      let ring = new Ring(this.color, i)
      ring.display();
    }
    pop();
  }

  move() {
    this.x += random(-0.2, 0.2);
    this.y += random(-0.2, 0.2);
    
  }
  
  rotate() {
    this.angle += 0.1;
  }
}

function mousePressed() {
  let colorR = [random(0, 255), random(0, 255), random(0, 255)];
  let angle = random(-0.5, 0.5);
  let factor = random(-1, 1);
  shapes.push(new Shape(mouseX, mouseY, colorR, angle));
}

function doubleClicked() {
  setup();
}

function setup() {
  createCanvas(500, 500);
  
  rectMode(CENTER);
  angleMode(DEGREES);
  textFont("Raleway");
}

function draw() {
  background(250, 120, 0);
  comptador++;
  
  for (let i = 0; i < shapes.length; i++) {
    shapes[i].show();
    shapes[i].move();
    shapes[i].rotate();
  }
  
  blendMode(BLEND);
  textSize(10);
  fill(0, map(comptador, 0, 500, 0, 255));
  text("with the brattles", 20, height - 50);
  text("and dead kennedys", 20, height - 35);
  text("matinee and eve", 150, height - 50);
  text("saturday / june 13 1981", 150, height - 35);
  text("bonds international casino", 330, height - 50);
  text("in times square, new york city", 330, height - 35);
  
  if (mouseX > 20 && mouseX < 325 && mouseY > 325 && mouseY < 380) {
    fill(255, map(comptador, 0, 500, 0, 255));
  } else {
    fill(0, map(comptador, 0, 500, 0, 255));
  }
  textSize(70);
  text("the clash", 20, height - 120);
}