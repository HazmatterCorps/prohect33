class Snow{
  constructor(x,y,r){
     var options = {
        restitution: 0.3,
        friction: 0.5,


     }
   this.body = Bodies.circle(x,y,r,options) 
   this.x = x
   this.y = y
   this.r = r
   
   this.image = loadImage("snow4.webp")
   World.add(world,this.body)

  }
  display(){
     var pos = this.body.position
     imageMode(RADIUS)
     image (this.image, pos.x, pos.y, this.r)
     ellipse(0,0,this.r,this.r)
  }
  

}