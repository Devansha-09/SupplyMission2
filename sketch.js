var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var bottomBox,sideBox1,sideBox2;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	// bottomBox = createSprite(400,650,200,20);
	// bottomBox.shapeColor = "red";
	
	// sideBox1 = createSprite(300,610,20,100);
	// sideBox1.shapeColor = "red";

	// sideBox2 = createSprite(500,610,20,100);
	// sideBox2.shapeColor = "red";

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	
	//  bottomBox = Bodies.rectangle(400, 650, 200, 20, {isStatic:true });
	//  bottomBox.shapeColor = "red";
	//  World.add(world,bottomBox);

	//  sideBox1 = Bodies.rectangle(300, 610, 20, width/2, {isStatic:true});
	//  sideBox1.shapeColor = "red";
	//  World.add(world,sideBox1);

	//  sideBox2 = Bodies.rectangle(500, 610, 20, width/2, {isStatic:true});
	//  sideBox2.shapeColor = "red";
	//  World.add(world,sideBox2);

	boxPosition = width/2-100
	boxY = 610;

	sideBox1sprite = createSprite(boxPosition, boxY, 20, 100, {isStatic:true});
	sideBox1sprite.shapeColor = "red";

	sideBox1 = Bodies.rectangle(boxPosition+20, boxY, 20, 100);
	World.add(world, sideBox1);
	
	bottomBoxsprite = createSprite(boxPosition+100, boxY+45, 200, 20, {isStatic:true});
	bottomBoxsprite.shapeColor = "red";

	bottomBox = Bodies.rectangle(boxPosition+100, boxY+45-20, 200, 20, {isStatic:true});
	World.add(world, bottomBox);

	sideBox2sprite = createSprite(boxPosition+200, boxY, 20, 100);
	sideBox2sprite.shapeColor = "red";

	sideBox2 = Bodies.rectangle(boxPosition+200-20, boxY, 20, 100, {isStatic:true});
	World.add(world, sideBox2);
	
	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);
    
  }
}



