
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world,ground;
var box1,box2,box3;
var Paper1,dustbin;

var dustbinImage;
function preload() 
{
  dustbinImage = loadImage("sprites/dustbin.png");
}
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    var Option = {isStatic:true}
    ground = Bodies.rectangle(400, 680,800,20,Option);
    World.add(world,ground);
    
    dustbin = createSprite(700,580,140,20);
	  dustbin.addImage(dustbinImage);
	  dustbin.scale = 0.5;
    Paper1= new Paper(100,200,20,20);
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  Engine.update(engine);
  rectMode(CENTER)
  fill("green")
  rect(ground.position.x,ground.position.y,800,20);
  Paper1.display();
  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(Paper1.body, Paper1.body.position, {x:8, y:-15});
    
  }
}


