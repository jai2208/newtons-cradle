const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;

var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	rope1 = new Rope(bob1,roof,-80,0)
	
	
	
	
	
	var bob_options={
		isStatic:true
	}

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	bob1 = Bodies.circle(300,300,40,bob_options)
	bob2 = Bodies.circle(350,300,40,bob_options)
	bob3 = Bodies.circle(400,300,40,bob_options)
	bob4 = Bodies.circle(450,300,40,bob_options)
	bob5 = Bodies.circle(500,300,40,bob_options)

	Engine.run(engine);





	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
  rope1.display();

  
  //create ellipse shape for multiple bobs here
  ellipse(bob1.position.x,bob1.position.y,40)
  ellipse(bob2.position.x,bob2.position.y,40)
  ellipse(bob3.position.x,bob3.position.y,40)
  ellipse(bob4.position.x,bob4.position.y,40)
  ellipse(bob5.position.x,bob5.position.y,40)
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
