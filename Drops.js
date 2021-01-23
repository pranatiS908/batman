class Drops{
    constructor(x,y,r){
      var options={
       restitution:0.4
      }
      this.r=r
      this.body=Bodies.circle(x,y,this.r,options);
      this.color="Blue"
      World.add(world, this.body)
    }
   update(){
       if(Drops.y>0){
         this.update.drops
         drops.y=0
       }
   }

   display(){
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    noStroke();
    fill(this.color)
    ellipseMode(RADIUS);
    ellipse(0, 0, this.r,this.r);
    pop();
  }
}