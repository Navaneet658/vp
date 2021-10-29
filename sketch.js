//Create variables here
var dog,happyDog,database,foodS,foodStock,dogImage;

function preload()
{
  happyDog=loadImage("happydog.png");
  dogImage=loadImage("Dog.png");
	//load images here
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database();
  dog=createSprite(250,300,10,10);
  dog.addImage(dogImage);
  dog.scale=0.2;

  foodStock=database.ref('Food');
  foodStock.on("value",readStock)
}


function draw() {  
  background(46,139,87)
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog)
  }

  drawSprites();
  fill("white");
  text("Food remaining :"+foodS,170,200);
  textSize(13);
  text("NOTE:press UP_ARROW key to feed drago milk",130,10)
  //add styles here

}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if (x<0){
    x=0;
  }
  else{
    x=x-1;
  }
  database.ref("/").update({
    Food:x
  })
}



