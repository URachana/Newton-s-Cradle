
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var myEngine, myWorld,myRender;

var bobO1,bobO2,bobO3,bobO4,bobO5,bobO6;
var roof;
var rope1,rope2,rope3,rope4,rope5,rope6;

function preload()
{
	
}

function setup() {
	createCanvas(900, 800);


	myEngine = Engine.create();
	myWorld = myEngine.world;

	//Create the Bodies Here.


	myRender = Render.create({
		element: document.body,
		engine: myEngine,
	
		options: {
			width: 900,
			height :800,
			wireframes: false
		}
	});
	//Engine.run(myEngine);
  
	Render.run (myRender);


	//bobO1 = new Bob(150,550,50);
	bobO2 = new Bob(250,550,50);
	bobO3 = new Bob(350,550,50);
	bobO4 = new Bob(450,550,50);
	bobO5 = new Bob(550,550,50);
	bobO6 = new Bob(650,550,50);
	bobDia= 100;
	roof = new Roof(450,10,900,20);

	rope1 = new Rope(bobO4.body,roof.body,0,0);
	rope2 = new Rope(bobO3.body,roof.body,-bobDia,0);
	rope3 = new Rope(bobO5.body,roof.body,bobDia,0);
	rope4 = new Rope(bobO2.body,roof.body,-bobDia*2,0);
	rope5 = new Rope(bobO6.body,roof.body,bobDia*2,0);

}


function draw() {

  Engine.update(myEngine);	
  rectMode(CENTER);
  background(255);
  
 
 //bobO1.display();
 bobO2.display();
 bobO3.display();
 bobO4.display();
 bobO5.display();
 bobO6.display();
 roof.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bobO2.body,bobO2.body.position,{x:-500,y:-505});

	}
}


