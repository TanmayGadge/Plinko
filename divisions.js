class Divisions {
    constructor(x, y, w, h) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.width = w;
        this.height = h;
        World.add(world, this.body);
        divisions[this.body];
    }
    display() {
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        fill("white");
        rect(pos.x, pos.y, this.width, this.height);
        pop();
    }
};