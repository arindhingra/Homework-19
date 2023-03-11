var PLAY = 1;
var END = 0;
var gameState = PLAY;

var rocketShip, brokenShip, rocketShipImg, brokenShipImg;
var coin1, coin2, coin3, coin4, coin1Img, coin2Img, coin3Img, coin4Img; 
var skull1, skull2,skull1Img, skull2Img ; 
var lasers, lasersImg; 
var backGround, backGroundImg; 
var gameOver, gameOverImg; 

var score;


function preload(){
rocketShipImg = loadImage("rocketship.jpg");
brokenShipImg = loadImage("brokenship.jpg");
coin1Img = loadImage("coin.jpg");
coin2Img = loadImage("coin.jpg");
coin3Img = loadImage("coin.jpg");
coin4Img = loadImage("coin.jpg");
skull1Img = loadImage("skull.jpg");
skull2Img = loadImage("skull.jpg");
gameOverImg = loadImage("game over.jpg");
backGroundImg = loadImage("background.jpg");
lasersImg = loadImage("lasers.jpg");
}

function setup() {
 createCanvas(600,600);

 rocketShip = createSprite(300, 100, 5, 10);
 rocketShip.addImage("rocketShip", rocketShipImg);
 rocketShip.addImage("broken", brokenShipImg);
 gameOver = createSprite(300, 300, 20, 10);
 gameOver.addImage(gameOverImg)
 background = createSprite(600, 600, 600, 600);
 background.addImage("background", backGroundImg);
 background.y = background.height /2;
 coin1 = createSprite(Math.round(1,600), -50, 4, 4);
 coin2 = createSprite(Math.round(1,600), -10, 4, 4);
 coin3 = createSprite(Math.round(1,600), -150, 4, 4);
 coin4 = createSprite(Math.round(1,600), -100, 4, 4);
 skull1 = createSprite(Math.round(1,600), -75, 4, 4);
 skull2 = createSprite(Math.round(1,600), -175, 4, 4);
 lasers.x = rocketShip.x;
 lasers.y = rocketShip.y;
 coin1.addImage("coin1", coin1Img);
 coin2.addImage("coin2", coin2Img);
 coin3.addImage("coin3", coin3Img);
 coin4.addImage("coin4", coin4Img);
 skull1.addImage("image1", skull1Img);
 skull2.addImage("image2", skull2Img);
 lasers.addImage("lasers", lasersImg);
  score = 0;

}

function draw() {
 background(250);

 text("Score " + score, 100, 10);

 if(gameState === PLAY){
    backGround.velocityY = -4;
    if(lasers.isTouching(coin1 || coin2 || coin3 || coin4)){
        score = score + 1;
        resetCoins();
    }
    if(lasers.isTouching(skull1 || skull2)){
      resetSkulls();
    }
    gameOver.visible(false);
    rocketShip.velocityY = 3;
    fasterVelocity();
    if(skull1.isTouching(rocketShip)){
      gameState = END;
    }
    if(skull2.isTouching(rocketShip)){
      gameState = END;
    }
    if(coin1 >= 600){
      resetCoins();
    }
    if(coin2 >= 600){
      resetCoins();
    }
    if(coin3 >= 600){
      resetCoins();
    }
    if(coin4 >= 600){
      resetCoins();
    }
    if(skull1 >= 600){
      resetSkulls();
    }
    if(skull2 >= 600){
      resetSkulls();
    }
 }
 if(gameState === END){
  rocketShip.changeAnimation("brokenship.jpg");
  gameOver.visible(true);
  backGround.velocityY = 0;
  rocketShip.velocityY = 0;
 }

 drawSprites();
 showScore();
}
 function showScore(){
  fill("black");
    
    textSize(20);
    
    text("Score: ", 10, 10, 80, 20);
    
    text(score1, 60, 10, 80, 20);
 }
 function fasterVelocity(){
  if(score >= 5){
    backGround.velocityY = -6
  }
  if(score >= 10){
    backGround.velocityY = -8
  }
  if(score >= 20){
    backGround.velocityY = -12
  }
  if(score >= 30){
    backGround.velocityY = -15
  }
 }
 function resetCoins(){
  coin1.x = (Math.round(1,600));
  coin2.x = (Math.round(1,600));
  coin3.x = (Math.round(1,600));
  coin4.x = (Math.round(1,600));
  coin1.y = -50;
  coin2.y = -10;
  coin3.y = -100; 
  coin4.y = -150;

 }
 function resetSkulls(){
  skull1.x = (Math.round(1,600));
  skull2.x = (Math.round(1,600));
  skull1.y = -75;
  skull2.y = -175;
 }
 