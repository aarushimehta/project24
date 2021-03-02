class Ball {
    constructor(x,y,r) {
      var options = {
          restitution = 0.6
      }
      this.body = Bodies.circle(x,y,r,options);
      this.r = r;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      rotate(this.body.angle);
      fill("red");
      ellipse(0,0,this.r);
      ellipseMode(RADIUS);
      pop();
    }
  };