

rightwrist=0;
leftwrist=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

canvas=createCanvas(550,550)
canvas.position(560,130);
posenet=ml5.poseNet(video,modelloaded);
posenet.on("pose",getposes);
}
function modelloaded(){
    console.log("posenetstarted");
}
