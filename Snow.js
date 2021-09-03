class Snow{
    constructor(x,y,width,height){
        var options = {
            'restitution' : 0.9,
            'friction' : 0.9,
            
        }
    this.image= loadImage("snow5.webp");
    this.body = Bodies.rectangle(x,y,width,height,options);
    
    this.width=width;
    this.height=height;
    this.lifetime=100;
    World.add (world,this.body);
    }
    
    
    display(){
        
        
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        roatate(angle)
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
    pop();
    }
}