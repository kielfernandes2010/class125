function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.hide();

    canvas=createCanvas(550,550);
    //canvas.position(560, 150);
    canvas.center();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    //background('#969A97');
    image(video, 0, 0, 550, 500);

}

function modelLoaded(){
    console.log('PoseNet is initialized!')
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}


