class Paper {
    constructor(x, y, r) {
      var options = {
          isStatic : false,
          restitution : 0.3,
          friction : 0.5,
          density : 1.5
      }
      this.body = Bodies.circle(x,y,30, options);
      //this.width = 10;
      //this.height = 10;
      this.r = 30;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("white");
      ellipse(0,0, this.r, this.r);
      pop();
    }
  };
  