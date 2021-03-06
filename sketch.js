var bg_img, bg, crystal_img;
var coins_img, coinsGroup;
var girl, girl_img;
var invisible_ground;
var obstacle_img; obstaclesGroup;
var crystal_img, crystal;

function preload(){
bg_img = loadImage("images/background.jpg")

crystal_img = loadImage("images/crystalbg.png")

coins_img = loadAnimation("images/coin-0.png", "images/coin-1.png", "images/coin-2.png", "images/coin-3.png", "images/coin-4.png")

girl_img = loadAnimation("images/moving girl-0.png", "images/moving girl-1.png", "images/moving girl-2.png",
 "images/moving girl-3.png","images/moving girl-4.png","images/moving girl-5.png","images/moving girl-6.png",
 "images/moving girl-7.png", "images/moving girl-8.png","images/moving girl-9.png","images/moving girl-10.png",
 "images/moving girl-11.png")

 obstacle_img = loadAnimation("images/obstacle-1.png","images/obstacle-2.png", "images/obstacle-3.png", 
 "images/obstacle-4.png", "images/obstacle-5.png" )

 crystal_img = loadImage("images/marbel_ball.png")

}

function setup(){
  createCanvas (1200,500)

  bg = createSprite(600,0,1200,600)
  bg.addImage(crystal_img)
  bg.velocityX = -3;
  bg.scale = 8

  girl = createSprite(100,380,50,50)
  girl.addAnimation("girl",girl_img)

  invisible_ground = createSprite(600,490,1200,20)
  invisible_ground.visible = false;

 
  
}


function draw(){
  background(0)

  if(bg.x<0){
    bg.x = bg.width/2
  }

 if(keyDown("space")){
  girl.velocityY = -10;
 }

 girl.velocityY = girl.velocityY+0.5;

 girl.collide(invisible_ground)

  spawnCoins()
  spawnObstacles()

drawSprites()
}

