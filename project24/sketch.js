
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   paper = new Ball(100,650,30);
   ground = new Ground(400,650,800,30);
   box1 = new Box(550,610,20,100);
   box2 = new Box(700,610,20,100);
   box3 = new Box(625,650,170,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  //paper.display();
  box1.display();
  box2.display();
  box3.display();
  ground.display();  
  drawSprites();
 
}
function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body, paper.position, {x: 40, y: -30})

  }


}


