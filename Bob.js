class Bob {

    constructor(x,y,r){

        var options={
            restitution :1,
            density :1.2,
            friction:0,
            isStatic :false
        }

        this.body = Bodies.circle(x,y,r,options);
        World.add(myWorld,this.body);
        this.image = loadImage("Images/bobby.png");
        this.radius = r;

    }

    display() {

        var pos = this.body.position;

        push()
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.radius+50,this.radius+50);
        pop();
    }

}