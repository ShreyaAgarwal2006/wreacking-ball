const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var wreackingBall;
var b1,b2,b3,b4,b5,b6;
var ground;
var sling;
var backImage;

function preload(){
    backImage = loadImage("city.png");
}
function setup(){
    createCanvas(1000,800);
    engine = Engine.create();
    world = engine.world;

    wreackingBall = new Ball(300,500,40);
    b1 = new Box(900,100,70,70);
    b2 = new Box(800,100,70,70);
    b3 = new Box(700,100,70,70);
    b4 = new Box(900,100,70,70);
    b5 = new Box(800,100,70,70);
    b6 = new Box(700,100,70,70);
    b7 = new Box(900,100,70,70);
    b8 = new Box(800,100,70,70);
    b9 = new Box(700,100,70,70);
    b10 = new Box(900,100,70,70);
    b11 = new Box(800,100,70,70);
    b12= new Box(700,100,70,70);
    b13 = new Box(900,100,70,70);
    b14 = new Box(800,100,70,70);
    b15 = new Box(700,100,70,70);
    b16 = new Box(900,100,70,70);
    b17 = new Box(800,100,70,70);
    b18 = new Box(700,100,70,70);
    b19 = new Box(900,100,70,70);
    b20 = new Box(800,100,70,70);
    b21 = new Box(700,100,70,70);
    b22 = new Box(900,100,70,70);
    b23 = new Box(800,100,70,70);
    b24 = new Box(700,100,70,70);
    b25 = new Box(900,100,70,70);
    b26 = new Box(800,100,70,70);
    b27 = new Box(700,100,70,70);


    ground = new Ground(500,750,1000,20);

    sling = new Sling(wreackingBall.body,{x:500,y:50});
   

    
}

function draw(){
    background(backImage);
    Engine.update(engine);

    wreackingBall.display();
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();
    b13.display();
    b14.display();
    b15.display();
    b16.display();
    b17.display();
    b18.display();
    b19.display();
    b20.display();
    b21.display();
    b22.display();
    b23.display();
    b24.display();
    b25.display();
    b26.display();
    b27.display();
    
    ground.display();
    sling.display();
}
function mouseDragged(){
    Matter.Body.setPosition(wreackingBall.body,{x:mouseX,y:mouseY});
}