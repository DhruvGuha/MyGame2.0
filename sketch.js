const Engine= Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint = Matter.Constraint

var engine,world,ball;



function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world;



var options={'restitution': 1}
ball= Bodies.rectangle(100,50,50,80,options)
World.add(world,ball)


var ground_options={'isStatic': true}
ground=Bodies.rectangle(400,390,800,10,ground_options)
World.add(world,ground)

}

function draw() {
  background("cyan");  
Engine.update(engine)

ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,50,50)

rectMode(CENTER)
rect(ground.position.x,ground.position.y,800,10)

  drawSprites();
}

