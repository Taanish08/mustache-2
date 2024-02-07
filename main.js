nose_x=0;
nose_y=0;

function preload() {

}

function setup() {
canvas=createCanvas(600,500);
canvas.center();
video=createCapture(VIDEO);
video.size(600,500);
video.hide();
poseNet=ml5.poseNet(video,modelloaded);
poseNet.on('poses',gotposes);
}

function draw() {
image(video, 0,0,600,500);
}

function modelloaded() {
    console.log("posenet is initialized heheehe");
}

function gotposes(results) {
if(results.length>0) {
    console.log(results);
    nose_x=results[0].pose.nose.x;
    nose_y=results[0].pose.nose.y;
    console.log("Nose X = " + nose_x)
    console.log("Nose Y = " + nose_y)

}
}