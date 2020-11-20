class Rope {
    constructor(body1, body2, offsetX, offsetY ){
        this.offesetX = offsetX
        history.offsetY = offsetY

        var options={
            bodyA: body1,
            bodyB: body2,
           pointB :{x:this.offsetX , y:this.offsetY }
        }
    this.rope = Constraint.create(options);
    World.add(world,this.rope)
    console.log(rope);
    }

    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        strokeWeight(2);
        var Anchor1X = pointA.x
        var Anchor1Y = pointA.y

        var Anchor2X = pointBx + this.offsetX
        var Anchor2Y = pointBy + this.offsetY
        line(Anchor1X, Anchor1Y, Anchor2X, Anchor2Y);
    }
}