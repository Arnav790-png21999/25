
    class Paper{
      constructor(x,y){
          var options = {
              
              'restitution':0.8,
              'friction':1.0,
              'density':1.2
          }
          this.body = Bodies.rectangle(x, y, 35,35, options);
          this.width = 50;
          this.height = 50;
          this.image = loadImage("paper.png");
  
          World.add(world, this.body);
        }
        display(){
          var angle = this.body.angle;
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          imageMode(CENTER);
          image(this.image, 0,0, this.width, this.height);
          pop();
        }
      };
  