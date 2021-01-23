class Umbrella{
    constructor(x,y,r){
        var options={
            restitution=0.1
        }
        this.r=r
        matter.body=circle(this.r)
        this.body=loadImage("../images/boyWithUmbrella.png")
        
    }
    display(){
        image(this.body.position.display(180,10))
    }
}