const Engine = Matter.Engine;
const World = Matter.World;
const Constraint = Matter.Constraint;
const Bodies = Matter.Bodies;
var plinko = [];
var divisions = [];
var particle = [];
var engine,world;
function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(480,790);
  for(var i = 0; i <= 480;i = i+80){
  divisions.push(new DIVISIONS(i,650));
  }
  for (var p = 0; p < 480; p = p+50){
    plinko.push( new PLINKO(p,50));
  }
  for (var p = 25; p < 460; p = p+50){
    plinko.push( new PLINKO(p,150));
  }
  for (var p = 0; p < 480; p = p+50){
    plinko.push( new PLINKO(p,250));
  }
  for (var p = 25; p < 460; p = p+50){
    plinko.push( new PLINKO(p,350));
  }
  for (var p = 0; p < 480; p = p+50){
    plinko.push( new PLINKO(p,450));
  }
   ground1 = new GROUND(240,780);
}
function draw() {
  background("red");
  Engine.update(engine);
  for(var i = 0;i<plinko.length;i++){
    plinko[i].display();
  }  
  for(var p = 0;p < divisions.length; p++){
    divisions[p].display();
  }
  if(frameCount % 75 === 0){
    particle.push(new PARTICLE(random(25,465),0,10,10));
  }
  for(var i = 0;i<particle.length;i++){
    particle[i].display();
  }  
ground1.display();
  drawSprites();
}