class Slingshot{
    constructor(b1,point){
        var options={
            bodyA:b1,
            pointB:point,
            stiffness:0.007,
            length:10
        }
        const Constraint=Matter.Constraint
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
        this.body=b1
    }
    display(){
        if(this.sling.bodyA){
            push()
            var p1 = this.sling.bodyA.position
            var p2 = this.sling.pointB
            stroke(0);
            strokeWeight(5);
            line(p1.x,p1.y,p2.x,p2.y)
            pop()
        }
    }
    fly(){
        this.sling.bodyA=null;
    }
    attach(){
        this.sling.bodyA=this.body;
    }
}