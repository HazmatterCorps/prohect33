var Engine = Matter.Engine
var World = Matter.World
var Bodies = Matter.Bodies


var backgroundImage
var snowyDay, snowyDayImage
var snow = []
function preload() {
  backgroundImage = loadImage ("snow3.jpg")
  


}





function setup() {
  createCanvas(800,600);
  createSprite(400, 200, 50, 50);
  engine = Engine.create()
  world = engine.world
  bodies = engine.bodies


}

function draw() {
  background(backgroundImage);
  Engine.update(engine)
  if(frameCount%60===0){
    snow.push (new Snow(random(60, 700), random(50,500),10,10))

  }
  drawSprites();
}