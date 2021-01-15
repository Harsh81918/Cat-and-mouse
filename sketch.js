var cat,catSitting,catWalking,catStanding;
var mouse,mouseStanding,mouseTeasing,mousePlaying;
var background00,background0;

function preload() {
    //load the images here
    catSitting = loadAnimation("tomOne.png");
    catWalking = loadAnimation("tomTwo.png","tomThree.png");
    catStanding = loadAnimation("tomFour.png");

    background0 = loadAnimation("garden.png");

    mouse = loadAnimation("jerryOne.png");
    mouseTeasing = loadAnimation("jerryTwo.png","jerryThree.png");
    mousePlaying = loadAnimation("jerryFour.png");
}

function setup(){
    createCanvas(975,700);
    //create tom and jerry sprites here
    
    background00 = createSprite(490,350,2000,1000); 
    background00.addAnimation("sitting",background0);

    cat = createSprite(700,570,30,30);
    cat.addAnimation("sit",catSitting);
    cat.scale=0.2;
    cat.setCollider("rectangle",0,0,1000,1000);
    cat.debug=true;
    
    tom = createSprite(150,570,20,20);
    tom.addAnimation("sti",mouse);
    tom.scale=0.2;
    tom.setCollider("rectangle",0,0,1000,1000);
    tom.debug=true;
}

function draw() {

    background("black");
    //Write condition here to evalute if tom and jerry collide
 
    if(cat.x-tom.x<(cat.width/2-tom.width/2)){
        cat.addAnimation("standing",catStanding);
        cat.changeAnimation("standing",catStanding);
        cat.velocityX=0;
        cat.x=cat.x+150;
    
        tom.addAnimation("teasing",mousePlaying);
        tom.changeAnimation("teasing",mousePlaying);
    }
    
    keyPressed();

    drawSprites();

    textSize(20);
    stroke("white")
    text(cat.x+","+cat.y,100,105);
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW){
    cat.addAnimation("walking",catWalking)
    cat.changeAnimation("walking",catWalking);
    cat.velocityX=-3;

    tom.addAnimation("teasing",mouseTeasing);
    tom.changeAnimation("teasing",mouseTeasing);

}

}
