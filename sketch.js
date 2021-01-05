var back,pla,pl,pl1,gr,la,lImg,plt,plt1,plt2,plt3,plt4,plt5,plt6,plt7,plt8,b1,b2,b3,c1,c2,c3,c,coins,GameState = PLAY,PLAY,END;
function preload(){
  back = loadImage("back.png");
  pl = loadImage("player.png");
  pl1 = loadImage("player2.png");
  lImg = loadImage('lava.jpg')
  plt = loadImage("paltform.png");
  c = loadImage("coin.png");
}

function setup(){
  createCanvas(1900,400);
  
  pla = createSprite(20,270);
  pla.addImage(pl);
  pla.scale =0.04;
  
  gr = createSprite(950,340,1900,30);
  gr.visible = false;
  
  la = createSprite(950,450,1500,110);
  la .addImage(lImg);
  la.scale = 2;
  
  plt1 = createSprite(200,150);
  plt1.addImage(plt);
  plt1.scale =0.2; 
  
  plt2 = createSprite(370,250);
  plt2.addImage(plt);
  plt2.scale =0.2; 
  
  plt3 = createSprite(520,90);
  plt3.addImage(plt);
  plt3.scale =0.2;
  
  plt4 = createSprite(820,250);
  plt4.addImage(plt);
  plt4.scale =0.2;
  
  plt5 = createSprite(1020,90);
  plt5.addImage(plt);
  plt5.scale =0.2;
  
  plt6 = createSprite(1320,300);
  plt6.addImage(plt);
  plt6.scale =0.2;
  
  plt7 = createSprite(1600,120);
  plt7.addImage(plt);
  plt7.scale =0.2;
  
  
  plt8 = createSprite(1850,250);
  plt8.addImage(plt);
  plt8.scale =0.27
  
  b1 = createSprite(1,200,1,400);
  b2 = createSprite(1899,200,1,400);
  b3 = createSprite(950,1,1900,1);
  
  c1 = createSprite(520,60);
  c1.addImage(c);
  c1.scale = 0.1;
  
  c2 = createSprite(1020,60);
  c2.addImage(c);
  c2.scale = 0.1;
  
  c3 = createSprite(1320,270);
  c3.addImage(c);
  c3.scale = 0.1;
  
//  pla.debug = true;
  
  coins = 0;
  
}
function draw(){
  background(back);
  if(GameState === PLAY){
    textSize(25);
    fill("white");
  text("Coins:"+coins,50,50);
 if(keyDown("w") || keyDown("up")) {
        pla.y = pla.y -22;
     
    }
    pla.velocityY = pla.velocityY + 0.9;
  
  if(keyDown("a") || keyDown("left")){
    pla.x = pla.x -6;
    pla.addImage(pl1);
    
  }
  if(keyDown("d") || keyDown("right")){
    pla.x = pla.x +6;
    pla.addImage(pl);
    
  }
  if(pla.isTouching(la)){
    pla.visible = false;
  }
  if(pla.isTouching(plt8)){
    textSize(75);
    fill("white")
    text("You Won",950,200);
  }
  if(pla.isTouching(c1)  ){
    coins = coins+1;
    c1.y = 1000;
  }
  if(pla.isTouching(c2)  ){
    coins = coins+1;
    c2.y = 1000;
  }
  if(pla.isTouching(c3)  ){
    coins = coins+1;
    c3.y = 1000;
  }
  }
  pla.collide(gr);
  pla.collide(plt1);
  pla.collide(plt2);
  pla.collide(plt3);
   pla.collide(plt4);
   pla.collide(plt5);
   pla.collide(plt6);
   pla.collide(plt7);
   pla.collide(plt8);
  pla.collide(b1);
  pla.collide(b2);
  pla.collide(b3);
  drawSprites();
}
