class Umbrella{
    constructor(x,y){
        var options={
            isStatic:true
        }

        this.body = Bodies.circle(x,y,40,options);
        this.radius = 100;
        this.image = loadImage("walking_1.png");
        World.add(world,this.body);
    }

    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y+70,300,300);
    }
}