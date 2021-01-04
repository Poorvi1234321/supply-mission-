class SupplyBox{
    constructor(x,y,width,height){
    var opt={restitution:0,density:2};
    this.body=Bodies.rectangle(x,y,width,height,opt);
    World.add(world,this.body);
    this.width=width;
    this.height=height;
    packageBody.addImage(packageIMG);
	packageBody.scale=0.2;


    }
    display(){
        var pos=this.body.position;
  rectMode(CENTER);

  fill("red");
  rect(pos.x,pos.y,this.width,this.height);
    }
}