
class Paper {
       constructor(x,y,width,height) {
         
          var options = {
            isStatic: false,
            "restitution":0.5,
            "friction":1,
            "density":0.6
            
        }   
            
            this.body = Bodies.rectangle(x,y,width,height,options);
            this.width = width;
            this.height = height;
       
            World.add(world, this.body)
            this.image=loadImage("sprites/Paper.png")
      }
           display()
           {
             imageMode(CENTER);
             push()
             translate(this.body.position.x,this.body.position.y)
             rotate(this.body.angle);
             fill ("purple");
            
             image(this.image,0,0,this.width,this.height);
            pop()
            }
        
    }