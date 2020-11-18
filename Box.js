class Box{

    constructor(x,y,width,height){
        var options={
    
            friction:0
        }
        this.width=width;
        this.height=height;
        this.x=x;
        this.y=y;
        this.Visiblity=255;
        this.image=loadImage("box.png");
        this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options)
       
         World.add(world,this.body)
}
display(){
    if(this.body.speed<3)
    {
    var pos=this.body.position;
    var angle=this.body.angle;
    push ();
    translate (pos.x,pos.y);
    rotate (angle);
    imageMode(CENTER);
   // fill (13,201,196);
    image (this.image,0,0,this.width,this.height);
    pop ();
    }
 else{
        World .remove(world,this.body);
        push ();
        this.Visiblity=this.Visiblity-5;
        tint (255,this.Visiblity);
        image (this.image,this.body.position.x,this.body.position.y,this.width,this.height);
        pop ();
    }
}

    score(){
        if(this.Visiblity<0 && this.Visiblity > -105){
          score++;
          }
      }
    }
