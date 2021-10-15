

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
function getposes(results){
    console.log(results);
    leftwrist=results[0].pose.leftWrist.x;
    rightwrist=results[0].pose.rightWrist.x;
    diffrence=floor(leftwrist-rightwrist);
    }
    function draw(){
        background('#969A97');
        document.getElementById("fontisize").innerHTML="Font Size Is "+diffrence+"px";
        textSize(diffrence);
        fill('#FFE787')
        text("Adit.C.Gad",50,400);
    }