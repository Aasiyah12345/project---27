class Rope{
    constructor(body1,body2,ofx,ofy){
        this.ofx=ofx
        this.ofy=ofy
        var options = {
            bodyA:body1,
            bodyB:body2,
            length:250,
            stiffness:0.03
        }
        this.rope = Constraint.create(options)
        World.add(world,this.rope)
    }
    display(){
        var posA = this.rope.bodyA.position
        var posB = this.rope.bodyB.position
        stroke("white")
        strokeWeight(4)
        line(posA.x,posA.y,posB.x+this.ofx,posB.y+this.ofy)
    }
}