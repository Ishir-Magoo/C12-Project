var player;
var path;


function preload(){
  //pre-load images
  playerIMG = loadAnimation("Runner-1.png","Runner-2.png")
  pathIMG = loadAnimation("path.png")
}

function setup(){

  createCanvas(400,400);

  

  //create sprites here

  //creating path
  path = createSprite(200,200,200,200);
  path.addAnimation("image",pathIMG);
  
  

   //creating player sprite
   player  = createSprite(200,200,50,50);
   player.addAnimation("image",playerIMG);
   player.scale=0.1;

}

function draw() {
  background("black");

  path.velocityY=5;

  if(300<path.y){
    path.y=path.height/50
  }
  
  drawSprites();
}
