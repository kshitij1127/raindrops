const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(1200,400);
  droplet1 = new Droplet(200,50,20,20)
  droplet2 = new Droplet(230,50,20,20)
  droplet3 = new Droplet(260,50,20,20)
  droplet4 = new Droplet(290,50,20,20)
  droplet5 = new Droplet(320,50,20,20)
  droplet6 = new Droplet(350,50,20,20)
  droplet7 = new Droplet(380,50,20,20)
  droplet8 = new Droplet(410,50,20,20)
  droplet9 = new Droplet(440,50,20,20)
  droplet10 = new Droplet(470,50,20,20)
  droplet11 = new Droplet(500,50,20,20)
  droplet12 = new Droplet(530,50,20,20)  
  droplet13 = new Droplet(560,50,20,20)
  droplet14 = new Droplet(590,50,20,20)
  droplet15 = new Droplet(620,50,20,20)
  droplet16 = new Droplet(660,50,20,20)
  droplet17 = new Droplet(700,50,20,20)
  droplet18 = new Droplet(730,50,20,20)
  droplet19 = new Droplet(760,50,20,20)
  droplet20 = new Droplet(790,50,20,20)
  droplet21 = new Droplet(810,50,20,20)
  
}

function draw() {
  engine.update(Engine)
  background(255,255,255); 
  droplet1.display() 
  droplet2.display() 
  droplet3.display() 
  droplet4.display() 
  droplet5.display() 
  droplet6.display() 
  droplet7.display() 
  droplet8.display() 
  droplet9.display() 
  droplet10.display() 
  droplet11.display() 
  droplet12.display() 
  droplet13.display() 
  droplet14.display() 
  droplet15.display() 
  droplet16.display() 
  droplet17.display() 
  droplet18.display() 
  droplet19.display() 
  droplet20.display() 
  droplet21.display()
}