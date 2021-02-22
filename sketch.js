var canvas;
var music;
var box1,box2,box3,box4
var ball

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(400,400);

    box1= createSprite(50,380,90,10)
    box1.shapeColor="red"
    box2= createSprite(150,380,90,10)
    box2.shapeColor="blue"
    box3= createSprite(250,380,90,10)
    box3.shapeColor="purple"
    box4= createSprite(350,380,90,10)
    box4.shapeColor="oRanGe"
    ball=createSprite(50,50,25,25)
    ball.x=random(50,350)
    ball.velocityX=8
    ball.velocityY=-10
    ball.shapeColor="white"
    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
 var edges=createEdgeSprites();




ball.bounceOff(edges)

if (ball.isTouching(box1)&& ball.bounceOff(box1)){
ball.shapeColor="RED"
}
if (ball.isTouching(box2)&& ball.bounceOff(box2)){
    ball.shapeColor="blue"
music.play()
}
if (ball.isTouching(box3)){
     ball.shapeColor="purple"
     ball.velocityX=0
     ball.velocityY=0
     music.stop()
}
if (ball.isTouching(box4) && ball.bounceOff(box4)){
    ball.shapeColor="orange"
}


    //add condition to check if box touching surface and make it box
    drawSprites();
}
