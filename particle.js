class PARTICLE{
    constructor(x,y,radius1,radius2){
        var options = {
         restitution:1
        }
        this.body = Bodies.rectangle(x,y,radius1,radius2,options);
       this.radius1 = radius1;
       this.radius2 = radius2;
       this.color = color(random(255,0,0) , random(0,255,0) , random(0,0,255));
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        
       fill(this.color);
        ellipse(0,0,this.radius1,this.radius2);
        pop();
    }
}