var maxDrops=100
var umbrella, drops
function preload(){
    
}

function setup(){
   createCanvas(350,350)
   umbrella=new Umbrella(50,50,5)

    
}

function draw(){
    for(var i=0; i<maxDrops; i++){
       drops.push(new createDrop(random(0,400), random(0,400)));
    }
    umbrella.display
    drops.display
}   

