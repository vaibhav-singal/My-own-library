var fixedRect, movingRect;
var gameObject1;

function setup() {

  createCanvas(800, 400);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(600, 200, 80, 50);
  gameObject1 = createSprite(200, 200, 70, 50);

  fixedRect.velocityX = 2;
  movingRect.velocityX = -2;
  gameObject1.velocityX = 2;


  fixedRect.shapeColor = "white";
  movingRect.shapeColor = "green";
  gameObject1.shapeColor = "yellow";

}

function draw() {
  background(0);



bounceOff(gameObject1 , movingRect);
bounceOff(movingRect , fixedRect);
bounceOff(gameObject1 , fixedRect);






  drawSprites();

}

