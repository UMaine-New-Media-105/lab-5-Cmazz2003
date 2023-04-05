let x
let y
let speedoX
let speedoY
let spriteSize = 100

function setup() {
  createCanvas(400, 400);
  
  x = random(spriteSize, width - spriteSize);
   y = random(spriteSize, height - spriteSize) ;
   speedoX = 4;
  speedoY = 4;
  
}

function draw() {
  background(220);

  x += speedoX;
  y += speedoY;
  
  if (x + spriteSize / 2 > width){ 
   x = width - spriteSize / 2;
    speedoX *= -1;
     } else if (x - spriteSize / 2 < 0) {
    x = spriteSize / 2;
    speedoX *= -1;
}
  if (y + spriteSize / 2 > height) {
    y = height - spriteSize / 2;
    speedoY *= -1;
    } else if (y - spriteSize / 2 < 0) {
    y = spriteSize / 2;
    speedoY *= -1;
  }

  addTriangles(x,y);
}
    
// console.log("The value of x is: " + x)
// console.log("The value of speedoX is : " + speedoX)
function addTriangles(x,y){
  push();
  translate(x,y)
  scale(0.2)
  fill("gold");
  beginShape();
  vertex(100,200);
  vertex(200,50);
  vertex(300,200);
  endShape(CLOSE);
  beginShape();
  vertex(5,350);
  vertex(100,200);
  vertex(200,350);
  endShape(CLOSE);
  beginShape();
  vertex(200,350);
  vertex(300,200);
  vertex(395,350);
  endShape(CLOSE);
  pop(); 
}
