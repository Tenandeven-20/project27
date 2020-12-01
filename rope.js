class Rope{

constructor(body1, body2,offsetX){
    var options = {
        bodyA: body1,
        bodyB: body2,
        pointB: {x: offsetX,y: 0}
    }
    this.offsetX = offsetX;
    this.rope = Constraint.create(options);
    World.add(world,this.rope);
}

display(){
    //var pointA = this.rope.bodyA.position;
   //var pointB = this.rope.bodyB.position;
    push();
    strokeWeight(3);
    stroke("white");
    line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.rope.bodyB.position.x + this.offsetX,this.rope.bodyB.position.y);
    pop();
}

}