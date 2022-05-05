class Boss {
    constructor() {
   this.warning;
   
  
    }


 enemy1(){
  this.warning = createSprite(300,-500,70,70);
  this.warning.addImage(warn2);
  this.warning.lifetime= 1
  this.warning.scale = 0.8
 if(frameCount % 70  === 0){
   enemy = createSprite(300,-600,40,40);
   enemy.addImage(ancora);
   enemy.scale = 0.8
   enemy.x = Math.round(random(500 ,60));
  
   enemy.setCollider("rectangle", 0,7,200,150)
   enemy.velocityY = 14
   enemy.lifetime = 300

   bad.add(enemy);
 }
 }

enemy2(){
  this.warning = createSprite(70,-250,70,70);
  this.warning.addImage(warn3);
  this.warning.lifetime =2
  this.warning.scale = 0.8
 if(frameCount % 80  === 0){
 enemi2 = createSprite(-100,-300,40,40);
 enemi2.position.y = player.position.y
 enemi2.addImage(lanca);
 enemi2.scale = 0.8

 enemi2.setCollider("rectangle", -7,-15,145,40);
 enemi2.velocityX = 20
 enemi2.lifetime = 300
 bad2.add(enemi2)
}
}

enemy3(){
  this.warning = createSprite(90,-250,70,70);
  this.warning.addImage(warn);
  this.warning.lifetime =1
  this.warning.scale = 0.8
  if(frameCount % 50  === 0){
 enemi3 = createSprite(120,-600,30,30);
 enemi3.addImage(hok2);
 //enemi3.debug=true
 enemi3.setCollider("rectangle",-10,20,250,240);
 enemi3.scale = 0.7;
 enemi3.velocityY = 85;
 enemi3.lifetime = 300

 bad3.add(enemi3)
  }
 }

 enemy32(){
  this.warning = createSprite(320,-140,70,70);
  this.warning.addImage(warn);
  this.warning.lifetime =1
  this.warning.scale = 0.8
  if(frameCount % 50  === 0){
  enemi32 = createSprite(600,-150,30,30);
  enemi32.addImage(hok);
  enemi32.scale = 0.7;
 // enemi32.debug=true
  enemi32.setCollider("rectangle",-10,20,240,240);
  enemi32.velocityX = -85;
  enemi32.velocityY=0
  enemi32.lifetime = 200

  bad3.add(enemi32);
     }
 }

 enemy33(){
  this.warning = createSprite(320,-460,70,70);
  this.warning.addImage(warn);
  this.warning.lifetime =1
  this.warning.scale = 0.8
  if(frameCount % 50  === 0){
  enemi33 = createSprite(600,-450,30,30);
  enemi33.addImage(hok4);
  enemi33.scale = 0.7;
  //enemi33.debug=true
  enemi33.setCollider("rectangle",-10,20,240,240);
  enemi33.velocityX = -85;
  enemi33.velocityY=0
  enemi33.lifetime = 300
  bad3.add(enemi33);
 
     }
 }

enemy34(){
  this.warning = createSprite(530,-250,70,70);
  this.warning.addImage(warn);
  this.warning.lifetime =1
  this.warning.scale = 0.8
  if(frameCount % 50  === 0){
  enemi34 = createSprite(520,-30,30,30);
  enemi34.addImage(hok3);
  enemi34.scale = 0.7;
 // enemi34.debug=true
  enemi34.setCollider("rectangle",-10,20,240,240);
  enemi34.velocityY = -85;
  enemi34.velocityX=0 
  enemi34.lifetime = 300
  bad3.add(enemi33);
  }
}

enemy4(){
  this.warning = createSprite(300,-500,70,70);
  this.warning.addImage(warn2);
  this.warning.lifetime= 1
  this.warning.scale = 0.8
  //this.teleguiado();
  if(frameCount % 100 === 0){
  enemi4 = createSprite(300,-600);
  enemi4.addImage(shak);
  enemi4.scale = 2;

  enemi4.setCollider("rectangle",0,0,140,100);
  enemi4.velocityY = 16
  enemi4.lifetime= 300

  bad4.add(enemi4);
  this.teleguiado();
  }
}


teleguiado(){
  if(teleg===2){
    enemi4.position.x = 150
  }
  if(teleg===1){
    enemi4.position.x = 450
  }
}


enemy5(){  
  
enemi5 = createSprite(-100,-150,);
enemi5.addImage(bumer1);
enemi5.scale=0.8;
enemi5.velocityX=12
enemi5.debug=true
enemi5.setCollider("rectangle",0,0,230,150);


enemi52 = createSprite(700,-350)
enemi52.addImage(bumer2);
enemi52.scale=0.8;
enemi52.debug=true
enemi52.setCollider("rectangle",0,0,230,150);
enemi52.velocityX=-12

bad5.add(enemi5)
bad5.add(enemi52)


}

enemy52(){  
  
  enemi53 = createSprite(700,-150);
  enemi53.addImage(bumer2);
  enemi53.scale=0.9; 
  enemi53.velocityX=-12
  enemi53.velocityX -= 0.5
  
  enemi52.setCollider("rectangle",0,0,230,150);
  
  
  enemi54 = createSprite(-100,-350,)
  enemi54.addImage(bumer1);
  enemi54.scale=0.9;

  enemi52.setCollider("rectangle",0,0,230,150);
  enemi54.velocityX=12
  
  bad5.add(enemi53)
  bad5.add(enemi54)


  //enemi5.addAnimation("bomer",bumer1);
  }




}