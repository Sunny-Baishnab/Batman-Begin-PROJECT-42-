const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine,world
var canvas;
var batMan,batManImg;
var umbrella , rain;
var maxDrops = 100;

var lightning , lightning1img , lightning2img , lightning3img , lightning4img;
var lightningFrame=0;
var drops=[];
function preload(){
    //batManImg = loadAnimation("walking_8.png","walking_7.png","walking_6.png","walking_5.png","walking_4.png","walking_3.png","walking_2.png","walking_1.png")
    lightning1img = loadImage("1.png");
    lightning2img = loadImage("2.png");
    lightning3img = loadImage("3.png");
    lightning4img = loadImage("4.png");
}

function setup(){
   var canvas = createCanvas(500,700);

    engine = Engine.create();
    world = engine.world;

   
   umbrella = new Umbrella(250,500);

   

   //rain = new Drops(50,0);

if(frameCount%100===0){


   for(var i=0; i<maxDrops; i++){
       drops.push(new Drops(random(0,400),random(0,400)));
   }
}
}
function draw(){
    background("black");
    Engine.update(engine);
    umbrella.display();
    drawSprites();
    



    
    if(frameCount%80 === 0){
        lightningFrame = frameCount
        lightning = createSprite(Math.round(random(100,400)),100,10,10);
        lightning.scale = 0.5;
        var rand = Math.round(random(1,4));
        switch(rand){
            case 1: lightning.addImage(lightning1img);
                break;
            case 2: lightning.addImage(lightning2img);
                break;  
            case 3: lightning.addImage(lightning3img); 
                break;
            case 4: lightning.addImage(lightning4img);   
                break;
            default:break;                          
        }
    }
    if(lightningFrame+10===frameCount&&lightning){
        lightning.destroy();
    }
    for (var i = 0; i < maxDrops; i++) {
     
        drops[i].display();
        drops[i].update();
    }
}   

