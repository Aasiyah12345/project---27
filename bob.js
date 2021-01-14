class Bob {
    constructor(x,y,r){ 
           var options={
             
            restitution:0.1,
            friction: 1,
            density: 1

        }
  this.x=x;
  this.y=y;
  this.r=r;
  this.body=Bodies.circle(x,y,r , options);
  World.add(world, this.body);
      }
      display(){
          var pos = this.body.position
          push()
          translate(pos.x,pos.y)
          fill("pink")
          stroke("black")
          strokeWeight(3)
          ellipseMode(RADIUS)
          ellipse(0,0,this.r,this.r)
          pop()
      }
    }