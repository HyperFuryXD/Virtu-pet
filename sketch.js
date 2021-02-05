//Create variables here
var dog, Image1,Image2, database, foodS, foodStock;

function preload()
{
 Image1 = loadImage("images/dogImg.png");
 Image2 = loadImage("images/dogImg1.png");
}
  function setup() {
  createCanvas(500,500);
  database = firebase.database();

  dog = createSprite(250,250,70,70);
  dog.addImage(Image1);

  foodS=database.ref('food');
foodS.on("value,readStock");
}


function draw() { 
  background(46, 139, 87);
  


if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(Image2);
}
  drawSprites();
  //add styles here

}
function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  database.ref('/').update({
    
  })
}
