class Box
{
  constructor(x, y, width, height) 
  {
    //give options for the box
    var options = 
    {
        'restitution':1.0,
        'friction':0.5,
        'density':1.0

    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.Visibility = 255;

    
    //add the box to the world
    World.add(world, this.body);
  }
  //display the box
  display()
  {
    //nameSpace the position and angle
    var pos =this.body.position;
    var angle = this.body.angle;
    console.log(this.body.speed);
    if(this.body.speed < 4)
    {
      push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    

    rect(0, 0, this.width, this.height);
    pop();
    }
    //rotate the box
    else if(this.body.speed >4 )
    {
      World.remove(world,this.body);
      push();
      this.Visibility = this.Visibility - 1;
      pop();
    }
  }

}