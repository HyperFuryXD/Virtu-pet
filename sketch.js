//Create variables here
var dog,happyDog,database,foodS,foodStock,dogImg2;
var addFood,feedPet;
var fedTime,lastFed;
var foodObj;

function preload()
{
  happyDog = loadImage("images/dogImg.png");
  dogImg2 = loadImage("images/dogImg1.png");
	//load images here
}

function setup() {
 database=firebase.database();
  createCanvas(1000,800);

  feedPet = createButton("Feed the dog");
  feedPet.position(700,95);
  feedPet.mousePressed(feedDog);

  addFood = createButton("Replenish food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);


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

fill(255,255,254);
textSize(15);

if(lastFed>+12){
  text
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






