var player;
var canvas;
var plimg;
var distance;
var score;
var bkImg;
var gameState = 0;
var bunk1,bunk2,bunk3,bunk4;
var bnk1,bnk2,bnk3,bnk4;
var airp,airp2,airp3,airp4;
var bulletsGroup;
var bullets;
var misImg;
var backImg;
var back1,back2,baac3,back4,back5,back6,back7,back8,back9,back10;
var air;
var airImg,airImg2,airImg3;
var restart;
var balst;
var shurb1,shurb2,shurb3,shurb4,shurb5,shurb6,shurb7,shurb8;
var shurbImg,shurbImg2;
var rand;

function preload(){
  plaimg = loadImage("img.png");

  bnk1 = loadImage("bunker-md.png");
  bnk2 = loadImage("bunker.jpg");
  bnk3 = loadImage("bunker.jpg");
  bnk4 = loadImage("bunker.jpg");

  misImg = loadImage("missile.png");

  backImg = loadImage("back.png");
  airImg2 = loadImage("back2.png");

  airImg = loadImage("Airport.png");
  airImg3 = loadImage("Airport2.png");

  bkImg = loadImage("milkyway.jpg");

  blast = loadImage("blast.png");

  shurbImg = loadImage("shurbs.png");

  shurbImg2 = loadImage("shurb.png");
}

function setup() {
  canvas = createCanvas(windowWidth,windowHeight);

  back1 = createSprite(1300,height/1.8,0,10);
  back1.addImage("back1", backImg);

  back2 = createSprite(-238,height/1.8,0,10);
  back2.addImage("back2", airImg2);

  back3 = createSprite(-1750,height/1.8,0,10);
  back3.addImage("back3", backImg);

  back4 = createSprite(-3282,height/1.8,0,10);
  back4.addImage("back4", airImg2);

  back5 = createSprite(-4794,height/1.8,0,10);
  back5.addImage("back5", backImg);

  back6 = createSprite(-6326,height/1.8,0,10);
  back6.addImage("back6", airImg2);

  back7 = createSprite(-7838,height/1.8,0,10);
  back7.addImage("back7", backImg);

  back8 = createSprite(-9370,height/1.8,0,10);
  back8.addImage("back8", airImg2);

  back9 = createSprite(-10882,height/1.8,0,10);
  back9.addImage("back9", backImg);

  back10 = createSprite(-12414,height/1.8,0,10);
  back10.addImage("back10", airImg2);

  airp = createSprite(width-1400,height/1.2,1500,5)
  airp.scale = 0.5
  airp.addImage("airp", airImg);

  airp2 = createSprite(width-11500,height/1.2,1500,5)
  airp2.scale = 0.5
  airp2.addImage("airp2", airImg3);

  player = createSprite(width/1-850,height/1.16,25,10);
  player.addImage("player",plaimg);
  player.scale = 0.4;

  rand = random(1,10);

  if(gameState === 0){
    airp3 = createSprite(width-1400,player.y+140,1500,5);
    airp4 = createSprite(width-11500,player.y+140,1500,5);
  }

  distance = 0;
  score = 0;
  gameState = 0;

  bulletsGroup = createGroup();

  bunk1 = createSprite(width/10-2500,width/2);
  bunk1.addImage("bunk1",bnk1);
  
  bunk2 = createSprite(width/10-4500,width/2);
  bunk2.addImage("bunk2",bnk1);

  bunk3 = createSprite(width/10-6500,width/2);
  bunk3.addImage("bunk3",bnk1);

  bunk4 = createSprite(width/10-7500,width/2);
  bunk4.addImage("bunk4",bnk1);


  shurb1 = createSprite(width/10-2500,width/2);
  shurb1.scale = 0.3;
  shurb1.addImage("shurb1",shurbImg2);

  shurb2 = createSprite(width/10-4500,width/2);
  shurb2.addImage("shurb2",shurbImg);

  shurb3 = createSprite(width/10-6500,width/2);
  shurb3.addImage("shurb3",shurbImg);

  shurb4 = createSprite(width/10-7500,width/2);
  shurb4.scale = 0.3;
  shurb4.addImage("shurb4",shurbImg2);

  shurb5 = createSprite(width/10-1300,width/2);
  shurb5.scale = 0.3;
  shurb5.addImage("shurb5",shurbImg2);

  shurb6 = createSprite(width/10-3300,width/2);
  shurb6.addImage("shurb6",shurbImg);

  shurb7 = createSprite(width/10-5300,width/2);
  shurb7.scale = 0.3;
  shurb7.addImage("shurb7",shurbImg2);

  shurb8 = createSprite(width/10-8300,width/2);
  shurb8.addImage("shurb8",shurbImg);

  restart = createButton("Restart Game");
  restart.position(player.x+100,height/2);
}

