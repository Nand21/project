var fixedRect, MovingRect

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400,200,50,50);
  MovingRect = createSprite(500,200,50,50);

  MovingRect.velocityX = -3;
  fixedRect.velocityX = 3; 

  fixedRect.shapeColor = "red";
  MovingRect.shapeColor = "blue"
}

function draw() {
  background(255,255,255);  
  
  bounceOff(fixedRect,MovingRect);
  
  drawSprites();
}
