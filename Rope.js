class Rope {

 constructor(body1,body2,pointA,pointB)  {

    this.pointA=pointA
    this.pointB=pointB

   var options=
   {
        bodyA:body1,
        bodyB:body2,
        pointB:{x:this.pointA , y:this.pointB}
   }

   var rope;
   rope = Matter.Constraint.create({
      pointA:{x:200,y:20},
      bodyB:bob1,
      pointB:{x:0,y:0},
      length:100,
      stiffness:0.1
    })
    World.add(world,rope) 

  } 

display()
{

  Push()
var pointA=this.rope.bodyA.position
var pointB=this.rope.bodyB.position

strokeWeight(2)
line(pointA.x,pointA.y,pointB.x+this.pointA,pointB.y+this.pointB)
pop()

}

}