function draw() {
  background("lightblue");  
  //0,10,160

  console.log(rand);

  restart.hide();

  if(gameState === 0 || gameState === 1 || gameState === 2 || gameState === 3 || gameState === 4){
    if(gameState === 0){
      player.bounciness = 0;
      airp3.bounciness = 0;
      player.bounceOff(airp3);
    }
  
    player.bounciness = 0;
    airp4.bounciness = 0;
    player.bounceOff(airp4);

    //
    


    if(gameState === 0 || gameState === 1){
      if(keyDown(LEFT_ARROW)){
        player.x = player.x-10;
        distance = distance+1;
        score = score+1;
        gameState = 1;
      }
    
      if(player.x < 140){
        if(keyDown(UP_ARROW)){
          player.y = player.y-5;
        }
      }
    
      if(keyDown(DOWN_ARROW)){
        player.y = player.y+10;
      }
    }
  
    if(bulletsGroup.isTouching(bunk1)){
      bunk1.scale = 0.5;
      bunk1.addImage("bunk1",blast);
      shurb1.addImage("shurb1",blast);
      bulletsGroup.visible = false;
      score = score+100;
      bulletsGroup.destroyEach();
      if(frameCount%20 === 0){
        bunk1.destroy();
      }
    }
  
    if(bulletsGroup.isTouching(bunk2)){
      bunk2.scale = 0.5;
      bunk2.addImage("bunk2",blast);
      shurb2.addImage("shurb2",blast);
      score = score+100;
      bulletsGroup.destroyEach();
      if(frameCount%20 === 0){
        bunk2.destroy();
      }
    }
  
    if(bulletsGroup.isTouching(bunk3)){
      bunk3.scale = 0.5;
      bunk3.addImage("bunk3",blast);
      shurb3.addImage("shurb3",blast);
      score = score+100;
      bulletsGroup.destroyEach();
      if(frameCount%20 === 0){
        bunk3.destroy();
      }
    }
  
    if(bulletsGroup.isTouching(bunk4)){
      bunk4.scale = 0.5;
      bunk4.addImage("bunk4",blast);
      shurb4.addImage("shurb4",blast);
      score = score+100;
      bulletsGroup.destroyEach();
      if(frameCount%20 === 0){
        bunk4.destroy();
      }
    }
  
    camera.x = player.x;

    console.log(player.x);
    console.log(player.y);
  
    drawSprites();
  
    if(player.isTouching(bunk1)){
      player.visible = false;
      bunk1.destroy();
      textSize(30);
      fill(0);
      text("FighterJet Crashed",player.x,player.y-100);
    }
  
    if(player.isTouching(bunk2)){
      player.visible = false;
      bunk2.destroy();
      textSize(30);
      fill(0);
      text("FighterJet Crashed",player.x,player.y-100);
    }
  
    if(player.isTouching(bunk3)){
      player.visible = false;
      bunk3.destroy();
      textSize(30);
      fill(0);
      text("FighterJet Crashed",player.x,player.y-100);
    }
  
    if(player.isTouching(bunk4)){
      player.visible = false;
      bunk4.destroy();
      textSize(30);
      fill(0);
      text("FighterJet Crashed",player.x,player.y-100);
    }
  
    textSize(22);
    fill(255);
    text("Your Score:" +score,player.x-300  ,windowHeight/10);
  
  
      if(distance > 1100){

        if(score > 1500){

          if(player.x < -9000 && player.y > 653){
            textSize(30);
            fill(0);
            text("Mission Completed",player.x-80,windowHeight/2);
            console.log("win");
            gameState =3;
          }

          else{
            restart.show();
            textSize(30);
            fill(0);
            text("Landing Unsuccessful",player.x-80,windowHeight/2);
            gameState =3;
        }
      }
  
        else{

          if(player.x < -9000 && player.y > 653){
            restart.show();
            textSize(30);
            fill(0);
            text("Mission Unsuccessful",player.x-90,windowHeight/2);
            console.log("lose");
            gameState = 4;
          }

          else{
            restart.show();
            textSize(30);
            fill(0);
            text("Mission and Landing Unsuccessful",player.x-150,windowHeight/2);
            gameState = 4;
          }
        }
      }
  }

  if(gameState === 0 ){
    textSize(30);
    fill("red");
    text("We have given you the mission to find all the terrorsists bunkers and destroy them and land ",width/100-130,height/5);
    text("on the airport that you will find after the last bunker you don't have to launch the missile anywhere",width/100-150,height/4);
    text("instead of terrorists bunkers otherwise strict action will be taken against you. So, be careful.",width/100-130,height/3.3);
    text("Use left arrow key to move forword, use up arrow key to move upwards",width/100,height/2.8);
    text("and use down arrow key to move downwords and use space key launch missile.",width/100-80,height/2.5);
  }
}

function keyPressed(){
  if(keyCode === 32){
    bullets = new Missile();
  }
}

function mousePressed() {
  player.x = player.x-10;
  player.y = mouse.y;
}