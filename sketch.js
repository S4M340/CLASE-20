var tilin, spidi

function setup() 
{
  createCanvas(800,400);
  tilin = createSprite(400, 200, 50, 50);
  spidi = createSprite(400,100,20,20);
}
function draw()
{
  background(255,255,255);  
  spidi.x=World.mouseX;
  spidi.y=World.mouseY;
  console.log("hola soy sam");

  if(spidi.x- tilin.x < tilin.width/2 + spidi.width/2
    && tilin.x - spidi.x < tilin.width/2+ spidi.width/2
    && spidi.y - tilin.y < tilin.height/2+ spidi.height/2
    && tilin.y - spidi.y < tilin.height/2+ spidi.height/2 )
  {
    spidi.shapeColor= "red";
    tilin.shapeColor= "red";
  }
  else
{
  spidi.shapeColor = "blue";
  tilin.shapeColor = "blue";
}


  drawSprites();

}