var bullet,wall
var speed,weight,thickness


function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 50, 50);
  wall=createSprite(1300, 200, thickness, 100);
bullet.velocityX=5;

  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)
}

function draw() {
  background("black");  

if(hasCollided(bullet,wall))
{
  bullet.velocityX = 0
  var damage=0.5*thickness*weight*speed*speed/(thickness*thickness*thickness);
  if(damage>10)
  {
    wall.shapeColor=color("red")
  }

  if(damage<10)
  {
    wall.shapeColor=color("green")
  }
}


  drawSprites();
  hasCollided(bullet,wall);
}

function hasCollided(obj1,obj2)
{
 bulletRightEdge=obj1.x+obj1.width;
 wallLeftEdge=obj2.x;
 if(bulletRightEdge>=wallLeftEdge)
 {
   return true 
 }
   return false;
}