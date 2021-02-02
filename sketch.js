const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() 
{

  createCanvas(1600,800);

  engine = Engine.create();
  world = engine.world;
  
  platform = new Ground(800,780,1600,50);

  box1 = new Box (1400,680,70,80);
  box2 = new Box (1320,680,70,80);
  box3 = new Box (1240,680,70,80);
  box4 = new Box (1160,680,70,80);
  box5 = new Box (1080,680,70,80);
  box6 = new Box (1000,680,70,80);
  box7 = new Box (920,680,70,80);

  //Second layer
   
  box8 = new Box (1320,600,70,80);
  box9 = new Box (1240,600,70,80);
  box10 = new Box (1160,600,70,80);
  box11= new Box (1080,600,70,80);
  box12= new Box (1000,600,70,80);
  
  //Third layer

  box13 = new Box(1240,520,70,80);
  box14 = new Box(1160,520,70,80);
  box15 = new Box(1080,520,70,80);

  // top
  box16 = new Box(1160,440,70,80);


  player = new Box(300,400,80,80);
  
  slingshot = new SlingShot(player.body,{x:300,y:400});


}

function draw() 
{
  background("black");

  Engine.update(engine);

    platform.display();

    fill("lightblue");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    fill("lightpink");
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();

    fill("cyan");
    box13.display();
    box14.display();
    box15.display();

    fill("grey")
    box16.display();

    fill("purple");
    player.display();
    slingshot.display();

    

  drawSprites();
}

function mouseDragged()
{

  Matter.Body.setPosition(player.body,{x:mouseX,y:mouseY});

}

function mouseReleased()
{
  
  slingshot.fly();

}

function keyPressed()
{
  if(keyCode === 32)
  {
    slingshot.attach(player.body);
  }
}