class Rope{

    constructor(body1,body2,offsetX,offsetY){
        
        this.offsetX =offsetX;
        this.offsetY= offsetY;
        var options={
            bodyA: body1,
            bodyB: body2,
            pointB: {x:this.offsetX,y:this.offsetY}
            
        }
        this.rope= Constraint.create(options);
        World.add(myWorld,this.rope);
    }
     
    display(){

        var ptAx= this.rope.bodyA.position.x;
        var ptAy = this.rope.bodyA.position.y;
        var ptBx = this.rope.bodyB.position.x + this.offsetX
        var ptBy= this.rope.bodyB.position.y + this.offsetY
        
        strokeWeight(4);
       
        line(ptAx,ptAy-38,ptBx,ptBy);
    }




}