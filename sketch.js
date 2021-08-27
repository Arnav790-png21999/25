const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1,box1,box2,box3,paper1

function preload()
{
	boximage = loadImage('bin1.jpg');

}

function setup() {
	
	
	var canvas = createCanvas(1400, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	

	ground1 = new Ground(700,550,1400,30);
	box1 = new Dustbin(1100,495,150,15);
	box2 = new  Dustbin(1185,420,15,170);
	box3 = new  Dustbin(1015,420,15,170);	
	paper1 = new Paper(200,300);
	
	 Engine.run(engine);
  
}


function draw() {
	background("blue");
	Engine.update(engine);
	
	box3.display();
	box1.display();
	box2.display();	
	ground1.display();
	paper1.display();
	image(boximage,1000,330,200,200);
 
}

	function keyPressed()	{
		if(keyCode===UP_ARROW)	{
			Matter.Body.applyForce(paper1.body,paper1.body.position,{x:110,y:-110});

		}
	}



