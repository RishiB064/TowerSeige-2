class SlingShot
{
    constructor(bodyA,pointB)
    {
        //give options for the constraint
        var options = 
        {
            bodyA: bodyA,
           pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);

    }
    //write a condition to make the bird fly
    fly()
    {
        this.sling.bodyA = null;
    }

    attach(body)
    {
        this.sling.bodyA = body;
    }

    display()
    {
        //display the images
        
        

        if(this.sling.bodyA != null)
        {
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        push();
        stroke(48,22,8);

        /*
        //display the left side of the rubber band
        if(pointA.x < 220)
        {
        strokeWeight(7);
        line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
        line(pointA.x-20,pointA.y,pointB.x+30,pointB.y-3);
        image(this.sling3,pointA.x-30,pointA.y-10,15,30);
        }
        //display the right side of the rubber band
        else
        {
        strokeWeight(3);
        line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
        line(pointA.x+25,pointA.y,pointB.x+30,pointB.y-3);
        image(this.sling3,pointA.x+25,pointA.y-10,15,30);
        }
        
        pop();
        */

    }
    
}
}
