let movingRect1, movingRect2;


function setup() {
  createCanvas(800,400);
  
  movingRect1 = createSprite(0, 200, 20, 20);
  movingRect2 = createSprite(800, 200, 20, 20);

  movingRect1.velocityX = 5;
  movingRect2.velocityX = -5;

  movingRect1.shapeColor = "red";
  movingRect2.shapeColor = "green";
}

function draw() {
  background(220); 
  
  bounceOff(movingRect1, movingRect2);

  drawSprites();
}

