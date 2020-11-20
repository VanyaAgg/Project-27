
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1, bob2, bob3, bob4;
var roof;
var rope1, rope2, rope3, rope4;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

bob1 = new Bob(156,600,70);
bob2 = new Bob(255,600,70);
bob3 = new Bob(356,600,70);
bob4 = new Bob(457,600,70);

roof = new Roof (350,290,500,20);

rope1 = new Rope(bob1.body, roof.body, BobDiameter*2, 0);
rope2 = new Rope(bob2.body, roof.body, BobDiameter*2, 0);
rope3 = new Rope(bob3.body, roof.body, BobDiameter*2, 0);
rope4 = new Rope(bob4.body, roof.body, BobDiameter*2, 0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  drawSprites();
 
}


