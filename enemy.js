class Boss {
    constructor() {
   
   
  
    }


 enemy1(){
 if(frameCount % 80  === 0){
   enemy = createSprite(300,-600,40,40);
   enemy.addImage(ancora);
   enemy.scale = 0.8
   enemy.x = Math.round(random(500 ,60));
   enemy.debug=true;
   enemy.setCollider("rectangle", 0,7,200,150)
   enemy.velocityY = 14
   enemy.lifetime = 300

   bad.add(enemy);
 }
 }

enemy2(){
 if(frameCount % 80  === 0){
 enemi2 = createSprite(-100,-300,40,40);
 enemi2.position.y = player.position.y
 enemi2.addImage(lanca);
 enemi2.scale = 0.8
 enemi2.debug=true;
 enemi2.setCollider("rectangle", -7,-15,145,40);
 enemi2.velocityX = 25
 enemi2.lifetime = 300
 bad.add(enemi2)
}
}


}