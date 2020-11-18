
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint  = Matter.Constraint;

var box1,box2,box3,box4,box5,box6,box7;
var  box8,box9,box10,box11,box12;
var ground1,ground2,ground3;
var hexagon1,slingshot1;
var bg,bgImg;
var score = 0;

function preload(){
  getBgImg();
}
function setup() {
  createCanvas(1200, 800);
 

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	// row1
	push ();
	fill ("pink");
	 box1=new Box(450,570,50,50);
	 box2 = new Box(500,570,50,50);
	 box3 = new Box(550,570,50,50);
	 box4 = new Box(600,570,50,50);
	 box5 = new Box(650,570,50,50);
	 box6 = new Box(700,570,50,50);
	 box7 = new Box(750,570,50,50);
     pop ();
	 //row2
	 box8=new Box(500,540,50,50);
	 box9=new Box(550,540,50,50);
	 box10=new Box(600,540,50,50);
	 box11=new Box(650,540,50,50);
	 box12=new Box(700,540,50,50);

     //row4
	 box13=new Box(550,510,50,50);
	 box14=new Box(600,510,50,50);
	 box15=new Box(650,510,50,50);

	 box16=new Box(600,490,50,50);


	box17 = new Box(820,270,40,40);
	box18 = new Box(860,250,40,40);
	box19 = new Box(900,250,40,40);
	box20 = new Box(940,250,40,40);
	box21 = new Box(980,270,40,40);

	box22 = new Box(860,270,40,40);
	box23 = new Box(900,250,40,40);
	box24 = new Box(940,270,40,40);

	box25 = new Box(900,200,40,40);

 hexagon1=new hexagon(150,500,30);

	 slingshot1=new slingShot(hexagon1.body,{x:150,y:500});

	 ground1=new ground(600,600,370,10);
	 ground2=new ground(600,780,1200,20);
	 ground3 = new ground(900,300,220,10)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  if(bgImg)
  background(bgImg);

  fill (175,4,215);
  textSize(35);
  text("Score: " +score,750,40);
  textSize(25)
  text("Hit all the boxes",100,100);
  text("Press Space to get another chance",100,150);
  ground1.display();
  ground2.display();
  ground3.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();

  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();

  box22.display();
  box23.display();
  box24.display();
  box25.display();


  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();

  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();

  box17.score();
  box18.score();
  box19.score();
  box20.score();
  box21.score();

  box22.score();
  box23.score();
  box24.score();
  box25.score();


  slingshot1.display();

  hexagon1.display();
  if(score ==500){
    textSize(30)
    text("Game Over",500,300);
  }
  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(hexagon1.body,{x:mouseX,y:mouseY})
	}
	function mouseReleased(){
	  slingshot1.fly();
	}
	function keyPressed(){
		if(keyCode===32){
			slingshot1.attach(hexagon1.body);
		}
	}

	
async function getBgImg(){
	var resp = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
	var respJson = await resp.json();
	
	var dt = respJson.datetime;
	var hrs = dt.slice(11,13);
	
	if(hrs>=06 && hrs<=18){
		bg="bg.png";
	}
	else{bg="bg2.png"}
	bgImg=loadImage(bg);
	
	}
