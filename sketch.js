var bg;
var bg1;



function preload(){
  bg=loadImage("space.jpg");
}
function setup() {
  createCanvas(600,600);
  bg1=createSprite(400, 200, width, height);
  bg1.addImage(bg);
  bg1.scale=4;
  //bg1.x=bg1.width/2;
  bg1.velocityY=2;
}

function draw() {
  background(180,180,180);  

  if(bg1.y>350){
    bg1.y=50;
  }
  drawSprites();
}