function setup() {
  createCanvas(800, 400)
}

function draw() {

  translate(200, 200)
  background(0)
  sc = second();
  hr = hour();
  mn = minute();

  SecondHand();
  HourHand();
  minuteHand();

  push();
  noFill();
  strokeWeight(8)
  stroke("pink")
  ellipse(0, 0, 300)
  pop()
  
  fill("pink")
  ellipse(0, 0, 20)

}

function SecondHand() {

  secondAngle = map(sc, 0, 60, 0, 360);


  push();
  rotate(secondAngle)
  stroke("red")
  strokeWeight(10)
  line(0, 0, 100, 0)
  pop();

}

function HourHand() {

  hoursAngle = map(hr % 12, 0, 60, 0, 360);

  push()
  rotate(hoursAngle)
  stroke("green")
  strokeWeight(10)
  line(0, 0, 100, 0)
  pop();


}

function minuteHand() {

  minutesAngle = map(mn, 0, 60, 0, 360);

  push()
  rotate(minutesAngle)
  stroke("blue")
  strokeWeight(10)
  line(0, 0, 100, 0)
  pop();


}