class Droplet{
    constructor (x,y,width,height){
    var options={
        restitution : 3.0,
        friciton : 0.3,
        density : 2.0
    }
    this.body = Bodies.rectangle(x,y,width,height,options)
    this.width = width
    this.height = height
    World.add(world.this.body)

    }
    display(){
        var position = this.body.position
        rect(position.x,position.y,this.width,this.height)
        rectMode(CENTER)
    }
}