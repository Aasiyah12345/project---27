
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1=new Roof(400,100,400,30)
	bob1 = new Bob(230,400,30)
	bob2 = new Bob(300,400,30)
	bob3 = new Bob(370,400,30)
	bob4 = new Bob(450,400,30)
	bob5 = new Bob(550,400,30)

	rope1 =new Rope(bob1.body,roof1.body,-100,0)
	rope2=new Rope(bob2.body,roof1.body,-50,0)
	rope3=new Rope(bob3.body,roof1.body,5,0)
	rope4=new Rope(bob4.body,roof1.body,60,0)
	rope5=new Rope(bob5.body,roof1.body,120,0)

	Engine.run(engine);
  
}


function draw() {

  background(0);
  Engine.update(engine)
  text(mouseX+","+mouseY,mouseX,mouseY)
  roof1.display()
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
 
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-200,y:30})
	}
}

