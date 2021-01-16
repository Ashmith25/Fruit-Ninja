var PLAY=1;
var END=0;
var gameState=1;
var sword,swordImage;
var fruitGroup,monsterGroup;
var score;

function preload(){
 swordImage=loadImage("sword.png"); 
 fruitImage1=loadImage("fruit1.png");
 fruitImage2=loadImage("fruit2.png"); 
 fruitImage3=loadImage("fruit3.png");
 fruitImage4=loadImage("fruit4.png");
 monsterImage1=loadImage("alien1.png"); 
 monsterImage2=loadImage("alien2.png");
 gameoverImage=loadImage("gameover.png"); 
}

function setup(){
 createCanvas(600,500); 
 sword=createSprite(40,200,20,20);
 sword.addImage("sword",swordImage); 
 sword.scale=0.7;
 fruitGroup=createGroup();
 monsterGroup=createGroup(); 
}

function draw(){
background("lightblue");
  text("Score:"+score,500,50);
  sword.x=mouseX;
  sword.y=mouseY;
  fruits();
  enemy();
  drawSprites(); 
  if(fruitGroup.isTouching(sword)){
    fruitGroup.destroyEach();
    score=score+2;  
  }
  if(monsterGroup.isTouching(sword)){
    sword.addImage("over",gameoverImage);
    sword.x=40;
    sword.y=200;
    monsterGroup.velocityX=0;
    fruitGroup.velocityX=0;
    monsterGroup.destroyEach();
    fruitGroup.destroyEach();
  }
}
function fruits(){
  if(frameCount%60===0){ 
  randomy=Math.round(random(100,300));
  fruit=createSprite(400,randomy,20,20);
  fruit.velocityX=-6;
  randomnum=Math.round(random(1,4));  
  switch(randomnum){
   case 1:fruit.addImage("a",fruitImage1)   
   break;
   case 2:fruit.addImage("b",fruitImage2)
   break;
   case 3:fruit.addImage("c",fruitImage3)
   break;
   case 4:fruit.addImage("d",fruitImage4)
   break;
  }  
  fruit.scale=0.3;
    
  fruitGroup.add(fruit);  
  }  
}
function enemy(){
  if(frameCount%200===0){
    randomy=Math.round(random(100,300));
    monster=createSprite(400,randomy,20,20)
    monster.velocityX=-8;
    rand=Math.round(random(1,2));
    switch(rand){
      case 1:monster.addImage("enemy1",monsterImage1)
      break;
      case 2:monster.addImage("enemy2",monsterImage2)
      break;  
    }
    monsterGroup.add(monster);
  }
  
}