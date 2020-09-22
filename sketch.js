var fixedRect,movingRect;
var gameObject1;


function setup() {
  createCanvas(800,400);
 fixedRect = createSprite(400, 200, 50, 50);
 movingRect = createSprite(600,300,80,50);

 gameObject1 = createSprite(200,300, 50,50);

 fixedRect.shapeColor = "green";
 movingRect.shapeColor = "green";
 gameObject1.shapeColor = "green";

}

function draw() {
  background(0); 
  
  movingRect.y = World.mouseY;
  movingRect.x = World.mouseX;

   if(isTouching(movingRect, gameObject1)){
    gameObject1.shapeColor = "red";
    movingRect.shapeColor = "red";
   }
   else{
    gameObject1.shapeColor = "green";
    movingRect.shapeColor = "green";
   }

  

  drawSprites();

}

