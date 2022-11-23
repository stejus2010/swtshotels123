var backgroundImg;

function preload(){
backgroundImg = loadImage("website background.jpg");
}


function setup(){
    
createCanvas(windowWidth,windowHeight); 

}

function draw(){
background(backgroundImg);
backgroundImg.scale=3;
    
    
}

