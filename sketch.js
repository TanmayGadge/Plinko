const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine, world, ground;
var divisionHeight = 300;
var particles = [];
var plinkos = [];
var divisions = [];
var div1, div2, div3, div4, div5, div6, div7;

function preload() {

}

function setup() {
    createCanvas(700, 765);


    engine = Engine.create();
    world = engine.world;

    ground = new Ground(350, 765, 700, 10);

    for (var k = 0; k <= width; k += 80) {
        divisions.push(new Divisions(k, height - (divisionHeight / 2), 10, divisionHeight));
    }

    for (var j = 40; j <= width; j += 50) {
        plinkos.push(new Plinko(j, 75));
    }
    for (var i = 15; i <= width - 10; i += 50) {
        plinkos.push(new Plinko(i, 175));
    }
    for (var m = 40; m <= width; m += 50) {
        plinkos.push(new Plinko(m, 275));
    }
    for (var n = 15; n <= width - 10; n += 50) {
        plinkos.push(new Plinko(n, 375));
    }

    
    console.log(divisions);
    console.log(particles);
    
    Engine.run(engine);
}

function draw() {
    background(0);
    
    ground.display();
    if (frameCount % 60 === 0) {
        particles.push(new Particle(random(width / 2 - 10, width / 2 + 10), 10, 10));
    }
    
    for (var i = 0; i <= divisions.length - 1; i++) {
        divisions[i].display();
    }

    for (var k = 0; k <= plinkos.length - 1; k++) {
        plinkos[k].display();
    }



    for (var k = 0; k <= particles.length - 1; k++) {
        particles[k].display();
    }
}


