class Ball{
    constructor(x,y,r){
        var options = {
            density: 1,
            frictionAir: 0.005
            
        } 
        this.body = Bodies.circle(x,y,r,options);
        this.radius = r;
        World.add(world,this.body)

    }

    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        fill("white");
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }
}