//Create variables here
var dog,happyDog,database,foodS,foodStock,dogImg2;

function preload()
{
  happyDog = loadImage("images/dogImg.png");
  dogImg2 = loadImage("images/dogImg1.png");
	//load images here
}

function setup() {
 database=firebase.database();
  createCanvas(500, 500);
  dog = createSprite(250,250,70,70);
  dog.addImage(happyDog);
  dog.scale = 0.5;

  foodStock=database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogImg2);
}

  drawSprites();
  //add styles here

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  database.ref('/').update({
    food:x
  })
}






