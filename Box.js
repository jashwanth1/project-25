
class Box {
    constructor(x,y,width,height)  
    {
        
        var options = 
        {
            isStatic: false,
            "restitution":0,
            "friction":1,
            "density":0.1
        }  
             
            this.body = Bodies,rectangle(x,y,width,height,options) 

            this.width=width;
            this.height=height;
       
            World.add(world,this.body);
            this.image = loadImage("sprites/dustbin.png");
        }
           display()
           {
             push()
             rectMode(CENTER)
             fill(255)
             ImageMode(CENTER);;
             image(this.image,0,0,this.width, this. heigh);
             pop();
            } 
}