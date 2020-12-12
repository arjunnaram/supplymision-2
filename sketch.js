var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,ground1,ground2,ground3,ground4,back,backImg;
 

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
	 
	 
	 
}

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);
	
	 

	packageSprite=createSprite(200, 50, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2

	helicopterSprite=createSprite(200, 170, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	ground1=createSprite(width/2, 540, 200,20);
	ground1.shapeColor="red";
	ground1.visible = true;

	ground2=createSprite(310, 500, 20,100);
	ground2.shapeColor="red";
	ground2.visible = true;

	ground3=createSprite(490, 500, 20,100);
	ground3.shapeColor="red";
	ground3.visible = true;

	ground4=createSprite(width/2,540,800,10);
	ground4.visible = false;

	 

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(200 , 170 , 12 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);
	

	ground1 = Bodies.rectangle(width/2, 526, 200,20 , {isStatic:true} );
	World.add(world, ground1);
	
	ground2 = Bodies.rectangle(310, 500, 20,100, {isStatic:true} );
	World.add(world, ground2);

	ground3 = Bodies.rectangle(490, 500, 20,100, {isStatic:true} );
	World.add(world, ground3);

	ground4 = Bodies.rectangle(width/2,540,800,10,{isStatic:true});
	World.add(world,ground4)

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);

  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;

   
 
  Engine.update(engine);
  drawSprites();
}

function keyPressed(){
	if (keyCode === LEFT_ARROW){
	helicopterSprite.x = helicopterSprite.x-5; 
	translation={x:-5,y:0}
	Matter.Body.translate(packageBody, translation) } 

	else if (keyCode === RIGHT_ARROW) {
	helicopterSprite.x=helicopterSprite.x+5;
	translation={x:5,y:0}
	Matter.Body.translate(packageBody, translation) } 

	else if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false); } 
	}