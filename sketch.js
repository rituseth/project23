var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,rect1Body,rect2Body,rect3Body;
var rect1;
var rect2;
var rect3;
const Engine = Matter.Engine;
const World = Matter.World;
const Render  = Matter.Render ;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world;
var ground;


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

    ground=createSprite(400,700,1000,20);
   var options ={
	   isStatic:true}
	rect1=Bodies.rectangle();
	rect1Body=createSprite(320,680,200,20)
	World.add (world,rect1Body);


	var options={
		isStatic:true}
	rect2=Bodies.rectangle()	
	rect2Body=createSprite(210,640,20,100);
	World.add (world,rect2Body);

	var options={
		isStatic:true}
	rect3=Bodies.rectangle()
	rect3Body=createSprite(400,640,20,100);
	World.add (world,rect3Body);

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);
	Engine.run(engine);

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1600,
		  height: 700,
		  wireframes: false
		}
	  });
Render.run(render);
	
}


function draw() {
	background("white");
  rectMode(CENTER);
  background(0);
  
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  keyPressed();


  drawSprites();

 
}

function keyPressed() {
	 

		if(keyCode === DOWN_ARROW)
		  { Matter.Body.setStatic(packageBody,false); }
				}
	// Look at the hints in the document and understand how to make the package body 
	//fall only on press of the Down arrow key.

    
  
