class Slingshot{
    constructor(body1,point2){
        var option={
            bodyA:body1,
            pointB:point2,
            length:10,
            stiffness:0.04
        
        
        }
            this.sling=Constraint.create(option)
            World.add(world,this.sling)

    }
    fly(){
        this.sling.bodyA=null
    }
    display(){
        if(this.sling.bodyA){

        
        var pointA=this.sling.bodyA.position
        var pointB=this.sling.pointB
        strokeWeight(3);
        line (pointA.x , pointA.y , pointB.x , pointB.y);
    }
}
        
    
}