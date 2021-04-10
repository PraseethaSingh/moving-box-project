var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
    music = loadSound("music.mp3")
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";

    block3 = createSprite(510,580,200,30);
    block3.shapeColor = "red";

    block4 = createSprite(720,580,200,30);
    block4.shapeColor = "yellow";


    //create two more blocks i.e. block3 and block4 here

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityY = 3;
    ball.velocityX = 2
    //write code to add velocityX and velocityY

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(touch(ball,block1)) { 
        ball.shapeColor="blue";
        ball.bounceOff(block1)
        music.play();
        
    }



    if(touch(ball,block2)) { 
        ball.shapeColor="orange";
        ball.bounceOff(block2)
        music.play();
    
        //write code to set velocityX and velocityY of ball as 0

        //write code to stop music
    }

    if(touch(ball,block3)) { 
        ball.shapeColor="red";
        ball.bounceOff(block3)
        music.play();
    }

    if(touch(ball,block4)) { 
        ball.shapeColor="yellow";
        ball.bounceOff(block4)
        music.play();
    }

    //write code to bounce off ball from the block3


    //write code to bounce off ball from the block4

    drawSprites();
}
function touch(p1,p2) {
    if (p1.x - p2.x < p2.width/2 + p1.width/2 && p2.x - p1.x < p2.width/2 + p1.width/2 
     && p1.y - p2.y < p2.height/2 + p1.height/2 
     && p2.y - p1.y < p2.height/2 + p1.height/2)
     { return true; } 

      else { 
        return false; } 
    }
