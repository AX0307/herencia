const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var log1,log2,log3,log4;
var pig1;

function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    ground = new Ground(600,height,1200,20)
    log1 = new Log (810,260,300,PI/2);
    box3 = new Box (700, 250,70,70);
    box4 = new Box (920,250,70,70);
    log2 = new Log (810,180,300,PI/2);
    box5 = new Box (810,160,70,70);
    log3 = new Log (760,120,150,PI/7);
    log4 = new Log (870,120,150,-PI/4);
   // pig1  = new Pig (810,350);
   // pig2 = new Pig (800,190);
    bird = new Bird (20,20,50,50);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    log1.display();
    box3.display();
    box4.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    pig1.display();
    pig2.display();
    bird.display();
}