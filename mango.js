class Mango{
  constructor(x, y,radius) {
    var options = {
        restitution:0,
        friction:1,
        isStatic:true,
        density:1.2
    }
    this.body = Bodies.circle(x, y, radius, options);
    this.radius= radius;
    this.image = loadImage("sprites/mango.png");
    World.add(world, this.body);
  }
  display(){
    var diameter=this.radius*2
    push();
    translate(this.body.position.x, this.body.position.y);
    imageMode(CENTER);
    image(this.image, 0, 0, diameter+15, diameter+15);
    pop();
  }
}
