
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var stone,chain,tree,boy,mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;

function preload()
{
	tree=loadImage("sprites/tree.png")
	boy=loadImage("sprites/boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone=new Stone(186,605,25,25);
	ground = new Ground(600,height,1200,20);
	chain=new Slingshot(stone.body,{x:186,y:605});
	mango1=new Mango(random(550,673),random(354,428),random(10,20));
	mango2=new Mango(random(550,673),random(354,428),random(10,20));
	mango3=new Mango(random(550,673),random(354,428),random(10,20));
	mango4=new Mango(random(550,673),random(354,428),random(10,20));
	mango5=new Mango(random(550,673),random(354,428),random(10,20));
	mango6=new Mango(random(484,754),random(415,459),random(10,20));
	mango7=new Mango(random(484,754),random(415,459),random(10,20));
	mango8=new Mango(random(484,754),random(415,459),random(10,20));
	mango9=new Mango(random(484,754),random(415,459),random(10,20));
	mango10=new Mango(random(484,754),random(415,459),random(10,20));
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  image(tree,400,300,400,400)
  image(boy,150,559,180,180)
  chain.display()
  ground.display()
  stone.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()
  mango8.display()
  mango9.display()
  mango10.display()
  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);
  detectollision(stone,mango8);
  detectollision(stone,mango9);
  detectollision(stone,mango10);


  drawSprites();
  noStroke();
  fill(22, 102, 18)
  text(mouseX+","+mouseY,mouseX,mouseY)
}
function mouseDragged (){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased () {
	chain.fly();
}
function detectollision(stone,mango){
	object1= stone.body.position
	object2= mango.body.position
	if(Math.abs((object1.x - object2.x))<=(mango.radius +stone.width)&&
    (Math.abs(object1.y - object2.y))<=(mango.radius +stone.height)){
	  Matter.Body.setStatic(mango.body,false);
	  console.log("it is the codey")
	}
}
function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:186,y:605})
		chain.attach();
  }
  if(keyCode===82){
    Matter.Body.setPosition(mango1.body,{x:random(550,673),y:random(354,428)})
    Matter.Body.setPosition(mango2.body,{x:random(550,673),y:random(354,428)})
    Matter.Body.setPosition(mango3.body,{x:random(550,673),y:random(354,428)})
    Matter.Body.setPosition(mango4.body,{x:random(550,673),y:random(354,428)})
    Matter.Body.setPosition(mango5.body,{x:random(550,673),y:random(354,428)})
    Matter.Body.setPosition(mango6.body,{x:random(484,754),y:random(415,459)})
    Matter.Body.setPosition(mango7.body,{x:random(484,754),y:random(415,459)})
    Matter.Body.setPosition(mango8.body,{x:random(484,754),y:random(415,459)})
    Matter.Body.setPosition(mango9.body,{x:random(484,754),y:random(415,459)})
    Matter.Body.setPosition(mango10.body,{x:random(484,754),y:random(415,459)})
    Matter.Body.setStatic(mango1.body,true);
    Matter.Body.setStatic(mango2.body,true);
    Matter.Body.setStatic(mango3.body,true);
    Matter.Body.setStatic(mango4.body,true);
    Matter.Body.setStatic(mango5.body,true);
    Matter.Body.setStatic(mango6.body,true);
    Matter.Body.setStatic(mango7.body,true);
    Matter.Body.setStatic(mango8.body,true);
    Matter.Body.setStatic(mango9.body,true);
    Matter.Body.setStatic(mango10.body,true);
    
  }
}



