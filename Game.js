class Jogo {
  constructor() {
 this.key1 =0;
 this.key2 =0;
 this.key3 =0;

 this.contagem=0;

 this.inimigo = new Boss();

  }

  intro() {
    fill("black");
    text("procure pelo easteregg", 450,590)
    textSize(30)
    text("<aperte spaço>",50,450)
    text("voce e um simples pirata que decidiu", 10,150);
    text("pescar,mas durante sua pescaria", 10,200);
    text("voce encontra um navio quebrado", 10,250);
    text("então decide embarcar nele", 10,300);
    textSize(35)
    text("mas mal voce sabe oque te espera", 5,350);

    

   };

   game1(){
  


  
  player.collide(wall);
  player.collide(wall2);
  player.collide(wall3);
  player.collide(wall4);
  player.collide(wall5);
  player.collide(wall6);
  player.collide(wall7);
  player.collide(wall8);
  player.collide(wall9);
  
  camera.position.y = player.position.y;
  camera.position.x = player.position.x;
    
   walker();
   }

   game2(){

    objeto.addImage(bau);
    objeto.scale = 0.3
  
  wall.visible=true
  wall.position.x = 15
  wall.shapeColor = "orange"
  wall4.visible=true
  wall4.position.x = 570
  wall4.shapeColor = "orange"

  wall10.shapeColor = "orange";
  wall10.visible = true;

  player.collide(wall);
  player.collide(wall4);
  player.collide(wall10);
 
  
  this.puzle();

   back.visible = false
   walker();

   }

  game3() {
  player.visible=false  
  wall.visible=false
  wall4.visible=false
  wall10.visible=false
  box1.visible=false
  box2.visible=false
  box3.visible=false
  objeto.visible=false

  objeto.position.x = 1200

  player.position.y = -30
  player.position.x = 300 

  imageMode(CENTER)
  image(bau2,290,-250,400,400);
 
  fill("white")
  textSize(20)
  text("aperte spaço para pegar o tesouro",150,-30);

  }

  game4(){
  
  imageMode(CENTER)
  image(bau2,290,-290,350,350);

  image(pirata,275,-270,650,650);

  fill("white")
  textSize(20)
  text("mas oque e isso! voce acha que pode chegar aqui",70,-60);
  text("e roubar meu tesouro, voce vai ver agora",70,-40);
  text("eu vou separar sua alma pedaço por pedaço",70,-20);

  text("aperte para cima para começar",150,30);
  }

  boss(){

 this.contagem += 1

 if(keyWentDown("s")){this.contagem=1450}

  player.visible=true;
  if(this.contagem >  20 && this.contagem < 500){
  this.inimigo.enemy5 ();
 
  }

  if(this.contagem >  500 && this.contagem < 1100){
  this.inimigo.enemy2();
  }

  

  if(this.contagem >  1100 && this.contagem < 1150){
  this.inimigo.enemy3();
    }

  if(this.contagem >  1150 && this.contagem < 1200){
  this.inimigo.enemy32();
  } 

  if(this.contagem >  1200 && this.contagem < 1250){
    this.inimigo.enemy33();
    } 

  if(this.contagem >  1250 && this.contagem < 1300){
    this.inimigo.enemy34();
    } 

  if(this.contagem >  1300 && this.contagem < 1350){
    this.inimigo.enemy33();
    this.inimigo.enemy32();
    } 

  if(this.contagem >  1350 && this.contagem < 1400){
    this.inimigo.enemy3();
    this.inimigo.enemy34();
    } 

  if(this.contagem >  1400 && this.contagem < 1450){
    this.inimigo.enemy3();
    this.inimigo.enemy33();
    this.inimigo.enemy32();
    this.inimigo.enemy34();
    } 

  if(this.contagem > 1450 && this.contagem < 1800){
   this.inimigo.enemy4();
    }
  console.log(this.contagem)
  console.log(teleg)

  walker2();
  }





  gameover(){
  player.visible = false
  if(enemy !==undefined){
    enemy.destroy()}
  if(enemi2 !==undefined){
   enemi2.destroy()}
   player.visible = false
  if(enemi3 !==undefined){
   enemi3.destroy()}
   if(enemi32 !==undefined){
    enemi32.destroy()}
   if(enemi33 !==undefined){
    enemi33.destroy()}
  }

  
  

   puzle() {
  fill("red");
  rect(100,-300,40,40);
  fill("blue");
  rect(450,-300,40,40);
  fill("purple")
  rect(280,-60,40,40)

  box1.visible=true;
  box2.visible=true;
  box3.visible=true;
  box1.collide(wall10);
  box2.collide(wall10);
  box3.collide(wall10);
  box1.collide(wall);
  box2.collide(wall);
  box3.collide(wall);
  box1.collide(wall4);
  box2.collide(wall4);
  box3.collide(wall4);

  player.displace(box1);
  player.displace(box2);
  player.displace(box3);

  if(box1.isTouching(red) || keyWentDown("a")){
    this.key1 = 1
    //console.log(this.key1)
  }
  if(box2.isTouching(purpl) || keyWentDown("a")){
    this.key2 = 1
   //console.log(this.key2)
  }
  if(box3.isTouching(blu) || keyWentDown("a")){
    this.key3 = 1
    //console.log(this.key3)
  }

  if(this.key1===1&&this.key2===1&&this.key3===1){
  objeto.y = -460
  objeto.setCollider("rectangle", 0,0,400,400)
  objeto.addImage(tesouro);
  objeto.scale = 0.3
  }

   }
 




   
}



 

