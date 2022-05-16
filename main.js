function preload(){
  //no image here
}

function setup() { 
  canvas= createCanvas(700, 500);
  canvas.position(700,250);
  video= createCapture(VIDEO);
  video.hide();

}  

function draw() {
  image(video, 100,100,500,300);
  strokeWeight(20)
  stroke(0,255,0)
  stroke(255,0,0)
  fill(255,0,0)
  circle(100,100,50);
  circle(600,100,50);
  circle(600,400,50);
  circle(100,400,50);
}

function take_snapshot(){
    save('selfie.png');
}
