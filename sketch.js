const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var up, right;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
  

  rectMode(CENTER);
  ellipseMode(RADIUS);

  ball_options = {
    restitution : 0.3,
    friction : 1,
    density : 1
  }

ball = Matter.Bodies.circle(100,100,50, ball_options)
  World.add(world, ball)
  up = createImg("up.png")
  right = createImg("right.png")
  up.size(50, 50)
  up.position(100,340)
  up.mouseClicked(verticalForce)

  right.size(50, 50)
  right.position(20, 200)
  right.mouseClicked(horizontalForce)
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  ellipse(ball.position.x,ball.position.y,50);
  Engine.update(engine);
}
function horizontalForce () {
  Matter.Body.applyForce(ball, {x:0,y:0},{x:10,y:0})
}
function verticalForce () {
  Matter.Body.applyForce(ball, {x:0,y:0},{x:0,y:-100})
}
