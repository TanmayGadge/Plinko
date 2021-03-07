class Plinko{
    constructor(x, y){
        var options = {
            isStatic: true
        }
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(x, y, 10, options);
        World.add(world, this.body);
        plinkos[this.body];

    }
    display(){
        var pos = this.body.position;
        push();
        fill("white");
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, 10);
        pop();
    }
}