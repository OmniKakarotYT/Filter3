function preload(){
    clown_nose = loadImage('https://clipart-library.com/image_gallery2/Moustache-PNG-Pic.png');
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
}
function draw(){
    image(video, 0, 0, 300, 300);
}
function takeSnapshot(){
    save('Filtered_Img.png');
}
function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}