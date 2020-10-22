
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1;


function setup() {
	var canvas = createCanvas(1500, 500);

	engine = Engine.create();
	world = engine.world;

	paper1 = new Paper(100,450,10,10);
	
	ground = new Ground(750,height,1500,20);

	rect1 = new Rect(1200,440,20,100);
	rect2 = new Rect(995,440,20,100);
	rect3 = new Rect(1100,480,200,20);
}


function draw() {
  background("black");
  Engine.update(engine);

  keyPressed();
  
  paper1.display(); 
  ground.display(); 
  rect1.display();
  rect2.display();
  rect3.display();
}

function keyPressed(){

	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:10,y:-15});
	}

}

