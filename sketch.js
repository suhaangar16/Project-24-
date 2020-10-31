
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground,bin; 

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(400,200,15);

	bin = new Bin(700,40,15,15);

    ground = new Ground(900,height,800,40);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paperball.display();

  ground.display();

  bin.display();
  
  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}

